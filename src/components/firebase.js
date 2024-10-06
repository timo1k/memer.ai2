import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPAeacPhC7qMGjZ5vWMZwULTfvBku9LGU",
  authDomain: "poop-5f5e4.firebaseapp.com",
  projectId: "poop-5f5e4",
  storageBucket: "poop-5f5e4.appspot.com",
  messagingSenderId: "272629397766",
  appId: "1:272629397766:web:29a4352fc74aef61a90687",
  measurementId: "G-4WC96279Q2",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
