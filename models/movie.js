import mongoose, {Schema} from 'mongoose';

/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;*/

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  poster: String,
  genre: String,
  days: Array,
  times: Array
});

export default mongoose.model('movie', movieSchema);