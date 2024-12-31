import useSentence from "../hooks/useSentence";

function TyperPage() {
  const { input, setInput, sentence, resetState } = useSentence();

  // This function creates the Span elements for each and every word in the sentence
  const createSentenceHtml = () => {
    return sentence.map((currentWord, index) => {
      return (
        <span key={index} className={currentWord.color}>
          {`${currentWord.word} `}
        </span>
      );
    });
  };

  return (
    <div className="flex-1 flex flex-col gap-8 p-4 w-2/3 items-center justify-center">
      <p className="font-medium text-2xl">{createSentenceHtml()}</p>

      <textarea
        className="p-4 w-full h-36 bg-background outline-primary rounded-lg font-medium text-xl"
        name="input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Start Writing Here"
      />

      <button className="bg-primary px-8 py-3 rounded-lg" onClick={resetState}>
        Reset
      </button>
    </div>
  );
}

export default TyperPage;
