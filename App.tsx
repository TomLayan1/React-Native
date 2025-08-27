
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { RNList } from "./lessons/RNLists";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.safeContainer} edges={['top', 'right', 'left']}>
        <StatusBar />
        <RNList />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const style = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: 12
  }
})