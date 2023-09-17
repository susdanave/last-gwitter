
//ADICIONE SEUS LINKS FIREBASE

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
const nomeUsuario = localStorage.getItem("nomeUsuario");
var salas = [];
document.getElementById("nomeUsuario").innerHTML = "Bem-vindo(a) " + nomeUsuario + "!";
getData();
function addRoom()
{
 const roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).set({
    purpose : "adicionar nome de sala"
  });

 loadRoom(roomName);
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{
  const childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
  const    row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "GwitterPage.html";
}

function logout() {
localStorage.removeItem("nomeUsuario");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
function loadRoom(room) {
  localStorage.setItem("roomName", room);
  location = "Gwitter.talk.html";
}