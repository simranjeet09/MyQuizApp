import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { firebase } from '../config';

import EasyGameModeScreen from './EasyGameMode';
import MediumGameMode from './MediumGameMode';
import HardGameMode from './HardGameMode';

const Stack = createNativeStackNavigator();

export default function Home(){



  return (
    <Stack.Navigator 
    initialRouteName='HomeScreen'
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="EasyGameModeScreen"
       options={{
        headerShown:true,
        headerTitle: "",
        headerBackButtonMenuEnabled: true,
        headerBackTitle: "",
        headerShadowVisible: false,
      }}
      component={EasyGameModeScreen} />
       <Stack.Screen name="MediumGameModeScreen" component={MediumGameMode}
       options={{
        headerShown:true,
        headerTitle: "",
        headerBackButtonMenuEnabled: true,
        headerBackTitle: "",
        headerShadowVisible: false,
      }}/>
       <Stack.Screen name="HardGameModeScreen" component={HardGameMode}
       options={{
        headerShown:true,
        headerTitle: "",
        headerBackButtonMenuEnabled: true,
        headerBackTitle: "",
        headerShadowVisible: false,
      }}/>
      
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
};


function HomeScreen({navigation}) {

  function LogOut(){
    firebase.auth().signOut()
    .then(() => {
      navigation.navigate('LoginScreen');
    })
    .catch(error =>{ Alert.alert(error.message)})
  }

  return (
    <View style={styles.container}>
    <View style={styles.ProfileRow}>
        <View style={{width:'70%',flexDirection:'column',padding: 20,}}>
            <Text style={styles.Welcometext}>Welcome Back.</Text>
            <Text style={styles.WelcomeUserText}>User</Text>
        </View>
        <View style={{width:'30%'}}>
            <TouchableOpacity style={styles.LogoutButton} onPress={()=>{LogOut()}}>
                <Text style={styles.LogoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.GameButtonsRow}>

            <TouchableOpacity style={styles.EasyGameButton} onPress={()=>{ navigation.navigate('EasyGameModeScreen')}}>
                <Text style={styles.GameButtonText}>Start Easy Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MediumGameButton} onPress={()=>{ navigation.navigate('MediumGameModeScreen')}}>
                <Text style={styles.GameButtonText}>Start Medium Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.HardGameButton} onPress={()=>{ navigation.navigate('HardGameModeScreen')}}>
                <Text style={styles.GameButtonText}>Start Hard Quiz</Text>
            </TouchableOpacity>

    </View>
    <View style={styles.PreviousGameButtonRow}>
   
             <TouchableOpacity style={styles.PreviousGameButton}>
                <Text style={styles.GameButtonText}>Previous Quiz Score</Text>
            </TouchableOpacity>
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAF7F0',
  },
  ProfileRow:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FAF7F0',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Welcometext:{
    textAlign:'left',
    fontSize: 12,
    color: '#041C32',
  },
  WelcomeUserText:{
    textAlign:'left',
    fontSize: 17,
    fontWeight: '500',
    color: '#041C32',
  },
  LogoutButton:{
    backgroundColor: 'red',
    padding: 10,
    width: '70%',
    borderRadius: 5,
    justifyContent: 'center',
  },
  EasyGameButton:{
    width: '70%',
    margin: 10,
    backgroundColor:'#916BBF',
    borderRadius: 6,
    justifyContent: 'center',
    padding: 10,
    height: 50,
  },
  MediumGameButton:{
    width: '70%',
    margin: 10,
    backgroundColor:'#3D2C8D',
    borderRadius: 6,
    justifyContent: 'center',
    padding: 10,
    height: 50,
  },
  HardGameButton:{
    width: '70%',
    margin: 10,
    backgroundColor:'#1C0C5B',
    borderRadius: 6,
    justifyContent: 'center',
    padding: 10,
    height: 50,
  },
  PreviousGameButton:{
    width: '50%',
    margin: 10,
    backgroundColor:'#FA7D09',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 10,
    height: 40,
},
    
  GameButtonText:{
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  LogoutButtonText:{
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '700',
    color: 'white',
  },
  GameButtonsRow:{
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  PreviousGameButtonRow:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});
