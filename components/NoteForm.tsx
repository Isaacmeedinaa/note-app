import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { createNote, updateNote } from "../state/actions/notes";

type NoteFormProps = {
  id?: string;
  text?: string;
};

const NoteForm: React.FC<NoteFormProps> = ({ text, id }) => {
  const [noteText, setNoteText] = useState<string>(text ? text : "");

  const dispatch = useDispatch();

  const onNoteTextChange = (noteText: string) => {
    console.log(noteText);
    setNoteText(noteText);
  };

  const onSaveNotePress = () => {
    if (!id) {
      dispatch(createNote(noteText));
    } else if (id) {
      dispatch(updateNote(id, noteText));
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Note Text"
        style={styles.input}
        value={noteText}
        onChangeText={onNoteTextChange}
      />
      <TouchableOpacity style={styles.button} onPress={onSaveNotePress}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingRight: 15,
    paddingLeft: 15,
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    marginTop: 25,
    width: "100%",
    height: 45,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
