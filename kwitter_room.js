// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD9rDIdK0bkDF2VjfROYjrW1I_K5UBQJWY",
    authDomain: "kwitter-4ccdb.firebaseapp.com",
    databaseURL: "https://kwitter-4ccdb-default-rtdb.firebaseio.com",
    projectId: "kwitter-4ccdb",
    storageBucket: "kwitter-4ccdb.appspot.com",
    messagingSenderId: "158304355168",
    appId: "1:158304355168:web:15a5650a9271b7154f9405",
    measurementId: "G-YW2DLBKJY9"
  };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
   room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
});

      localStorage.setItem("room_name" , room_name);

 window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});

});
}

      getData();

      function redirectToRoomName(name)
      {
       console.log(name);
         localStorage.setItem("room_name" , name);
         window.location = "kwitter_page.html";
      }

      function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html"
      }