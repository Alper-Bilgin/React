import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "./CustomTabPanel";

function MUITabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Kişisel Bilgiler" />
          <Tab label="Eğitim Bilgisi" />
          <Tab label="İletişim" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        Alper Bilgin
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        KTUN
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        alperbilgin200@gmail.com
      </CustomTabPanel>
    </Box>
  );
}

export default MUITabs;
