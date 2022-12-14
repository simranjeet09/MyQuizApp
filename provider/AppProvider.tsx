import React, {useContext} from 'react';
import {FirebaseCalls} from '../components/api/api';

interface BackendCallsInterface {
  signIn: (username: string, password: string) => Promise<any>;
  signUpUser: (username: string, password: string) => Promise<any>;
  forgotPass: (username: string) => Promise<any>;

  logout: () => Promise<any>;
  userName: () => string;
}

const BackendContext = React.createContext<BackendCallsInterface>({
  signIn: (username: string, password: string) => ({} as Promise<any>),
  signUpUser: (email: string, password: string) => ({} as Promise<any>),
  forgotPass: (email: string) => ({} as Promise<any>),
  logout: () => ({} as Promise<any>),
  userName: () => '',
});

export const useBackend = (): BackendCallsInterface => {
  return useContext(BackendContext);
};

const BackendProvider = ({children}: any) => {
  const firebaseCalls = new FirebaseCalls();

  return (
    <BackendContext.Provider value={firebaseCalls}>
      {children}
    </BackendContext.Provider>
  );
};
export default BackendProvider;
