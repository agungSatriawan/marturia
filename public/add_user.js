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

$(document).ready(function () {
    var numItems = $("li.fancyTab").length;

    if (numItems == 12) {
        $("li.fancyTab").width("8.3%");
    }
    if (numItems == 11) {
        $("li.fancyTab").width("9%");
    }
    if (numItems == 10) {
        $("li.fancyTab").width("10%");
    }
    if (numItems == 9) {
        $("li.fancyTab").width("11.1%");
    }
    if (numItems == 8) {
        $("li.fancyTab").width("12.5%");
    }
    if (numItems == 7) {
        $("li.fancyTab").width("14.2%");
    }
    if (numItems == 6) {
        $("li.fancyTab").width("16.666666666666667%");
    }
    if (numItems == 5) {
        $("li.fancyTab").width("20%");
    }
    if (numItems == 4) {
        $("li.fancyTab").width("25%");
    }
    if (numItems == 3) {
        $("li.fancyTab").width("33.3%");
    }
    if (numItems == 2) {
        $("li.fancyTab").width("50%");
    }
});

$(window).on("load", function () {
    $(".fancyTabs").each(function () {
        var highestBox = 0;
        $(".fancyTab a", this).each(function () {
            if ($(this).height() > highestBox) highestBox = $(this).height();
        });

        $(".fancyTab a", this).height(highestBox);
    });
});
$('.nama_user').html(sessionStorage.getItem("user"))


$(".logout").click(function (e) {
    e.preventDefault();
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("user");
    window.location.replace("login.html");
});

$("body").on("change keyup keydown", ".pass", function () {
    $(".pass").removeClass("is-invalid");
    $(".pass").removeClass("is-valid");
    let pass1 = $(".password1").val();
    let pass2 = $(".password2").val();
    if (pass1 != '' && pass2 != '') {
        if (pass1 != pass2) {
            $(".pass").addClass("is-invalid");
        } else if (pass1 == pass2) {
            $(".pass").addClass("is-valid");
        }
    }
});

$("body").on("click", ".add_user", function (e) {
    e.preventDefault();
    let email = $(".email").val();
    let pass1 = $(".password1").val();
    let pass2 = $(".password2").val();

    if (email != "" && pass1 != "" && pass2 != "") {
        // cek kesesuaian password
        if (pass1 != pass2) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Harap Periksa kembali password Anda",
            });
            return false;
        } else {
            register(email, pass1)
        }


    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Harap Periksa kembali Data Anda",
        });
    }
});