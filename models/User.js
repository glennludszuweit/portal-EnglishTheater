const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  //properties goes here
});

module.exports = mongoose.model('User', schema);
