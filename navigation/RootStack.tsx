import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { Pressable, Text } from "react-native";

export type RootStackParamList = {
  Home: undefined,
  About: {
    name: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000000"
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        contentStyle: {
          backgroundColor: "#4b4949ff"
        }
      }}
    >
      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome Home",
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed")}>
              <Text style={{color: "white", fontSize: 18}}>Menu</Text>
            </Pressable>
          )
        }}
      />
      {/* About Screen */}
      <Stack.Screen 
        name="About"
        component={AboutScreen}
        options={({ route }) => ({ 
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}