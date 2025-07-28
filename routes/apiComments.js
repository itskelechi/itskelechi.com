const { error } = require("console");
const express = require("express");
const router = express.Router();

let comments = [];

router.post("/submit-comment", (req, res) => {
    const {name, message, honey } = req.body;

    if(honey) return res.status(400).json({error: "INTRUDER ALERT! INTRUDER ALERT!: BOT DETECTED."});
    
    if(!name || !message){
        return res.status(400).json({error: "Can't send an empty message, not worth the postage."});
    }

    const sanitize = str => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const validComment = {
        id: Date.now(),
        name: sanitize(name.trim()),
        message: sanitize(message.trim())
    };

    comments.push(validComment);
    console.log("Comments -apiComments ln23", comments)
    res.status(201).json(comments);
});

router.get("/comments", (req, res) => {
    res.json(comments);
})

module.exports = router;
module.exports.comments = comments