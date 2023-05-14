import { Button, TextField } from "@mui/material";

function Paragraph({ paragraph }) {
  const adLibArray = paragraph.split(" ");
  const inputIndices = [];

  const handleSubmit = () => {
    const inputs = document.querySelectorAll("input");
    const inputValues = [];
    inputs.forEach((input, i) => {
      if (i === 0) return;
      inputValues.push(input.value);
    });
    inputIndices.forEach((index, i) => {
      adLibArray[index] = inputValues[i];
    });
    console.log(adLibArray.join(" "));
  };

  return paragraph ? (
    <>
      <p>
        {adLibArray.map((word, i) => {
          if (word[0] === "[") {
            inputIndices.push(i);
            const lastBracketIndex = word.lastIndexOf("]");
            const label = word.slice(1, lastBracketIndex);
            if (lastBracketIndex === word.length - 1)
              return <TextField size="small" key={i} label={label} />;
            else {
              const punctuation = word.slice(lastBracketIndex + 1);
              return (
                <>
                  <TextField size="small" key={i} label={label} />
                  {punctuation}
                </>
              );
            }
          }
          return word + " ";
        })}
      </p>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  ) : null;
}

export default Paragraph;