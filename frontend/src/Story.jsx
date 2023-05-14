import { Button } from "@mui/material";
import { useState } from "react";
import Paragraph from "./Paragraph";

export default function Story({ theme }) {
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:5005/story/generate?theme=${theme}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setStory(data.story);
    setLoading(false);
  };

  return (
    <div style={{ width: "1000px" }}>
      <Button variant="contained" onClick={generateStory}>
        Generate
      </Button>
      {loading && <p>Loading...</p>}
      {story && <Paragraph paragraph={story} />}
    </div>
  );
}
