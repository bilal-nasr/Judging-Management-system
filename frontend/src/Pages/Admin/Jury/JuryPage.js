import React, { useState, useEffect } from "react";
import AddJudge from "./AddJudge";
import TableDataViewer from "../Tables/JuryTableDataViewer";
import api from "../../../api";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';


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
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <AddJudge />
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
