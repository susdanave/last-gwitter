const firebaseConfig = {
    apiKey: "AIzaSyCWSsf6s-PX7ytcuOX2teCKPYCn9PYYqCQ",
    authDomain: "gwitter-a0911.firebaseapp.com",
    databaseURL: "https://gwitter-a0911-default-rtdb.firebaseio.com",
    projectId: "gwitter-a0911",
    storageBucket: "gwitter-a0911.appspot.com",
    messagingSenderId: "462611671868",
    appId: "1:462611671868:web:9a41abd8a5c0a789df4c39",
    measurementId: "G-E0L9WL4ZY3"
  };
  
  firebase.initializeApp(firebaseConfig);
  nomeUsuario = localStorage.getItem("nomeUsuario");
	roomName = localStorage.getItem("roomName");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name:nomeUsuario,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
         console.log(firebaseMessageId);
	       console.log(messageData);
	       name = messageData['name'];
	       message = messageData['message'];
         like = messageData['like'];
         nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
         spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = nameWithTag + messageWithTag +like_button + spanWithTag;       
        document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updateLike(messageId)
{
  console.log("botão de like pressionado - " + messageId);
	buttonId = messageId;
	likes = document.getElementById(buttonId).value;
	updatedLikes = Number(likes) + 1;
	console.log(updatedLikes);

	firebase.database().ref(roomName).child(messageId).update({
		like : updatedLikes  
	 });

}

function logout() {
localStorage.removeItem("nomeUsuario");
localStorage.removeItem("roomName")
}