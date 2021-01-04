import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, Alert} from "react-native";
// Importing Components
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddToDo from "./components/addToDo";

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

  const submitHandler = (newState) => {
    if(newState.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, {text: newState, key:Math.random().toString() }]
      }); 
    } else {
        Alert.alert("There was an error", "You need input something more than 3 characters", [
          {text: "Understood", onPress: () => console.log("Alert closed")}
        ]);
    }

  }

  return (

        <View style={styles.container} >
          <Header />
          <View style={styles.content}>
            <AddToDo submitHandler={submitHandler} />
            <View style={styles.list} >
              <FlatList 
                data={todo}
                renderItem={({ item }) => (
                  <TodoItem  pressHandle={pressHandler} item={item} />
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
