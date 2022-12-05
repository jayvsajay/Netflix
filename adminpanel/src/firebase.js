
import { initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA30nM-uXLROyPPM7wrTwUA_a2TNXjguNc",
    authDomain: "netflix-73d7f.firebaseapp.com",
    projectId: "netflix-73d7f",
    storageBucket: "netflix-73d7f.appspot.com",
    messagingSenderId: "91864052032",
    appId: "1:91864052032:web:d6833e6c9f24d7ad6b4aa5",
    measurementId: "G-7YGQTJ5ZCF"
  };

  const app = initializeApp(firebaseConfig);
  const storage =getStorage(app)
  export default storage;