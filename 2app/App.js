import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setenteredText] =useState('')
  const [courseGoals, setCourseGoals] = useState([]);

  function GoalInputHandler(enteredText) {
    setenteredText(enteredText);
  }

  function addGoalInputHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="chinii zorilgo"
          onChangeText={GoalInputHandler}
        ></TextInput>
        <Button title="zorilgo nemeh" onPress={addGoalInputHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal)=> (
          <View style={styles.goalItem} key={goal}>
        <Text>{goal}</Text>
        </View>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',


    
  }
});
