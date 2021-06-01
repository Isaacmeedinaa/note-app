import Note from "../../../models/Note";
import {
  SetNotesAction,
  CreateNoteAction,
  UpdateNoteAction,
  DeleteNoteAction,
} from "./interfaces";

export type NotesState = Note[] | [];
export type NotesAction =
  | SetNotesAction
  | CreateNoteAction
  | UpdateNoteAction
  | DeleteNoteAction;
