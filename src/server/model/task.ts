import { model, Schema, Model, Document } from "mongoose";
import { IUser } from "./user";
import mongoose from "mongoose";
export interface ITask extends Document {
  user: IUser;
  description: string;
  done: boolean;
}

const TaskSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  description: { type: String, required: true },
  done: { type: String, required: true },
});

export const  Task: Model<IUser> = model('Task', TaskSchema);
