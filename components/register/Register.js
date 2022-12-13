import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {firebase} from '../config';
import {useBackend} from '../../provider/AppProvider';

export default function SignUpScreen({navigation}) {
  const [name, setname] = useState('');
  const [telephone, settelephone] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {signUpUser} = useBackend();

  let registerUser;
  registerUser = async (name, telephone, email, password) => {
    await signUpUser(email, password)
      .then(() => {
        Alert.alert('Congratulations!', 'You are registered successfully');
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        Alert.alert(error.message);
      });

    await firebase
      .firestore()
      .collection('/users')
      .add({
        name,
        telephone,
        email,
        password,
      })

      .then(() => {
        Alert.alert('User registered successfully!');
        navigation.navigate('Home');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Heading}>
        <Text style={styles.titleText}>Register Now</Text>
      </View>
      <View style={styles.Rows}>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setname}
            value={name}
            placeholder="Name"
            placeholderTextColor={'silver'}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={settelephone}
            value={telephone}
            placeholder="Telephone"
            placeholderTextColor={'silver'}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setemail}
            value={email}
            placeholder="Email"
            placeholderTextColor={'silver'}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'silver'}
          />
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              registerUser(name, telephone, email, password);
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading: {
    textAlign: 'center',
  },
  Rows: {
    margin: 20,
    flexDirection: 'column',
  },
  Row: {
    margin: 12,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1B2D58',
  },
  input: {
    height: 35,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    color: 'black',
    borderColor: 'silver',
    width: 270,
    fontSize: 14,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2D58',
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  forgotPassword: {
    color: 'white',
    fontSize: 17,
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
