import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import {auth} from './firebase';

export const doCreateUserWithEmailAndPassword = async ( email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async ( email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  //result.user
  return result;
}

export const doSignOut = async () => {
  return auth.signOut();
}

export const doPasswordReset = async (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordUpdate = async (password) => {
  return updatePassword(auth.currentUser, password);
}