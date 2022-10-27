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
function send()
{

      msg = document.getElementById("msg").value;
      firebaseConfig.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//End code
      } });  }); }
getData();
