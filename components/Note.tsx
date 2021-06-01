import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../navigation/types";

// React Redux
import { useDispatch } from "react-redux";
import { deleteNote } from "../state/actions/notes";

type NoteNavigationProp = StackNavigationProp<AppStackParamList, "NotesList">;

type NoteProps = {
  id: string;
  text: string;
};

const Note: React.FC<NoteProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation<NoteNavigationProp>();

  const onViewNotePress = () => {
    navigation.navigate("Note", { noteId: id });
  };

  const onLongPress = () => {
    console.log("long press!");
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => dispatch(deleteNote(id)),
        style: "destructive",
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.noteContainer}
      onPress={onViewNotePress}
      onLongPress={onLongPress}
    >
      <Text>{id}</Text>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Note;

const styles = StyleSheet.create({
  noteContainer: {
    marginTop: 25,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 25,
    paddingBottom: 25,
    width: "100%",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
});
