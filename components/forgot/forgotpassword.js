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
  Alert,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { firebase } from '../config';

export default function ForgotPasswordScreen({navigation}) {

  const [enteredforgotemail , setenteredforgotemail] = useState("");

  ForgotPassword = async(enteredforgotemail) => {

    if(enteredforgotemail == ""){
      Alert.alert("Error","Please enter your email!");
    }else{

        await firebase.auth().sendPasswordResetEmail(enteredforgotemail)
        .then(() => {
            Alert.alert("Success","Please check your email!");
        }).catch((error) => {   
                Alert.alert(error.message);
        
        })
        .finally(() => {
            navigation.navigate('LoginScreen');
        })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <Text style={styles.titleText}>Forgot Password</Text>
      </View>
      <View style={styles.Rows}>
      <ScrollView 
      vertical={true}
      showsVerticalScrollIndicator={true}
      >
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setenteredforgotemail}
            value={enteredforgotemail}
            placeholder="Email Address"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.button} onPress={()=>{ ForgotPassword(enteredforgotemail) }} >
            <Text style={{ color: "white",fontSize: 16 }}>Send Password Reset Link</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'white',
    padding: 20,
  },
  MainImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Heading: {
    padding: 5,
    width: '100%',
    textAlign: "left",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1B2D58",
  },
  Rows: {
    height: '100%',
    marginTop: 10,
    flexDirection: "column",
  },
  Row: { 
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginTop: 50,
  },
 
  input: {
    height: 38,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    color: "black",
    borderColor: "silver",
    width: '100%',
    fontSize: 13,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#3B44F6',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    height: 40,
  },
  forgotPassword: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 17,
  },
});
