import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './components/config';

import LoginScreen from './components/login/Login';
import SignUpScreen from './components/register/Register';
import Home from './components/home/home';

const Stack = createNativeStackNavigator();

function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='LoginScreen'
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='HomeScreen'
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 100,
    flexDirection:'column',
    backgroundColor:'#fff',
  }
});