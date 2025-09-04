
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
// import { RNList } from "./lessons/RNLists";
// import { InputsNForms } from "./lessons/InputsNForms";
import { LoginForm } from "./lessons/LoginForm";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.safeContainer} edges={['top', 'right', 'left']}>
        <StatusBar />
        {/* <RNList />  */}
        {/* <InputsNForms /> */}
        <LoginForm />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const style = StyleSheet.create({
  safeContainer: {
    flex: 1,
  }
})