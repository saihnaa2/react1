import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="chinii zorilgo"
        ></TextInput>
        <Button title="zorilgo nemeh"></Button>
      </View>
      <View>
        <Text>zorilgiin jigsaalt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    //margin: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    with: "80%",
    marginRight: 8,
    //padding: 8
  },
});
