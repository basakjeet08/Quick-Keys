import useSentence from "./hooks/useSentence";

function App() {
  const { input, setInput, sentence, resetState } = useSentence();

  return (
    <div className="flex flex-col gap-8 p-8">
      <p className="font-bold text-2xl">
        {sentence.map((currentWord, index) => {
          return (
            <span key={index} className={currentWord.color}>
              {currentWord.word + " "}
            </span>
          );
        })}
      </p>

      <textarea
        className="p-4 w-10/12 text-background text-xl"
        name="user-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={resetState}>Reset</button>
    </div>
  );
}

export default App;
