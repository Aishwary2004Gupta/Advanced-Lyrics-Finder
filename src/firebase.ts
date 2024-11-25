import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your_firebase_api_key",
  authDomain: "lyrics-finder-app-2024.firebaseapp.com",
  projectId: "lyrics-finder-app-2024",
  storageBucket: "lyrics-finder-app-2024.appspot.com",
  messagingSenderId: "123456789012",
  appId: "your_app_id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
