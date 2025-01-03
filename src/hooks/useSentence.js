import { generate } from "random-words";
import { useEffect, useState } from "react";

function generateWords() {
  return generate(15).map((word) => {
    return {
      word: word,
      color: "text-gray-500",
    };
  });
}

function useSentence() {
  // Sentence State variables for sentences and inputs
  const [input, setInput] = useState("");
  const [sentence, setSentence] = useState(generateWords());
  const [correctWords, setCorrectWords] = useState(0);

  // Helper State variables for tracking the current word index and the last space
  const [wordIndex, setWordIndex] = useState(0);
  const [lastSpace, setLastSpace] = useState(0);

  // Function to reset the state variables and restart the challenge
  const resetState = () => {
    setSentence(generateWords());
    setWordIndex(0);
    setInput("");
    setLastSpace(0);
    setCorrectWords(0);
  };

  // This function checks if the inputted word is correct or not and change the color accordingly
  const checkWord = (inputtedWord) => {
    if (wordIndex === sentence.length - 1) {
      if (inputtedWord === sentence[sentence.length - 1]) {
        setCorrectWords((prev) => prev + 1);
      }

      setSentence(generateWords());
      setWordIndex(0);
      return;
    }

    setSentence((prevSentence) => {
      return prevSentence.map((word, index) => {
        if (index === wordIndex) {
          const isCorrect = inputtedWord === word.word;

          if (isCorrect) {
            setCorrectWords((prev) => prev + 1);
          }

          return {
            ...word,
            color: isCorrect ? "text-green-500" : "text-red-500",
          };
        }

        return word;
      });
    });

    setWordIndex((prev) => prev + 1);
  };

  // Running after each and every character input
  useEffect(() => {
    if (!input.endsWith(" ")) return;
    const formattedString = input.substring(lastSpace, input.length).trim();
    if (formattedString.length === 0) return;

    checkWord(formattedString);
    setLastSpace(input.length - 1);
  }, [input]);

  return { input, setInput, sentence, wordIndex, resetState, correctWords };
}

export default useSentence;
