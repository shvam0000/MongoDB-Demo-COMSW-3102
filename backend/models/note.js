import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

let Note = mongoose.model('Note', noteSchema);

module.exports = Note;

// export default Note;
