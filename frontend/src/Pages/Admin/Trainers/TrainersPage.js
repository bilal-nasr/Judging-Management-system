import React, { useState, useEffect } from "react";
import AddTrainer from "./AddTrainer";
import TableDataViewer from "../Tables/TrainerTableDataViewer";
import api from "../../../api";
import { CircularProgress } from "@mui/material";

export default function TrainerPage() {
  const [dataGot, setDataGot] = useState(false);
  const [data, setData] = useState([]);

  const getTrainer = async () => {
    try {
      const data = await api.get("/trainers/getAllTrainers");
      setDataGot(true);
      setData(data?.data.data);
    } catch (err) {
      // Handle errors
    }
  };

  // Use useEffect to call getJuries when the component is first mounted
  useEffect(() => {
    getTrainer();
  }, [dataGot]); // The empty dependency array makes this run once on component mount

  useEffect(()=>{
    console.log(dataGot)
  },[dataGot])

  return (
    <div style={{marginTop:"20px",marginLeft: "20px", marginRight:"60px"}}>
      <div style={{ marginTop: "20px"}}>
      <AddTrainer />
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
