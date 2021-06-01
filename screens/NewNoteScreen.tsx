import React from "react";
import { View, StyleSheet } from "react-native";

import NoteForm from "../components/NoteForm";

const NewNoteScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <NoteForm />
    </View>
  );
};

export default NewNoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingRight: 24,
    paddingLeft: 24,
  },
});
