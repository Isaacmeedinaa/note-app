import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../state/actions/notes";
import { State } from "../state/rootReducer";

// Interface
import INote from "../contracts/INote";

// Components
import Note from "./Note";

const NotesList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes());
  }, [dispatch]);

  const notes = useSelector((state: State) => state.notes);

  const renderNote = ({ item }: { item: INote }) => {
    return <Note id={item.id} text={item.text} />;
  };

  return (
    <FlatList
      style={styles.notesList}
      renderItem={renderNote}
      data={notes}
      keyExtractor={(item: INote) => item.id}
    />
  );
};

export default NotesList;

const styles = StyleSheet.create({
  notesList: {
    flex: 1,
    width: "100%",
  },
});
