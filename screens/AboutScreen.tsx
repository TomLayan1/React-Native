import { Pressable, StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/RootStack"

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, "About">

export const AboutScreen:React.FC<AboutScreenProps> = ({ navigation, route }) => {
  const { name } = route.params
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Pressable onPress={() => navigation.navigate("Home") }>
        <Text style={styles.nav}>Go to home page</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b4949ff",
    alignItems: 'center',
    justifyContent: "center"
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
     marginBottom: 10
  },
  nav: {
    color: "#67c9e2ff",
    fontSize: 18
  }
})