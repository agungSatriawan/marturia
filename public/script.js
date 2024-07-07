

const firebaseConfig = {
    apiKey: "AIzaSyBzLAfi4wUYj9vSsNRS9P_x9dfNI4EEu8Q",
    authDomain: "klinikmarturia-71e5c.firebaseapp.com",
    projectId: "klinikmarturia-71e5c",
    storageBucket: "klinikmarturia-71e5c.appspot.com",
    messagingSenderId: "808119710030",
    appId: "1:808119710030:web:684a5a5f1d47d854ea6e1f",
    measurementId: "G-2GG4ZP4YJE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const userLogin = firebase.auth().currentUser;
let loginSession = '';
$('.nama_user').html(sessionStorage.getItem("user"))
function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (val) {
            //Success!!
            console.log(val);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}

function login(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.email;
            loginSession = userCredential.uid;
            if (loginSession != null) {
                sessionStorage.setItem('uid', loginSession);
                sessionStorage.setItem('user', user);
                window.location.replace('dashboard.html');
            } else {
                window.location.replace('login.html');
            }
            // console.log(userCredential)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,

            });

        });
}

$("body").on("click", ".login", function (e) {
    e.preventDefault();
    let username = $(".username").val();
    let password = $(".password").val();
    if (username != "" && password != "") {
        login(username, password)
    }
    if (username == "" || password == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username dan Password harus diisi!",

        });
    }
});

$("body").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let username = $(".username").val();
        let password = $(".password").val();
        if (username != "" && password != "") {
            login(username, password)
        }
        if (username == "" || password == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Username dan Password harus diisi!",

            });
        }
    }
});