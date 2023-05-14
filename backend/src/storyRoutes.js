const express = require("express");
const router = express.Router();

const {
  getStory,
  getEnding
} = require("./storyServices.js");




router.get("/generate", async(req, res) => {
    const theme = req.query.theme;

    if(!theme){
        res.status(404).send("Theme undefined :{")
    }
    
    try{
        const result = await getStory(theme);
        res.status(200).send(result);
    }catch (error){
        console.log(error)
        res.status(404).send(error);
    }
}

);



router.get("/finish", async(req, res) => {
    const story = req.query.story;

    console.log("GOT A REQUEST")

    if(!story){
        res.status(404).send("story undefined :{")
    }
    
    try{
        const result = await getEnding(story);
        res.status(200).send(result);
    }catch (error){
        console.log(error)
        res.status(404).send(error);
    }
}

);



module.exports = router;
