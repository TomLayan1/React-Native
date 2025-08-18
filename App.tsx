// Lesson 1: Change the text in the Text element to 'Hello World' and background of the the View element

import { useEffect, useState } from "react";
import { Button, Dimensions, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
const logoImg = require('./assets/adaptive-icon.png')

// Using dimension API to build dynamic interface
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log({ windowWidth, windowHeight})


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const theme = darkTheme ? 'black' : 'white'
  const [dimension, setDimension] = useState({
    window: Dimensions.get('window')
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimension({ window: window })
    })

    return () => subscription.remove();
  }, [])

  const { window } = dimension;

  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={{ flex: 1, paddingVertical: 30, backgroundColor: theme}}>
      <StatusBar />
      <ScrollView style={style.pgScroll}>
        <Pressable onPress={() => console.log('image pressed')}>
          <Image style={[style.image, {
            height: windowHeight > 700 ? '70%' : '35%',
            width: windowWidth > 500 ? '60%' : '30%'
          }]} source={{uri: 'https://picsum.photos/200' }} />
        </Pressable>
        <Pressable onPress={() => console.log('Text pressed')}>
          <Text style={style.OuterText}>
            <Text style={style.worldText}>Hello </Text>World
          </Text>
        </Pressable>
        <Text style={{ fontSize: windowWidth > 500 ? 30 : 20, lineHeight: windowHeight > 700 ? 40 : 28 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tellus ut nulla egestas aliquet. Suspendisse pulvinar nulla id quam pulvinar congue. Praesent accumsan semper risus, in finibus neque efficitur quis. Aliquam pellentesque erat id lacinia aliquet. Fusce elementum non purus a vulputate. Cras vestibulum orci sit amet sem egestas, sed ornare lectus bibendum. Donec ut euismod lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut nisl mauris. Pellentesque varius urna sed odio mattis condimentum. Quisque id lacus a libero venenatis hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Donec dolor purus, interdum a iaculis vel, tristique vel nulla. Vivamus et felis condimentum, euismod nunc finibus, sodales arcu. Pellentesque fringilla vestibulum quam non ornare. Fusce bibendum lorem in lacinia convallis. Proin vitae laoreet augue. Integer accumsan urna ac eros sagittis venenatis. Aenean ut urna massa. Donec venenatis sollicitudin consequat. Donec rutrum elit nec dapibus vulputate.
        </Text>
        <Button onPress={() => setDarkTheme(!darkTheme)} title="Change theme" color="plum" />
        
        <Pressable style={style.pressIn} onPressIn={() => console.log('On Press In')}>
          <Text>On Press In</Text>
        </Pressable>
        <Pressable style={style.longPress} onLongPress={() => console.log("Long Pressed")}>
          <Text>On Long Press</Text>
        </Pressable>
        <Pressable style={style.pressOut} onPressOut={() => console.log("Press Out")}>
          <Text>On Press Out</Text>
        </Pressable>
        <Button
          title="Show Modal"
          onPress={() => setIsModalVisible(true)}
          color='red'
        />
      </ScrollView>
      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <Text style={{ fontSize: windowWidth > 500 ? 30 : 20 }}>This is a modal and it works just fine.</Text>
        <Button
          title='Hide Modal'
          onPress={() => setIsModalVisible(false)}
          color='grayscale'
        />
      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30
  },
  pgScroll: {
    paddingHorizontal: windowWidth > 500 ? 23 : 11
  },
  image: {
    margin: 'auto',
    // height: windowHeight > 700 ? '70%' : '35%',
    // width: windowWidth > 500 ? '60%' : '30%',
    marginBottom: 7
  },
  OuterText: {
    color: 'plum',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  worldText: {
    color: '#bab9b9ff',
  },
  // text: {
  //   color: '#bab9b9ff',
  //   fontSize: windowWidth > 500 ? 30 : 20,
  //   lineHeight: windowHeight > 700 ? 40 : 28,
  // },
  pressIn : {
    backgroundColor: 'yellow',
    padding: 7,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  longPress: {
    backgroundColor: 'green',
    padding: 7,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  pressOut: {
    backgroundColor: 'purple',
    padding: 7,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  }
})