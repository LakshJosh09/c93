
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
       localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
       console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
}

function logout() 
{ 
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}