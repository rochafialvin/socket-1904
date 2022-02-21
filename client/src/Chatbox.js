import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function Chatbox() {
  return (
    <Box
      sx={{
        width: "60%",
        margin: "50px auto",
        border: "1px solid gray",
        borderRadius: 4,
        padding: "20px 5px",
        height: 500,
      }}
    >
      {/* Menampilkan pesan */}
      <div style={{ height: 420 }}>Pesan akan tampil disini</div>
      {/* Input pesan */}
      <div style={{ width: "97%", display: "flex", margin: "10px auto" }}>
        <TextField id="outlined-basic" variant="outlined" />
      </div>
    </Box>
  );
}

export default Chatbox;
