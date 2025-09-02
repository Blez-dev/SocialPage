This document here is needed to understand the flow of setup
Note: This app is an expo App
To begin with , you have to perform 3 installations namely:
expo install @react-navigation/native //This is needed for handling state navigation state, it installs the React Native navigation library
expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated // The first is needed for using the main device"s navigation primitive
expo install @react-navigation/native-stack // This stack is necessary for keep the screen in a stack like format


When done with above, you have to define your main entry file like below

import { NavigationContainer } from '@react-navigation/native';    // The library import for react navigation library
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // the one that manages stack

//Import each individual screens
import HomeScreen from './screens/HomeScreen';  
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';





const Stack= createNativeStackNavigator() // create the stack object

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name='Home' component={HomeScreen}/>
           <Stack.Screen name='Login' component={LoginScreen}/>
           <Stack.Screen name='Signup' component={SignupScreen}/>
          </Stack.Navigator>
    </NavigationContainer>

    
  );
}



After done with that step,
pass the "navigation" object as an arguement into each function  , it"s needed for navigation, demonstrated below
export default function HomeScreen({navigation}){}






