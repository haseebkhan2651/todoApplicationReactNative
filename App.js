import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
// Importing Components
import Header from "./components/header";
import TodoItem from "./components/TodoItem";

export default function App() {

  const [todo, setTodos] = useState([
    {text: "buy coffee", key: 1},
    {text: "work  project", key: 2},
    {text: "work harder", key: 3}
  ]);

  const pressHandler = (key) => {
    console.log("The press handle function is running");
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (

        <View style={styles.container} >
          <Header />
          <View style={styles.content}>
            {/* To do form */}
            <View style={styles.list} >
              <FlatList 
                data={todo}
                renderItem={({ item }) => (
                  <TodoItem pressHandle={pressHandler} item={item} />
                )}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  todos: {
    
  }

});
