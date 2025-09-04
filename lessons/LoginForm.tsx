import { useState } from "react"
import { 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from "react-native"
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from "react-native-safe-area-context"

type FormDataType = {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    password: ""
  });

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
          <View style={styles.formContainer}>
            {/* <Text style={styles.formTitle}>Login Form</Text> */}
            <View style={styles.inputContainer}>
              <View style={{ marginBottom: 14}}>
                <Text style={styles.fieldName}>Username</Text>
                <TextInput
                  value={formData.username}
                  onChangeText={(text: string) => setFormData(prev => ({
                    ...prev, username: text
                  }))}
                  style={styles.formInput}
                  placeholder="Username"
                  autoCapitalize="none"
                />
              </View>
              <View style={{ marginBottom: 14 }}>
                <Text style={styles.fieldName}>Password</Text>
                <TextInput
                  value={formData.password}
                  onChangeText={(text: string) => setFormData(prev => ({
                    ...prev, password : text
                  }))}
                  style={styles.formInput} 
                  placeholder="Password"
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>
            </View>
            <Pressable style={styles.loginBtn} onPress={() => {
              console.log( "Login Data: ", formData)
            }}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    justifyContent: "center"
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 13
  },
  formTitle: {
    color: "tomato",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12
  },
  inputContainer: {
    width: "100%"
  },
  fieldName: {
    color: "tomato",
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 5
  },
  formInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#7b7575ff",
    padding: 10,
    borderRadius: 7
  },
  loginBtn: {
    backgroundColor: "tomato",
    padding: 12,
    borderRadius: 7

  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  }
})