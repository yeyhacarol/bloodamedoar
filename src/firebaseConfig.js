import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTKCTFD3avtp4eoBCP401pMvU9pfC1Gh8",
  authDomain: "blood---amedoar.firebaseapp.com",
  projectId: "blood---amedoar",
  storageBucket: "blood---amedoar.appspot.com",
  messagingSenderId: "923650083408",
  appId: "1:923650083408:web:c0513621477c530e69df55",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
