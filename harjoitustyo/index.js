import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, EmailAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, addDoc, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { AuthUI } from "https://www.gstatic.com/firebasejs/ui/6.0.2/firebase-ui-auth.js";

// 1. Setup Config & Initialize
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const ui = new firebaseui.auth.AuthUI(auth);

// 2. Elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');
const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');

let guestbookUnsubscribe = null;

// 3. UI Config
const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: () => false // Prevent redirect
    }
};

// 4. Guestbook Subscription Logic
function subscribeGuestbook() {
    const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
    guestbookUnsubscribe = onSnapshot(q, (snaps) => {
        guestbook.innerHTML = '';
        snaps.forEach(doc => {
            const entry = document.createElement('p');
            entry.textContent = `${doc.data().name}: ${doc.data().text}`;
            guestbook.appendChild(entry);
        });
    });
}

function unsubscribeGuestbook() {
    if (guestbookUnsubscribe) {
        guestbookUnsubscribe();
        guestbookUnsubscribe = null;
    }
}

// 5. Auth Observer
onAuthStateChanged(auth, (user) => {
    if (user) {
        startRsvpButton.textContent = 'LOGOUT';
        guestbookContainer.style.display = 'block';
        subscribeGuestbook();
    } else {
        startRsvpButton.textContent = 'KIRJAUDU SISÄÄN';
        guestbookContainer.style.display = 'none';
        unsubscribeGuestbook();
    }
});

// 6. Event Listeners
startRsvpButton.addEventListener('click', () => {
    if (auth.currentUser) {
        signOut(auth);
    } else {
        ui.start('#firebaseui-auth-container', uiConfig);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;

    try {
        await addDoc(collection(db, 'guestbook'), {
            text: input.value,
            timestamp: Date.now(),
            name: auth.currentUser.displayName || "Anonyymi",
            userId: auth.currentUser.uid
        });
        input.value = '';
    } catch (error) {
        console.error("Error adding document: ", error);
    }

});
