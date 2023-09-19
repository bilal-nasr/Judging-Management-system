import React, { useState, useEffect } from "react";
import AddJudge from "../Addstartups";
import TableDataViewer from "../Tables/StartupTableDataViewer";
import api from "../../../api";
import AddStartups from "../addStartup";

export default function StartupPage() {
  const [dataGot, setDataGot] = useState(false);
  const [data, setData] = useState([]);

  const getAllStartup = async () => {
    try {
      const StartupData = await api.get("/startup/getAllStartup");
      setDataGot(true);
      setData(StartupData.data.data);
    } catch (err) {
      // Handle errors
    }
  };

  // Use useEffect to call getJuries when the component is first mounted
  useEffect(() => {
    getAllStartup();
  }, []); // The empty dependency array makes this run once on component mount

  useEffect(()=>{
    console.log(dataGot)
  },[dataGot])

  return (
    <>
      <AddStartups />
      <br />
      
      {dataGot ? (
        <TableDataViewer data={data} />
      ) :
      
      (
        <p>Loading data...</p>
      )}
    </>
  );
}
