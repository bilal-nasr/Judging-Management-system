import React, { useState, useEffect } from "react";
import AddJudge from "./AddJudge";
import TableDataViewer from "../Tables/JuryTableDataViewer";
import api from "../../../api";

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

  useEffect(()=>{
    console.log(dataGot)
  },[dataGot])

  return (
    <div style={{marginTop:"20px"}}>
      <AddJudge />
      <br />
      
      {dataGot ? (
        <TableDataViewer data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
