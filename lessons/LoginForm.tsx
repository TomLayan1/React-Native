import { useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
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

type LoginErrMsgType = {
  usernameErr: string;
  passwordErr: string;
}

export const LoginForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    password: ""
  });
  const DEMO_CREDENTIAL = {
    id: 1,
    demoUsername: "testing_man",
    demoPassword: "12345678"
  }
  const [errors, setErrors] = useState<LoginErrMsgType>({
    usernameErr: "",
    passwordErr: ""
  });
  console.log(errors)

  const validateForm = () => {
    const errors: LoginErrMsgType = {
      usernameErr: "",
      passwordErr: ""
    };
    
    
    if (!formData.username) {
      errors.usernameErr = "username required"
    } else if (formData.username !== DEMO_CREDENTIAL.demoUsername) {
      errors.usernameErr = "Incorrect username"
    }

    if (!formData.password) {
      errors.passwordErr = "Password required"
    } else if (formData.password !== DEMO_CREDENTIAL.demoPassword) {
      errors.passwordErr = "Incorrect password"
    }

    setErrors(errors);

    return Object.keys(errors).length === 0
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}>
            <View style={styles.formContainer}>
              {/* <Text style={styles.formTitle}>Login Form</Text> */}
              <View style={styles.inputContainer}>
                <View style={{ marginBottom: 14}}>
                  <Text style={styles.fieldName}>Username</Text>
                  {errors?.usernameErr && <Text style={{ color: "red", fontSize: 16 , marginBottom: 9 }}>{errors?.usernameErr}</Text>}
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
                  {errors?.passwordErr && <Text style={{ color: "red", fontSize: 16, marginBottom: 9 }}>{errors?.passwordErr}</Text>}
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
              <Pressable style={styles.loginBtn} onPress={
                validateForm
               }>
                <Text style={styles.btnText}>Login</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
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