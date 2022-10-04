import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText ] =useState('')

  function GoalInputHandler(enteredText) {
    enteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setenteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        placeholder="chinii zorilgo"
        onChangeText={GoalInputHandler}
        value={enteredGoalText}
      ></TextInput>
      <Button title="zorilgo nemeh" onPress={addGoalHandler}></Button>
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
