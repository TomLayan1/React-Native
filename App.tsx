// Lesson 1: Change the text in the Text element to 'Hello World' and background of the the View element

import { useState } from "react";
import { Button, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View } from "react-native";
// const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const theme = darkTheme ? 'black' : 'white'

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log({ windowWidth, windowHeight})

  return (
    <View style={{ flex: 1, backgroundColor: theme}}>
      <StatusBar />
      <ScrollView style={style.pgScroll}>
        <Image style={[style.image, {
          width: windowWidth > 380 ? 500 : 300,
          height: windowHeight > 750 ? 500 : 300
        }]} source={{uri: 'https://picsum.photos/200' }} />
        <Pressable onPress={() => console.log('Text pressed')}>
          <Text style={[style.OuterText, 
            {
              fontSize: windowWidth > 380 ? 30 : 20
            }]}
          >
            <Text style={style.worldText}>Hello </Text>World
          </Text>
        </Pressable>
        <Text style={{ fontSize: windowWidth > 380 ? 23 : 17, lineHeight: windowHeight > 750 ? 25 : 19, marginBottom: windowHeight > 750 ? 20 : 15 }}>
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
        <Text>This is a modal and it works just fine.</Text>
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
  },
  pgScroll: {
    paddingHorizontal: 11,
    paddingVertical: 11
  },
  image: {
    margin: 'auto',
    // width: 300,
    // height: 300,
    marginBottom: 7
  },
  OuterText: {
    color: 'plum',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  worldText: {
    color: '#bab9b9ff',
  },
  loremText: {
    color: '#bab9b9ff',
    fontSize: 16,
    lineHeight: 20,
  },
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