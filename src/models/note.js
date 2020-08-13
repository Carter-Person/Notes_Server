import mongoose, { Schema } from 'mongoose';

const noteScema = new Schema({
  title: String, x: Number, y: Number, content: String,
}, { toJSON: { virtuals: true } });

const NoteModel = mongoose.model('Note', noteScema);

export default NoteModel;
