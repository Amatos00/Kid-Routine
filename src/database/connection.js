const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amatos00:amatos00@cluster0.x8fas.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('conectado!');
});

module.exports = db;