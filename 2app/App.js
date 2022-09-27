import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  function GoalInputText(enteredText) {
    console.log(enteredText);
  }

  function addGoalInputText() {}
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="chinii zorilgo"
          onChangeText={GoalInputText}
        ></TextInput>
        <Button title="zorilgo nemeh"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>zorilgiin jigsaalt</Text>
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
});
