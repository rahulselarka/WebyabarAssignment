import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FormDataScreen from './screens/FormDataScreen';
import RetrieveDataScreen from './screens/RetrieveDataScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="FormData" component={FormDataScreen} />
        <Stack.Screen name="RetrieveData" component={RetrieveDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
