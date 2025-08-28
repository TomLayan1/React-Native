import { useState } from "react"
import { StyleSheet, Text, TextInput } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export const InputsNForms = () => {
  const [inputValue, setInputValue] = useState<string>("");
  console.log('Value: ',inputValue);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={[ 'top', 'left', 'right' ]}>
        <TextInput value={inputValue} onChangeText={setInputValue} style={styles.textInput} />
        <Text>{inputValue}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 10
  },
  textInput: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5
  }
})