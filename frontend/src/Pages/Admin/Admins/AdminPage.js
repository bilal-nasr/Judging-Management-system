import React, { useState, useEffect } from "react";
import AddAdmin from "./AddAdmin";
import TableDataViewer from "../Tables/AdminTableDataviewer";
import api from "../../../api";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
//import BackArrow from "../../../Components/BackArrow"


export default function AdminPage() {
    const [dataGot, setDataGot] = useState(false);
    const [data, setData] = useState([]);

    const getAllAdmins = async () => {
        try {
            const AdminData = await api.get("/admin/getAllAdmin");
            setDataGot(true);
            setData(AdminData.data.data);
        } catch (err) {
            // Handle errors
        }
    };

    // Use useEffect to call getJuries when the component is first mounted
    useEffect(() => {
        getAllAdmins();
    }, []); // The empty dependency array makes this run once on component mount

    useEffect(() => {
        console.log(dataGot)
    }, [dataGot])

    return (

        <div style={{ marginTop: "20px" }}>
            <div style={{ marginTop: "20px", marginLeft: "20px", }}>
                <AddAdmin onDataRefresh={getAllAdmins} />
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
