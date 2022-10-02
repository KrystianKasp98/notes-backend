import {connect} from "mongoose";
import Note from "../models/notes";
import * as dotenv from "dotenv";

dotenv.config();

interface Options {
  dbName: string
}
const options: Options = {
  dbName: process.env.MONGO_DB_NAME || "test",
};

export default class MongoAPI {
  static async init() {
    await connect(process.env.MONGOCLOUD_URL, options);
  }

  static async addNote(note: string) {
    const noteDocument = new Note({
      note,
      date: new Date(),
      edits: [],
    });
    return await noteDocument.save(); // probably return required
  }

  static async getNote(id: string) {
    return await Note.findById(id);
  }

  static async getNotes() {
    return await Note.find({});
  }
}
