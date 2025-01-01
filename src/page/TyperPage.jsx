import useSentence from "../hooks/useSentence";
import useTimer from "../hooks/useTimer";

function TyperPage() {
  const { input, setInput, sentence, wordIndex, resetState, correctWords } =
    useSentence();
  const { timeLeft, isCompleted, startTimer, resetTimerState } = useTimer({});

  const resetPageState = () => {
    resetState();
    resetTimerState();
  };

  const updateInput = (event) => {
    setInput(event.target.value);
    startTimer();
  };

  // This function creates the Span elements for each and every word in the sentence
  const createSentenceHtml = () => {
    return sentence.map((currentWord, index) => {
      return (
        <span
          key={index}
          className={wordIndex === index ? "text-white" : currentWord.color}
        >
          {`${currentWord.word} `}
        </span>
      );
    });
  };

  return (
    <div className="flex-1 flex flex-col gap-8 p-4 w-2/3 items-center justify-center">
      <div className="flex flex-row gap-4 items-center ">
        <p className="font-medium text-2xl text-primary">
          Time left : {timeLeft}
        </p>

        <p className="font-medium text-2xl text-primary">
          Correct Words : {correctWords}
        </p>
      </div>
      <p className="font-medium text-2xl">{createSentenceHtml()}</p>

      <textarea
        className="p-4 w-full h-36 bg-background outline-primary rounded-lg font-medium text-xl"
        name="input"
        value={input}
        onChange={updateInput}
        placeholder="Start Writing Here"
        disabled={isCompleted}
      />

      <button
        className="bg-primary px-8 py-3 rounded-lg"
        onClick={resetPageState}
      >
        Reset
      </button>
    </div>
  );
}

export default TyperPage;
