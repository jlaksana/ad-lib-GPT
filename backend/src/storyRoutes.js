const express = require("express");
const router = express.Router();

const {
  getStory
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


module.exports = router;
