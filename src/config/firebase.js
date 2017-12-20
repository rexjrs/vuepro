import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDlq376yWIei_VZfdB-GXo9aiHEQh3Qsbg',
  authDomain: 'vueapp-3ded9.firebaseapp.com',
  databaseURL: 'https://vueapp-3ded9.firebaseio.com',
  projectId: 'vueapp-3ded9',
  storageBucket: 'vueapp-3ded9.appspot.com',
  messagingSenderId: '991908785679',
};

const firebaseApp = firebase.initializeApp(config);
export const storage = firebaseApp.storage;
export const db = firebaseApp.firestore;
