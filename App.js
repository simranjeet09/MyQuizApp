import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from './components/config';

import ForgotPasswordScreen from './components/forgot/forgotpassword';
import EasyGameModeScreen from './components/home/EasyGameMode';
import MediumGameMode from './components/home/MediumGameMode';
import HardGameMode from './components/home/HardGameMode';
import LoginScreen from './components/login/Login';
import SignUpScreen from './components/register/Register';
import Home from './components/home/home';
import BackendProvider from './provider/AppProvider';

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <BackendProvider>
 <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'LoginScreen' : 'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="EasyGameModeScreen"
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackButtonMenuEnabled: true,
            headerBackTitle: '',
            headerShadowVisible: false,
          }}
          component={EasyGameModeScreen}
        />
        <Stack.Screen
          name="MediumGameModeScreen"
          component={MediumGameMode}
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackButtonMenuEnabled: true,
            headerBackTitle: '',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="HardGameModeScreen"
          component={HardGameMode}
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackButtonMenuEnabled: true,
            headerBackTitle: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackButtonMenuEnabled: true,
            headerBackTitle: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </BackendProvider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
