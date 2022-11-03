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



export default function LoginScreen({navigation}) {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  LoginIn = async(username,password) => {

    if(username == "" && password == ""){
      Alert.alert("Error","Please enter your credentials!");
    }else{

      try{
        await firebase.auth().signInWithEmailAndPassword(username,password)
        .then(() => {
          navigation.navigate('Home');
        })
      }
      catch(error){
        Alert.alert("Error",error.message);
      }

    }

    
  };

  return (
    <View style={styles.container}>
      <View style={styles.MainImageContainer}>
        <Image style={{width: 200,height: 200}} source={require("../../assets/quiz.png")} />
      </View>
      <View style={styles.Heading}>
        <Text style={styles.titleText}>Welcome back! 🎉</Text>
      </View>
      <View style={styles.Rows}>
      <ScrollView 
      vertical={true}
      showsVerticalScrollIndicator={true}
      >
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setusername}
            value={username}
            placeholder="Username"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.button} onPress={() => LoginIn(username,password)}>
            <Text style={{ color: "white",fontSize: 16 }}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <View style={{width: '50%'}}>
          <TouchableOpacity >
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity> 
          </View>
          <View style={{width: '50%'}}>
          <TouchableOpacity  onPress={() => navigation.navigate('SignUpScreen')} >
        <Text style={styles.forgotPassword}>Register Now</Text>
        </TouchableOpacity>
          </View>

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
    backgroundColor:'#f7f7f7',
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
    marginTop: 5,
    flexDirection: "column",
  },
  Row: { 
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginTop: 25,
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
