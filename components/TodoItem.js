import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const TodoItem = (props) => {
    return (
       <TouchableOpacity onPress={() => props.pressHandle(props.item.key)}  >
           <Text style={styles.item} > {props.item.text} </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 20
    }
})

export default TodoItem;