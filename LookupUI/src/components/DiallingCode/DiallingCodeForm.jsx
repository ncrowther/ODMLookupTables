import React, { useEffect, useState } from "react";
import { useDiallingCodeContext } from "../../context/DiallingCodeContext";

import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box, Paper, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


function createData(name, state) {
  return { name, state };
}

var rows = [
  //createData('gfdg', 'Active'),
];

const DEFAULT_COUNTRY = "United Kingdom";

const DiallingCodeForm = () => {
  //local state for results
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [advisory, setAdvisory] = useState("N/A");
  const [errors, setErrors] = useState({});


  //state & functions from DiallingCodeContext
  const { getDiallingCodeResult, DiallingCodeResult } = useDiallingCodeContext();

  useEffect(() => {
    const isEmpty = Object.keys(DiallingCodeResult).length === 0;
    if (!isEmpty) {
      console.log("Result updated.");

      var advisory = "OK"

      advisory = DiallingCodeResult.OutputValues[0]

      
      setAdvisory(advisory);
    }
  }, [DiallingCodeResult]);



  const handleSubmit = (e) => {

    console.log("Submitting...")

    setErrors({ });

      //create an object to hold all the data from the form

      const payload =  {
        "InputValues": [
          country
        ],
        "TableName": "CountryCode2DialingCode",
        "__DecisionID__": "123456"
      }

      console.log(payload)

      //We don't get a payload back, this is handled asychronously
      //through usEffect hook. The hook will be called when the data
      //is updated.
      getDiallingCodeResult(payload);
    
  };

  return (
    <Box flex={8} p={2}>
      <Paper sx={{ ml: 2, p: 4 }}>
        
      <Grid xs={12}>
            <Typography variant="h6" gutterBottom>Country</Typography>
            <TextField id="outlined-basic" label="" variant="outlined"
                onChange={(e) => setCountry(e.target.value)}
                error={
                  errors.country !== undefined &&
                  errors.country.length > 0
                }
                helperText={errors.country}
            />
        </Grid>

        <Button
          variant="contained"
          onClick={() => handleSubmit()}
          endIcon={<SendIcon />}
          sx={{ mt: 5, mb: 5 }}
        >
          Lookup
        </Button>

         <Box sx={{ p: 2 }} >
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Typography variant="h6" gutterBottom>
                Extension
              </Typography>
            </Grid>
            <Grid xs={6}></Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                 {advisory}
              </Typography>
            </Grid>
          </Grid>
        </Box>
     
      </Paper>
    </Box>
  );
};

export default DiallingCodeForm;
