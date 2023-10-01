import React, { useState, useEffect } from "react";
import AddBootcamp from "../Bootcamps/AddBootcamp";
import TableDataViewer from "../Tables/BootcampsTableDataviewer";
import api from "../../../api";

export default function BootcampPage() {
  const [dataGot, setDataGot] = useState(false);
  const [data, setData] = useState([]);

  const getBootcamp = async () => {
    try {
      const bootcampData = await api.get("/Bootcamp/getAllBootcamp");
      setDataGot(true);
      setData(bootcampData.data.data);
    } catch (err) {
      // Handle errors
    }
  };

  // Use useEffect to call getJuries when the component is first mounted
  useEffect(() => {
    getBootcamp();
  }, []); // The empty dependency array makes this run once on component mount

  useEffect(()=>{
    console.log("is data got: ",dataGot)
  },[dataGot])

  return (
    <div style={{marginTop:"20px"}}>
      <AddBootcamp />
      <br />
      
      {dataGot ? (
        <TableDataViewer data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
