const express = require('express');
const activityRouter = express.Router();
const ActivityModel = require('../models/Activity');
const Activity = require('../models/Activity');

activityRouter.get('/', (req, res) => {
    res.json({ message: 'Atividade!'});
});

activityRouter.post('/', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    
    const activity = new ActivityModel({title: title, description: description});
    activity.save(function (err, document) {
        if (err) return console.error(err);
        console.log(document);
      });
    return res.json({ title: activity.title, description: activity.description});
});

module.exports = activityRouter;