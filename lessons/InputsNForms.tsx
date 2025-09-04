import { useState } from "react"
import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput, 
  View
} from "react-native";
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from "react-native-safe-area-context";

export const InputsNForms = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <View style={[styles.container,
      { backgroundColor: isDarkMode ? "black" : "white" }
    ]}>
      {/* <StatusBar backgroundColor="" /> */}
      <SafeAreaProvider>
        <SafeAreaView  edges={[ 'top', 'left', 'right' ]}>
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Dark mode</Text>
            <Switch 
              style={styles.switch}
              value={isDarkMode}
              onValueChange={() => setIsDarkMode((prevMode) => !prevMode)}
              trackColor={{ false: "black", true: "white"}}
              thumbColor={"plum"}
            />
            <Text style={styles.switchText}>Light mode</Text>
          </View>
          <TextInput 
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.textInput}
            placeholder="Placeholder@example"
            placeholderTextColor={"plum"}
            autoCorrect={false}
            autoCapitalize="none"
            // secureTextEntry
            // keyboardType="numeric"
          />

          <TextInput
            style={[styles.textInput, styles.multilineInput]} 
            placeholder="Messages"
            placeholderTextColor={"plum"}
            multiline
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    // justifyContent: "right",
    alignItems: "center",
    gap: 9,
  },
  switchText: {
    color: "plum",
    fontSize: 17,
    fontWeight: "bold"
  },
  switch: {
    
  },
  textInput: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 14,
    borderColor: "white",
    color: "plum",
  },
  multilineInput: {
    minHeight: 100,
    maxHeight: 100,
    textAlignVertical: "top"
  }
})