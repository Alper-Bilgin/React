import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function MUIAvatar() {
  return (
    <Stack spacing={2}>
      <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" sx={{ width: 50, height: 50 }} />
      <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" sx={{ width: 50, height: 50 }} />
      <Avatar>E</Avatar>
      <Avatar sx={{ bgcolor: "red" }}>H</Avatar>
      <Avatar sx={{ bgcolor: "purple", width: 30, height: 30 }}>Y</Avatar>
    </Stack>
  );
}

export default MUIAvatar;
