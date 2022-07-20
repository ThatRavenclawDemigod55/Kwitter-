
function AddUser() {
    user_name = document.getElementById("Username").value ; 

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html" ;
}