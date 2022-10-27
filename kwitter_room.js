
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA6kFUlPtDzXkgm-s_S_oRnWbWUohaoxko",
      authDomain: "alina-a16e5.firebaseapp.com",
      databaseURL: "https://alina-a16e5-default-rtdb.firebaseio.com",
      projectId: "alina-a16e5",
      storageBucket: "alina-a16e5.appspot.com",
      messagingSenderId: "669961272874",
      appId: "1:669961272874:web:c812f6378df28ed7fbcd53"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
 { room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html"; }

   function redirectToRoomName(name)
    { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       } 
       
       function logout() { 
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
         window.location = "index.html";
       }