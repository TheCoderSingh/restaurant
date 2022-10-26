import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBZsOK4bxsKvWFLZGVU5m2hBpl0wrmVukk',
  authDomain: 'restaurant-cd3ad.firebaseapp.com',
  databaseURL: 'https://restaurant-cd3ad-default-rtdb.firebaseio.com',
  projectId: 'restaurant-cd3ad',
  storageBucket: 'restaurant-cd3ad.appspot.com',
  messagingSenderId: '242157526225',
  appId: '1:242157526225:web:2855aa5136ba8c28ce39f0'
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
