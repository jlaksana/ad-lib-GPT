axios = require("axios");
dotenv = require("dotenv");
const openai = require("openai");

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getStory(theme) {
  const chat = new openai.OpenAIApi(configuration);

  const completion = await chat.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(theme),
    temperature: 0.6,
    max_tokens: 1024,
  });

  return { story: completion.data.choices[0].text };
}

function generatePrompt(theme) {
  return `Give me an unfilled ad lib story, with a ${theme} theme. 
  Format the outputted blanks as descriptors between brackets. Replace 
  all descriptors with '-' characters. Make the story at least 7 sentences long.`;
}

function finishPrompt(story){
    return `You are given a story deliminited by ~. Finish this story in a funny way. ~${story}~. Do not make this one ad libbed. `
}


async function getEnding(story) {
    const chat = new openai.OpenAIApi(configuration);
  
    const completion = await chat.createCompletion({
      model: "text-davinci-003",
      prompt: finishPrompt(story),
      temperature: 0.6,
      max_tokens: 1024,
    });
  
    return { story: completion.data.choices[0].text };
  }



module.exports = {
  getStory,
  getEnding,
};
