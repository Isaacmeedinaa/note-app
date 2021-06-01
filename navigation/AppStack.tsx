import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotesListScreen from "../screens/NotesListScreen";
import NewNoteScreen from "../screens/NewNoteScreen";
import EditNoteScreen from "../screens/EditNoteScreen";
import NoteScreen from "../screens/NoteScreen";

import { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="NotesList">
      <Stack.Screen
        name="NotesList"
        component={NotesListScreen}
        options={{ title: "Notes" }}
      />
      <Stack.Screen
        name="NewNote"
        component={NewNoteScreen}
        options={{ title: "New Note" }}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNoteScreen}
        options={{ title: "Edit Note" }}
      />
      <Stack.Screen
        name="Note"
        component={NoteScreen}
        options={{ title: "Note" }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
