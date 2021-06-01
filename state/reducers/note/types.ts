import Note from "../../../models/Note";
import { SetNoteAction } from "./interfaces";

// Union Type
export type NoteState = Note | null;
export type NoteAction = SetNoteAction;
