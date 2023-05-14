import { Button } from "@mui/material";
import { useState } from "react";
import Paragraph from "./Paragraph";

export default function Story({ theme }) {
  const [story, setStory] = useState("");

  const generateStory = async () => {
    // const response = await fetch(
    //   `http://localhost:5000/story?theme=${theme}`
    // );
    // const data = await response.json();
    // setStory(data.story);
    setStory(
      "In the vast expanse of space, there was a group of [adjective] explorers who dared to venture beyond the boundaries of our solar system. \
      Led by the intrepid captain, [name], they set out on a journey that would take them to the furthest reaches of the galaxy.\nEquipped with\
       state-of-the-art [adjective] technology and a crew of [number] skilled specialists, they embarked on a mission to [verb] the mysteries of the \
       universe. Along the way, they encountered all manner of strange and fascinating sights, from [adjective] alien planets to swirling vortexes \
       of [noun].\nAs they delved deeper into the cosmos, the crew of the spaceship [shipname] discovered that the universe was full of secrets and surprises. \
       They encountered intelligent lifeforms that challenged their notions of what it meant to be alive, and they discovered ancient relics that hinted at a long-forgotten history \
       of the universe.\nThrough it all, Captain [name] and their team remained steadfast and determined, braving the dangers of deep space and pushing the boundaries of human \
       knowledge. And in the end, their discoveries would change the course of history and reshape our understanding of the cosmos forever.\nSo join us on a journey to the stars, and \
       experience the wonders of space exploration firsthand. Who knows what secrets await us out there, in the great unknown?"
    );
  };

  return (
    <div>
      <Button variant="contained" onClick={generateStory}>
        Generate
      </Button>
      {story && <Paragraph paragraph={story} />}
    </div>
  );
}
