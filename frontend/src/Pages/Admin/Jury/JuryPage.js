import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from "react";
import api from "../../../api";
import TableDataViewer from "../Tables/JuryTableDataViewer";
import AddJudge from "./AddJudge";
//import BackArrow from "../../../Components/BackArrow"


export default function JuryPage() {
    const [dataGot, setDataGot] = useState(false);
    const [data, setData] = useState([]);

    const getJuries = async () => {
        try {
            const juryData = await api.get("/jury/getAllJuries");
            setDataGot(true);
            setData(juryData.data.data);
        } catch (err) {
            // Handle errors
        }
    };

    // Use useEffect to call getJuries when the component is first mounted
    useEffect(() => {
        getJuries();
    }, []); // The empty dependency array makes this run once on component mount

    useEffect(() => {
        console.log(dataGot)
    }, [dataGot])

    return (

        <div style={{ marginTop: "20px" }}>
            <div style={{ marginTop: "20px", marginLeft: "20px", }}>
                <AddJudge onDataRefresh={getJuries} />
            </div>

            <br />

            {dataGot ? (
                <TableDataViewer data={data} />
            ) : (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress sx={{ marginTop: "100px" }} />
                </div>

            )}
        </div>
    );
}
