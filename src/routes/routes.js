const express = require('express');
const routes = express.Router();
const activityRouter = require('./activity-routes');

routes.use('/activity', activityRouter);

module.exports = routes;