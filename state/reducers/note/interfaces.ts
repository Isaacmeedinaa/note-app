import { NoteActions } from "../../actions/note";
import Note from "../../../models/Note";

export interface SetNoteAction {
  type: NoteActions.SET_NOTE;
  payload: Note;
}
