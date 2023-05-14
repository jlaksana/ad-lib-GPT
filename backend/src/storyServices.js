axios = require("axios");
dotenv = require("dotenv");
const openai = require("openai");

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getStory(theme) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const chat = new openai.OpenAIApi(configuration);

  const completion = await chat.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(theme),
    temperature: 0.6,
    max_tokens: 1024,
  });

  return completion.data.choices[0].text;
}

function generatePrompt(theme) {
  return `Give me an unfilled ad lib story, with a ${theme} theme. 
  Format the outputted blanks as descriptors between brackets. Replace 
  all descriptors with '-' characters. Make the story at least 7 sentences long.`;
}

module.exports = {
  getStory,
};
