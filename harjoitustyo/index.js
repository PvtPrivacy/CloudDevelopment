// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {
  getAuth,
  EmailAuthProvider,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js
';
// } from 'firebase/auth';

import {
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js
';
// } from 'firebase/firestore';

//https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js
//https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js
//https://www.gstatic.com/firebasejs/12.8.0/firebaseui.js
//https://www.gstatic.com/firebasejs/12.8.0/firebase-SERVICE.js



import * as firebaseui from 'https://www.gstatic.com/firebasejs/12.8.0/firebaseui.js
';
// import * as firebaseui from 'firebaseui';


// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {

    apiKey: "AIzaSyBzhHm7SoSN-zFFodE5zHwSiQbzJtVurtU",
    authDomain: "websovellus-harjoitustyo.firebaseapp.com",
    projectId: "websovellus-harjoitustyo",
    storageBucket: "websovellus-harjoitustyo.firebasestorage.app",
    messagingSenderId: "173262575013",
    appId: "1:173262575013:web:c155dc2364150852eb444c"
  };

  initializeApp(firebaseConfig);
  auth = getAuth();
  db = getFirestore();

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };
  const ui = new firebaseui.auth.AuthUI(auth);
// Called when the user clicks the RSVP button
startRsvpButton.addEventListener('click', () => {
  if (auth.currentUser) {
    // User is signed in; allows user to sign out
    signOut(auth);
  } else {
    // No user is signed in; allows user to sign in
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});
// Listen to the current Auth state
onAuthStateChanged(auth, user => {
  if (user) {
    startRsvpButton.textContent = 'LOGOUT';
    // Show guestbook to logged-in users
    guestbookContainer.style.display = 'block';
  } else {
    startRsvpButton.textContent = 'RSVP';
    // Hide guestbook for non-logged-in users
    guestbookContainer.style.display = 'none';
  }
});

 // Listen to the form submission
 form.addEventListener('submit', async e => {
  // Prevent the default form redirect
  e.preventDefault();
  // Write a new message to the database collection "guestbook"
  addDoc(collection(db, 'guestbook'), {
    text: input.value,
    timestamp: Date.now(),
    name: auth.currentUser.displayName,
    userId: auth.currentUser.uid
  });
  // clear message input field
  input.value = '';
  // Return false to avoid redirect
  return false;
});
 // Create query for messages
 const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
 onSnapshot(q, snaps => {
   // Reset page
   guestbook.innerHTML = '';
   // Loop through documents in database
   snaps.forEach(doc => {
     // Create an HTML entry for each document and add it to the chat
     const entry = document.createElement('p');
     entry.textContent = doc.data().name + ': ' + doc.data().text;
     guestbook.appendChild(entry);
   });
 });
// Listen to guestbook updates
function subscribeGuestbook() {
  const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
  guestbookListener = onSnapshot(q, snaps => {
    // Reset page
    guestbook.innerHTML = '';
    // Loop through documents in database
    snaps.forEach(doc => {
      // Create an HTML entry for each document and add it to the chat
      const entry = document.createElement('p');
      entry.textContent = doc.data().name + ': ' + doc.data().text;
      guestbook.appendChild(entry);
    });
  });
  function unsubscribeGuestbook() {
    if (guestbookListener != null) {
      guestbookListener();
      guestbookListener = null;
    }
  }  
// Listen to the current Auth state
onAuthStateChanged(auth, user => {
  if (user) {
    startRsvpButton.textContent = 'LOGOUT';
    // Show guestbook to logged-in users
    guestbookContainer.style.display = 'block';
    // Subscribe to the guestbook collection
    subscribeGuestbook();
  } else {
    startRsvpButton.textContent = 'RSVP';
    // Hide guestbook for non-logged-in users
    guestbookContainer.style.display = 'none';
    // Unsubscribe from the guestbook collection
    unsubscribeGuestbook();
  }
});
}}
main();



