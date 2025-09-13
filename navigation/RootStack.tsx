import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { AboutScreen } from "../screens/AboutScreen";

export type RootStackParamList = {
  Home: undefined,
  About: {
    name: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return(
    <Stack.Navigator initialRouteName="Home">
      {/* Home Screen */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* About Screen */}
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  )
}