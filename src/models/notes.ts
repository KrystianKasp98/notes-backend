import {Schema, model} from "mongoose";

interface SingleNote {
  note: string;
  date: Date;
}

interface INotes extends SingleNote {
  edits: SingleNote[];
}

const noteSchema = new Schema<INotes>({
  note: {type: String, required: true},
  date: {type: Date, required: true},
  edits: {
    type: [{note: String, date: Date}],
    required: true,
  },
});

const Note = model<INotes>("Note", noteSchema);

export default Note;
