// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCQXgRvpR285OV_HmBRgbBmcNNCcfyfDWI",
  authDomain: "chattingbot0916.firebaseapp.com",
  projectId: "chattingbot0916",
  storageBucket: "chattingbot0916.appspot.com", // 👈 fix: should end with .appspot.com
  messagingSenderId: "955856103094",
  appId: "1:955856103094:web:349c85927913b0fc4fa817",
  measurementId: "G-710YQR4NE0",
  databaseURL: "https://chattingbot0916-default-rtdb.firebaseio.com/" // 👈 add database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
