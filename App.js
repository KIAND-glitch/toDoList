import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        {/* task items */}
        <View style={styles.items}>
          <Task text="Task 1"/>
          <Task text="Task 2"/>
        </View>

      </View>
      {/*write a task section*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding':'height'}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'write a task'}/>
          <TouchableOpacity >
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
    },
    input: {
      paddingVertical: 15,
      width: 350,
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
