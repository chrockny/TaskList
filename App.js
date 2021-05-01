import React, {useState} from 'react';
import { StyleSheet,Platform,TouchableWithoutFeedback,Keyboard,Alert,ScrollView,SafeAreaView,FlatList,TouchableOpacity, Text, View,Button ,TextInput} from 'react-native';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import {v4 as uuidv4} from 'uuid'; 
export default  function App(){
  const [tasks,setTasks] = useState([
      {"task":"HTML I","done":true,"id":"1"},
      {"task":"CSS","done":true,"id":"2"},
      {"task":"Responsive design","done":true,"id":"3"},
  ]);

  const addTask = (text) =>{
    if(!text){
      Alert.alert('No tasks?',
      'Please add a task',[{
        text:'OK'
      }])
    }
    else{
    setTasks(prevTasks=>{
      return [{task:text,id:uuidv4()}
      ,...prevTasks]
    })}
  }

  const deleteTask = id =>{
    setTasks(prevTasks =>{
      return prevTasks.filter(
        task => task.id != id)
    })
  }

  return (


    
    <TouchableWithoutFeedback 
    onPress={()=>
/* Esconder teclado al darle click en cualquier parte de mi app*/
Platform.OS !== 'web' ?
Keyboard.dismiss()
: null
}>
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask addTask={addTask}/>
        <View style={styles.list}>
        <FlatList
        data={tasks}
        renderItem={({item})=>(
          <Task item={item}
          deleteTask={deleteTask}/>
                )}/>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    padding:30,
    backgroundColor: 'green',
    flex:1,
    
  },
  list:{
    marginTop:30,
  },
});


