import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  const [user,setUser] = useState('Rockny Chuquichanca');
  const [style,setStyle] = useState(styles.mystyle);
  const [fruit,setFruit] = useState({name:"Esta comiendo una papaya",price:5})
  const pressHandler = ()=>{
    setFruit({name:"apple",price:8})
    if(user === 'Rockny Chuquichanca'){
      setUser("Samuel Alfaro");
      setStyle(styles.mystyle2);
      setFruit({name:"Esta comiendo una fresa",price:8})
    }
    else{
      setUser("Rockny Chuquichanca");
      setStyle(styles.mystyle);
      setFruit({name:"Esta comiendo una papaya",price:5})

    }
  }
  return (
    <View style={styles.container}>
      <Text style={style}>{user}</Text>
      <Text style={style}>{fruit.name} y cuesta $/{fruit.price}</Text>
      <View style={styles.buttonstyle}><Button 
      onPress={pressHandler}
      title="Change"
      ></Button></View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mystyle: {
    color:'blue',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:40,
    backgroundColor:'yellow',
  },
  mystyle2: {
    color:'red',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:40,
    backgroundColor:'blue',
  },
  buttonstyle:{
    width:200,
    marginTop:30,
  },
});
