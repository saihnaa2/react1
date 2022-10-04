import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setenteredText] =useState('')

  function GoalInputHandler(enteredText) {
    setenteredText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        placeholder="chinii zorilgo"
        onChangeText={GoalInputHandler}
      ></TextInput>
      <Button title="zorilgo nemeh" onPress={props.onAddGoal}></Button>
    </View>
  );
}
export default GoalInput;
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
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    with: "70%",
    marginRight: 8,
    padding: 8,
  },
});
