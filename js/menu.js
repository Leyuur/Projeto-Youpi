// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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

const auth = getAuth();

document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {

      console.log(user);
      if (localStorage.getItem('logged')) {
          Toastify({
              text: "Logged in as " + user.email,
              duration: 2000,
              className: "success",
              gravity: "top", // `top` or `bottom`
              position: "right", // `left`, `center` or `right`
              close: true,
              avatar: "assets/icon/check-circle.svg",
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "green",
              },
              offset: {
                x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
              },
              onClick: function(){} // Callback after click
            }).showToast();
            
            localStorage.removeItem('logged');
      }

      let profPicture = document.getElementById("profile-picture");

      if (user.photoURL != null) {
          profPicture.src = user.photoURL;
      }

    } else {

      Toastify({
          text: "No user is signed in",
          duration: 3000,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function(){} // Callback after click
        }).showToast();

      window.location.href = "index.html"; // Redirect to login page if no user is signed in
    }
  });
});
