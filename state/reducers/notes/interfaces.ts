import { NotesActions } from "../../actions/notes";
import Note from "../../../models/Note";

export interface SetNotesAction {
  type: NotesActions.SET_NOTES;
  payload: Note[];
}

export interface CreateNoteAction {
  type: NotesActions.CREATE_NOTE;
  payload: Note;
}

export interface UpdateNoteAction {
  type: NotesActions.UPDATE_NOTE;
  payload: Note;
}

export interface DeleteNoteAction {
  type: NotesActions.DELETE_NOTE;
  payload: string;
}
