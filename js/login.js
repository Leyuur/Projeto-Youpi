// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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

      localStorage.setItem('logged', 'true');

      window.location.href = "menu.html";

    }).catch((error) => {

      Toastify({
        text: "Something went wrong. Try again",
        avatar: "assets/icon/error-circle.svg",
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();

      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(`Error: ${errorCode}, Message: ${errorMessage}, Email: ${email}`);
    });
});

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('input-email');
  const password = document.getElementById('input-pass');

  signInWithEmailAndPassword(auth, email.value, password.value).then((result) => {
    const user = result.user;

    console.log(user);

    localStorage.setItem('logged', 'true');

    window.location.href = "menu.html";

  }).catch((error) => {

    Toastify({
      text: "Invalid email or password",
      avatar: "assets/icon/error-circle.svg",
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function(){} // Callback after click
    }).showToast();

    email.focus();

    email.style.border = '1px solid red';
    password.style.border = '1px solid red';

    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
  });
});

let inputs = document.querySelectorAll(".inputs");
let loginBtn = document.getElementById('login-btn');
let emailInput = document.getElementById('input-email');
let passInput = document.getElementById('input-pass');

inputs.forEach(input => {
  input.addEventListener('input', () => {

    emailInput.style.border = '1px solid red' ? 'none' : 'none';
    passInput.style.border = '1px solid red' ? 'none' : 'none';

    if (emailInput.value != "" && passInput.value != "") {
      loginBtn.disabled = false;
    }
    else {  
      loginBtn.disabled = true;
    }
  })
})

let eye = document.getElementById('eye');

eye.addEventListener('click', () => {
  if (eye.innerText === 'visibility_off') {
    eye.innerText = 'visibility';
    passInput.type = 'text';
  }

  else {
    eye.innerText = 'visibility_off';
    passInput.type = 'password';
  }
})
