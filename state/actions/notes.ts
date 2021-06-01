import { Dispatch } from "redux";
import Note from "../../models/Note";
import {
  SetNotesAction,
  CreateNoteAction,
  UpdateNoteAction,
  DeleteNoteAction,
} from "../reducers/notes/interfaces";

import { navigate } from "../../navigation/RootNavigation";

export enum NotesActions {
  SET_NOTES = "SET_NOTES",
  CREATE_NOTE = "CREATE_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
}

const notes: Note[] = [
  new Note("n1", "Note Text 1"),
  new Note("n2", "Note Text 2"),
  new Note("n3", "Note Text 3"),
  new Note("n4", "Note Text 4"),
  new Note("n5", "Note Text 5"),
];

export const setNotes = () => {
  return (dispatch: Dispatch<SetNotesAction>) => {
    dispatch({ type: NotesActions.SET_NOTES, payload: notes });
  };
};

export const createNote = (text: string) => {
  return (dispatch: Dispatch<CreateNoteAction>) => {
    const newNote = new Note("n6", text);
    dispatch({ type: NotesActions.CREATE_NOTE, payload: newNote });
    navigate("NotesList", {});
  };
};

export const updateNote = (noteId: string, text: string) => {
  return (dispatch: Dispatch<UpdateNoteAction>) => {
    const updatedNote = new Note(noteId, text);
    dispatch({ type: NotesActions.UPDATE_NOTE, payload: updatedNote });
    navigate("NotesList", {});
  };
};

export const deleteNote = (noteId: string) => {
  return (dispatch: Dispatch<DeleteNoteAction>) => {
    dispatch({ type: NotesActions.DELETE_NOTE, payload: noteId });
  };
};
