import { Dispatch } from "redux";
import { SetNoteAction } from "../reducers/note/interfaces";
import { State } from "../rootReducer";

export enum NoteActions {
  SET_NOTE = "SET_NOTE",
}

export const setNote = (noteId: string) => {
  return (dispatch: Dispatch<SetNoteAction>, getState: () => State) => {
    const notes = getState().notes;
    const note = notes.find((note) => note.id === noteId);

    // here, we would want to handle if the note returns undefined
    if (!note) return;

    dispatch({ type: NoteActions.SET_NOTE, payload: note });
  };
};
