import { useState } from "react"
import { StyleSheet, Text, TextInput } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export const InputsNForms = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={[ 'top', 'left', 'right' ]}>
        <TextInput 
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.textInput}
          placeholder="Placeholder@example"
          autoCorrect={false}
          autoCapitalize="none"
          // secureTextEntry
          // keyboardType="numeric"
        />

        <TextInput
          style={styles.textInput} 
          placeholder="Messages"
          multiline
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textInput: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 14
  },
  multilineInput: {
    minHeight: 100,
    maxHeight: 100,
    textAlignVertical: "top"
  }
})