import { Pressable, StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/RootStack";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen:React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate("About",{
        name: "Coder"
      }) }>
        <Text style={styles.nav}>Go to about page</Text>
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