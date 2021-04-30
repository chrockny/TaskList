import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,Button,Alert} from 'react-native';
export default function App() {

  const Alert = () =>{
    alert("Hola Tia soy Rockny ")
  }
  return (
  


    <View style={styles.container}>
      <Text style={styles.textRockny}>Liliana Alanya</Text>
      <Button
        title="Presioname"
        onPress={Alert}

      style={styles.button}/>
      <Image style={styles.image} source={{uri:'https://www.institutoerudite.org/wp-content/uploads/2018/02/especialista-de-aula-de-naturaleza.jpg'}}/>
      <Image style={styles.image} source={{uri:'https://www.fincacasarejo.com/Docs/Noticias/cual_es_la_mejor_gallina_ponedora.jpg'}}/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  image:{
    width:200,
    height:200,
    borderRadius:40,
    marginTop:30,

  },
  textRockny :{
    fontSize:40,
    textAlign: 'center',
    color:'#8A2BE2',
    fontWeight:'bold',
    marginBottom:50,
    backgroundColor:'#ff1',
    padding:20,
    },
  container: {
    flex: 1,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
