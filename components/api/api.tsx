import {firebase} from '../config';

export class FirebaseCalls {
  signIn = async (username: string, password: string): Promise<any> => {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  };

  signUpUser = async (username: string, password: string): Promise<any> => {
    return firebase.auth().createUserWithEmailAndPassword(username, password);
  };

  forgotPass = async (username: string): Promise<any> => {
    return firebase.auth().sendPasswordResetEmail(username);
  };


  logout = (): Promise<any> => {
    return firebase.auth().signOut();
  };

  userName = (): string => firebase.auth().currentUser?.email || '';

  email = (): string => firebase.auth().currentUser?.email || '';
}
