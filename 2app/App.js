import { useState } from "react";
import { StyleSheet, View, Button, TextInput,  FlatList} from "react-native";
import goalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setenteredText] =useState('')
  const [courseGoals, setCourseGoals] = useState([]);

  function GoalInputHandler(enteredText) {
    setenteredText(enteredText);
  }

  function addGoalInputHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
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
      <FlatList data={courseGoals} renderItem={itemData=>{
        return(
          <View  style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
        )
      }}
      keyExtractor={(item, index) =>{
        return item.id
      }
      }
      alwaysBounceVertical={false}>
      </FlatList>
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
  },
  goalText:{
    color: 'white',
  },
});
