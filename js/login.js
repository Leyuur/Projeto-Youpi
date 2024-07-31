// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSdcJMfq0iLwVeJ-YINYGWVUo-3z-Qrw",
  authDomain: "youpi-49791.firebaseapp.com",
  databaseURL: "https://youpi-49791-default-rtdb.firebaseio.com",
  projectId: "youpi-49791",
  storageBucket: "youpi-49791.appspot.com",
  messagingSenderId: "584506286648",
  appId: "1:584506286648:web:f1c8497af9f2b0efe77ccd",
  measurementId: "G-H72YJFJXEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById('google-btn').addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(`Error: ${errorCode}, Message: ${errorMessage}, Email: ${email}`);
    });
});

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('input-email').value;
  const password = document.getElementById('input-pass').value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
  });
});
