// Lesson 1: Change the text in the Text element to 'Hello World' and background of the the View element

import { useState } from "react";
import { Button, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const theme = darkTheme ? 'black' : 'white'
  return (
    <View style={{ flex: 1, paddingVertical: 30, backgroundColor: theme}}>
      <StatusBar />
      <ScrollView style={style.pgScroll}>
          <Image style={style.image} source={{uri: 'https://picsum.photos/200' }} />
          <Text style={style.OuterText}>
            <Text style={style.worldText}>Hello </Text>World
          </Text>
        <Text style={style.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tellus ut nulla egestas aliquet. Suspendisse pulvinar nulla id quam pulvinar congue. Praesent accumsan semper risus, in finibus neque efficitur quis. Aliquam pellentesque erat id lacinia aliquet. Fusce elementum non purus a vulputate. Cras vestibulum orci sit amet sem egestas, sed ornare lectus bibendum. Donec ut euismod lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut nisl mauris. Pellentesque varius urna sed odio mattis condimentum. Quisque id lacus a libero venenatis hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Donec dolor purus, interdum a iaculis vel, tristique vel nulla. Vivamus et felis condimentum, euismod nunc finibus, sodales arcu. Pellentesque fringilla vestibulum quam non ornare. Fusce bibendum lorem in lacinia convallis. Proin vitae laoreet augue. Integer accumsan urna ac eros sagittis venenatis. Aenean ut urna massa. Donec venenatis sollicitudin consequat. Donec rutrum elit nec dapibus vulputate.


        </Text>
        <Button onPress={() => setDarkTheme(!darkTheme)} disabled title="Change theme" color="plum" />
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30
  },
  pgScroll: {
    paddingHorizontal: 10
  },
  image: {
    margin: 'auto',
    height: 200,
    width: 200,
    marginBottom: 7
  },
  OuterText: {
    color: 'plum',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  worldText: {
    color: '#bab9b9ff',
  },
  loremText: {
    color: '#bab9b9ff',
    fontSize: 20,
    lineHeight: 28
  }
})