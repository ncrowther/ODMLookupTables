import React, { useState } from "react";
import { Typography, Paper, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppContext } from "../../context/AppContext";

const OdmConfig = () => {

  const { OdmURL, setOdmURL, getDefaultOdmURL } = useAppContext();

  const [localURL, setLocalURL] = useState(getDefaultOdmURL);

  const handleSubmit = (e) => {
    setOdmURL(localURL);
    console.log("URL: " + localURL);
  };

  const handleReset = (e) => {
    const defaultURL = getDefaultOdmURL();
    setOdmURL(defaultURL);
    setLocalURL(defaultURL);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Odm Config
      </Typography>
      <TextField
        label="Odm URL"
        variant="outlined"
        value={localURL}
        fullWidth
        sx={{ mt: 1, mb: 1 }}
        onChange={(e) => setLocalURL(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => handleSubmit()}
        endIcon={<SendIcon />}
        sx={{ mt: 5, mb: 5 }}
      >
        Update URL
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleReset()}
        endIcon={<RestartAltIcon />}
        sx={{ ml: 2, mt: 5, mb: 5 }}
      >
        Reset URL
      </Button>
    </Paper>
  );
};

export default OdmConfig;
