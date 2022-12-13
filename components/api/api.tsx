import {firebase} from '../config';

export class FirebaseCalls {
  signIn = async (username: string, password: string): Promise<any> => {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  };

  signUpUser = async (username: string, password: string): Promise<any> => {
    return firebase.auth().createUserWithEmailAndPassword(username, password);
  };

  logout = (): Promise<any> => {
    return firebase.auth().signOut();
  };

  userName = (): string => firebase.auth().currentUser?.email || '';

  email = (): string => firebase.auth().currentUser?.email || '';
}
