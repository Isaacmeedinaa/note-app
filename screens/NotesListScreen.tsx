import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../navigation/types";

import NotesList from "../components/NotesList";

type NoteListScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  "NotesList"
>;

type NoteListScreenProps = {
  navigation: NoteListScreenNavigationProp;
};

const NotesListScreen: React.FC<NoteListScreenProps> = ({ navigation }) => {
  const onNewNoteBtnPress = () => {
    navigation.push("NewNote");
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={onNewNoteBtnPress}>
        <Text style={styles.buttonText}>New Note</Text>
      </TouchableOpacity>
      <NotesList />
    </View>
  );
};

export default NotesListScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    height: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
