import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
let show_password = document.getElementById("show_password")
let password = document.getElementById("password");
show_password && show_password.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})
const firebaseConfig = {
    apiKey: "AIzaSyAptsHI15hvrZ_j0Dp1wcZrYejn2EjFgjE",
    authDomain: "first-authentication-98aa8.firebaseapp.com",
    projectId: "first-authentication-98aa8",
    storageBucket: "first-authentication-98aa8.appspot.com",
    messagingSenderId: "371268652894",
    appId: "1:371268652894:web:7e19be043680580c8549cf",
    measurementId: "G-ZR8KD2L039"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signUp = document.getElementById('register');
signUp && signUp.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.getElementById("username")
    let password = document.getElementById("password")
    let valueOfEmail = email.value
    let valueOfPassword = password.value
    createUserWithEmailAndPassword(auth, valueOfEmail, valueOfPassword)
        .then(async (userCredential) => {
            try {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    fullName: fullName.value,
                    email: email.value,
                    password: password.value
                });
                
            } catch (err) {
                console.log(err)
            }
            Swal.fire({
              icon: 'success',
              title: 'User register successfully',
          })
          
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        });
})
const loginBtn = document.getElementById('login');
loginBtn && loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.getElementById("username")
    let password = document.getElementById("password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async () => {
          Swal.fire({
            icon: 'success',
            title: 'User login successfully'+"😊",
            
        })
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage + "😡",
            })
        });
})

