import react, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(['Task 1', 'Task 2']);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleTaskComplete = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const todaysTasks = taskItems.map((item, index) => {
    if(item != null){ 
      return (
        <TouchableOpacity key={index} onPress={() => handleTaskComplete(index)}>
          <Task text={item}/>
        </TouchableOpacity>
      );
    }
  })

  return (
    <View style={styles.container}>

      {/* todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* task items */}
        <View style={styles.items}>
          {todaysTasks}
        </View>

      </View>
      {/*write a task section*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding':'height'}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop:30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      paddingVertical: 15,
      width: 300,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 60,
      borderWidth: 1,
      borderColor:  '#C0C0C0'
    },
    addWrapper: {
      width: 50,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor:  '#C0C0C0'
    },
    addText: {},
});
