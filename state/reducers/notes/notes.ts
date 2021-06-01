import { NotesActions } from "../../actions/notes";
import { NotesState, NotesAction } from "./types";

const notes = (state: NotesState = [], action: NotesAction) => {
  switch (action.type) {
    case NotesActions.SET_NOTES:
      return action.payload;

    case NotesActions.CREATE_NOTE:
      return [...state, action.payload];

    case NotesActions.UPDATE_NOTE:
      const noteIdx = state.findIndex((note) => note.id === action.payload.id);
      state[noteIdx] = action.payload;
      return [...state];

    case NotesActions.DELETE_NOTE:
      const newNotesArray = state.filter((note) => note.id !== action.payload);
      return newNotesArray;

    default:
      return state;
  }
};

export default notes;
