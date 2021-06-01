import { combineReducers } from "redux";

import notes from "./reducers/notes/notes";
import note from "./reducers/note/note";

const rootReducer = combineReducers({
  notes,
  note,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
