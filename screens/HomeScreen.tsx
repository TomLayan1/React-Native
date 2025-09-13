import { Pressable, StyleSheet, Text, View } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/RootStack";
import { useNavigation } from "@react-navigation/native";



type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavProp>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate("About") }>
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