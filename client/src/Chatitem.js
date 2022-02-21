import { Box } from "@mui/material";
import React from "react";

function ChatItem({ message }) {
  const { body } = message;
  return (
    <Box
      sx={{
        border: 1,
        margin: 2,
        borderRadius: 1,
        textAlign: "left",
        paddingBlock: 1,
        paddingInline: 2,
        backgroundColor: "#222426",
      }}
    >
      <p
        style={{
          marginBlock: 2,
          fontSize: "1.2em",
          color: "white",
        }}
      >
        {body}
      </p>
    </Box>
  );
}

export default ChatItem;
