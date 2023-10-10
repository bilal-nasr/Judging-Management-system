import React, { useState, useEffect } from "react";
import TableDataViewer from "../Tables/StartupTableDataViewer";
import api from "../../../api";
import AddStartups from "./AddStartup";
import { CircularProgress } from "@mui/material";

export default function StartupPage() {
  const [dataGot, setDataGot] = useState(false);
  const [data, setData] = useState([]);

  const getAllStartup = async () => {
    try {
      const startupData = await api.get("/startup/getAllStartups");
      const startups = startupData.data.data;

      // Use Promise.all to wait for all promises to resolve
      const modifiedStartups = await Promise.all(
        startups.map(async (startup) => {
          const getBootcamp = await api.get(`/Bootcamp/getBootcamp/${startup.bootcamps_bootcampId}`);
          const bootcampType = getBootcamp.data.data.type;
          // Add a new key 'bootcampType' with the value from the API response
          return { ...startup, bootcampType };
        })
      );

      console.log(modifiedStartups);
      // Set the modified array in the state
      setData(modifiedStartups);

      // Set dataGot to true
      setDataGot(true);
    } catch (error) {
      // Handle errors
    }
  };

  // Use useEffect to call getJuries when the component is first mounted
  useEffect(() => {
    getAllStartup();
  }, []); // The empty dependency array makes this run once on component mount

  useEffect(() => {
    console.log(dataGot);
  }, [dataGot]);

  return (
    <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "60px" }}>
      <div style={{ marginTop: "20px" }}>
        <AddStartups onDataRefresh={getAllStartup} />
      </div>
      <br />

      {dataGot ? (
        <TableDataViewer data={data} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ marginTop: "100px" }} />
        </div>
      )}
    </div>
  );
}
