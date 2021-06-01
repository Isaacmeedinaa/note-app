import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

// Navigation
import { RouteProp } from "@react-navigation/native";
import { AppStackParamList } from "../navigation/types";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../state/actions/note";
import { State } from "../state/rootReducer";

import NoteForm from "../components/NoteForm";

type EditNoteScreenRouteProp = RouteProp<AppStackParamList, "EditNote">;

type EditNoteScreenProps = {
  route: EditNoteScreenRouteProp;
};

const EditNoteScreen: React.FC<EditNoteScreenProps> = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNote(route.params.noteId));
  }, [dispatch]);

  const note = useSelector((state: State) => state.note);

  if (!note) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <NoteForm id={note.id} text={note.text} />
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
