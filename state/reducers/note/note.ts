import { NoteState, NoteAction } from "./types";
import { NoteActions } from "../../actions/note";

const note = (state: NoteState = null, action: NoteAction) => {
  switch (action.type) {
    case NoteActions.SET_NOTE:
      return action.payload;

    default:
      return state;
  }
};

export default note;
