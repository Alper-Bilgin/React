import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Flashcard from "../components/Flashcard";
import words from "../data/words";

function App() {
  const [queue, setQueue] = useState(words);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [unknownWords, setUnknownWords] = useState([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  const handleAnswer = (understood) => {
    const currentWord = queue[currentIndex];

    if (!understood) {
      setUnknownWords((prev) => [...prev, currentWord]);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < queue.length) {
      setCurrentIndex(nextIndex);
    } else if (unknownWords.length > 0 || !understood) {
      const nextRound = [...(understood ? unknownWords : [...unknownWords, currentWord])];
      setQueue(nextRound);
      setUnknownWords([]);
      setCurrentIndex(0);
    } else {
      setSessionComplete(true);
    }
  };

  const resetSession = () => {
    setQueue(words);
    setUnknownWords([]);
    setCurrentIndex(0);
    setSessionComplete(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f0f4f8" px={2}>
      <Typography variant="h4" gutterBottom>
        İngilizce Türkçe Kartlar
      </Typography>

      {sessionComplete ? (
        <Box textAlign="center">
          <Typography variant="h5" color="success.main" gutterBottom>
            🎉 Tüm kelimeleri biliyorsunuz!
          </Typography>
          <Button variant="outlined" onClick={resetSession}>
            Baştan Başla
          </Button>
        </Box>
      ) : (
        <Flashcard word={queue[currentIndex]} onAnswer={handleAnswer} />
      )}
    </Box>
  );
}

export default App;
