const mongoose = require('mongoose');
  const { Schema } = mongoose;
  

  const activitySchema = new Schema({
    title:  String, 
    description: String,
  
  });

  const Activity = mongoose.model('Activity', activitySchema);
  module.exports = Activity;