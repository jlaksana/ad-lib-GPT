import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Paragraph({ paragraph }) {
  const [finished, setFinished] = useState("");
  const [loading, setLoading] = useState(false);
  const adLibArray = paragraph.split(" ");
  const inputIndices = [];

  const handleSubmit = async () => {
    setLoading(true);
    const inputs = document.querySelectorAll("input");
    const inputValues = [];
    inputs.forEach((input, i) => {
      if (i === 0) return;
      inputValues.push(input.value);
    });
    inputIndices.forEach((index, i) => {
      adLibArray[index] = inputValues[i];
    });
    // console.log(adLibArray.join(" "));
    const story = adLibArray.join(" ")
    const response = await fetch(
      `http://localhost:5005/story/finish?story=${story}`
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    // setStory(data.story);
    setFinished(data.story);
    setLoading(false);
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
      <Button variant="contained" onClick={handleSubmit} disabled={loading}>
        Submit
      </Button>
      {loading && <p>Loading...</p>}
      {finished && <p>{finished}</p>}
    </>
  ) : null;
}

export default Paragraph;
