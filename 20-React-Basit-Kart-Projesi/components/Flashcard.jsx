import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, Stack } from "@mui/material";
import { FaExchangeAlt } from "react-icons/fa";

const Flashcard = ({ word, onAnswer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <Card
      sx={{
        width: 300,
        height: 220,
        bgcolor: flipped ? "#e8f5e9" : "#e3f2fd",
        textAlign: "center",
        p: 2,
        boxShadow: 5,
      }}
    >
      <CardContent onClick={handleClick} sx={{ cursor: "pointer" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <FaExchangeAlt size={24} />
          <Typography variant="h5" mt={2}>
            {flipped ? word.tr : word.en}
          </Typography>
          <Typography variant="caption" mt={1}>
            (Tıklayarak çevir)
          </Typography>
        </Box>
      </CardContent>

      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button variant="contained" color="success" onClick={() => onAnswer(true)}>
          Anladım
        </Button>
        <Button variant="outlined" color="error" onClick={() => onAnswer(false)}>
          Anlamadım
        </Button>
      </Stack>
    </Card>
  );
};

export default Flashcard;
