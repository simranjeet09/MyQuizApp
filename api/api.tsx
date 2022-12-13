import auth from '@react-native-firebase/auth';
import { firebase } from '../components/config';


export class FirebaseCalls {
  signIn = async (username: string, password: string): Promise<any> => {

    return firebase.auth().signInWithEmailAndPassword(username, password);
  }

  signUpUser = async (username: string, password: string): Promise<any> => {

    return firebase.auth().createUserWithEmailAndPassword(username, password);
  }


  logout = (): Promise<any> => {
    return auth()
      .signOut()
  };

  userName = (): string => auth().currentUser?.displayName || "";

  email = (): string => auth().currentUser?.email || "";
}
