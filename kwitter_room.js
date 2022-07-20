var firebaseConfig = {
    apiKey: "AIzaSyAgMF7dNih6qI4HI4_crLKGAyLyeYpzZMY",
    authDomain: "kwitter-4b17c.firebaseapp.com",
    databaseURL: "https://kwitter-4b17c-default-rtdb.firebaseio.com",
    projectId: "kwitter-4b17c",
    storageBucket: "kwitter-4b17c.appspot.com",
    messagingSenderId: "422943663764",
    appId: "1:422943663764:web:3ea174387b8a2adbf9f681"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function AddRoom() {
    room_name = document.getElementById("RoomName").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitterPage.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        console.log("Room Name - " + Room_names) ;
        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName (this.id)'>"
        + Room_names + "</div> <hr>" ;
        document.getElementById("output").innerHTML += row ; 
        });
    });
}

getData() 

function redirectToRoomName(name) {
    console.log(name) ; 
    localStorage.setItem("room_name", room_name) ; 
    window.location = "kwitterPage.html" ;
}

function LogOut() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}