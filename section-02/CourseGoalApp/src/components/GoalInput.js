import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function GoalInput(props) {
  const [inputText, setInputText] = useState("");

  const inputHandler = (input) => {
    setInputText(input);
  };

  const addGoalHandler = () => {
    props.onAddGoal(inputText);
    setInputText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={inputHandler}
        value={inputText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
