import React, { useState } from "react";

import { Box, Tabs, Tab } from "@mui/material";
import OdmConfig from "./OdmConfig";

const ConfigPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {selectedTab === 0 && <OdmConfig />}
      </Box>
    </Box>
  );
};

export default ConfigPanel;
