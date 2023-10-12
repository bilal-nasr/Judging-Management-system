import React, { useState, useEffect } from "react";
import api from "../../api";
import { Button, Paper, Typography, Radio, RadioGroup, FormControl, FormControlLabel, Container } from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function StartupEvaluation() {
  const [criterias, setCriterias] = useState([]);
  const [dataGot, setDataGot] = useState(false);

  const getCriteria = async () => {
    try {
      const data = await api.get("/evaluation/getAllCriteria");
      setDataGot(true);
      setCriterias(data?.data.criteria);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    getCriteria();
  }, []);
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Startup Evaluation
      </Typography>
      {dataGot &&
        criterias.map((criteria) => (
          <Paper key={criteria.id} elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>{criteria.description}</Typography>
            <FormControl component="fieldset">
              <RadioGroup row name={`rating_${criteria.id}`}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <FormControlLabel
                    key={rating}
                    value={rating.toString()}
                    control={<Radio color="primary" />}
                    label={rating.toString()}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>
        ))}
      <Button variant="contained" color="primary" onClick={()=>{navigate(-1)}}>
        Submit
      </Button>
    </Container>
  );
}
