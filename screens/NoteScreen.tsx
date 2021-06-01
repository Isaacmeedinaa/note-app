import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

// Navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { AppStackParamList } from "../navigation/types";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../state/actions/note";
import { State } from "../state/rootReducer";

type NoteScreenNavigationProp = StackNavigationProp<AppStackParamList, "Note">;
type NoteScreenRouteProp = RouteProp<AppStackParamList, "Note">;

type NoteScreenProps = {
  navigation: NoteScreenNavigationProp;
  route: NoteScreenRouteProp;
};

const NoteScreen: React.FC<NoteScreenProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNote(route.params.noteId));
  }, [dispatch]);

  const note = useSelector((state: State) => state.note);

  const onEditNotePress = () => {
    navigation.navigate("EditNote", { noteId: note!.id });
  };

  if (!note) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <Text>{note.id}</Text>
      <Text>{note.text}</Text>
      <Button onPress={onEditNotePress} title="Edit Note" />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
