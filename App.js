import React, {useState} from 'react';
import { StyleSheet,Platform, Text, View,Button ,TextInput} from 'react-native';

const App = () => {

  const [fruit,setFruit] = useState({name:'Naranja',price:8});
  const [user,setUser] = useState("Rockny Chuquichanca");

  return (
    <View style={styles.container}>
      <Text style={styles.mystyle}>{user}</Text>
      <Text style={styles.mystyle}>Esta comiendo una {fruit.name} que le costó
      unos {fruit.price} soles.
      </Text>
      <TextInput 
      placeholder="Ingresa el nombre de usuario"
      style={styles.textInput}
      onChangeText={(e) =>setUser(e)}
      defaultValue={user}
      />
       <TextInput 
      placeholder="Ingresa el nombre de la fruta"
      style={styles.textInput}
      onChangeText={(e) =>setFruit({...fruit,name:e})}
      defaultValue={fruit.name}
      />
       <TextInput 
      placeholder="Ingresa el precio de la fruta"
      style={styles.textInput}
      onChangeText={(e) =>setFruit({...fruit,price:e})}
      defaultValue={`${fruit.price}`}
      />
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
    fontSize:20,
  },
  buttonstyle:{
    width:200,
    marginTop:30,
  },
  textInput:{
    marginTop:20,
    borderRadius:20,
    borderWidth:1,
    borderColor:'blue',
    width:300,
    padding:10,
    height:50,
    margin:10,
  },
});


export default App;
