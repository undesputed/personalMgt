import * as firebase from '@react-native-firebase/app';
import { utils } from '@react-native-firebase/app';

interface firebaseInterface {
  projectId?: string;
  appId?: string;
  databaseURL?: string;
  storageBucket?: string;
  locationId?: string;
  apiKey?: string;
  authDomain?: string;
  messagingSenderId?: string;
  measurementId?: string;
}

const firebaseConfig: firebaseInterface = {
  // Replace with your actual Firebase project configuration details
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

export default firebase;
