// Lesson 1: Change the text in the Text element to 'Hello World' and background of the the View element

import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={style.container}>
      <Image style={style.image} source={logoImg}/>
      <Text style={style.OuterText}>
        <Text style={style.worldText}>Hello </Text>World
      </Text>
      <StatusBar />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  OuterText: {
    color: 'plum',
    fontSize: 30,
    fontWeight: 'bold'
  },
  worldText: {
    color: '#fff',
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 7
  }
})