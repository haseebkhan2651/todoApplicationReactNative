import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const ToDo = ({submitHandler}) => {

    const [userInput, setUserInput] = useState("");

    const changeHandler = (text) => {
        setUserInput(text);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New Todo..."
                onChangeText={changeHandler}
            />

            <Button onPress={() => submitHandler(userInput)} title="Add Todo" color="coral" />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})

export default ToDo;