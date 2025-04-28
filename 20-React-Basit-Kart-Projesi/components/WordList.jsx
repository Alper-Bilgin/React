import React from "react";
import { Grid } from "@mui/material";
import Flashcard from "./Flashcard";

const WordList = ({ words }) => {
  const handleFeedback = (status, word) => {
    console.log(`${word.en} => ${status === "understood" ? "Anlaşıldı" : "Anlaşılmadı"}`);
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {words.map((word, index) => (
        <Grid item key={index}>
          <Flashcard word={word} onFeedback={handleFeedback} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WordList;
