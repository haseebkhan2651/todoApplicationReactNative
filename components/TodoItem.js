import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const TodoItem = (props) => {
    return (
       <TouchableOpacity>
           <Text style={styles.item} > {props.item.text} </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderStyle: "dashed",
        borderRadius: 10
    }
})

export default TodoItem;