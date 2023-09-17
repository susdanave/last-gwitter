
function addUsuario() {

  let nomeUsuario = document.getElementById("nomeUsuario").value

  nomeUsuario = document.getElementById("nomeUsuario").value;

  localStorage.setItem("nomeUsuario", nomeUsuario);
  
    window.location = "GwitterRoom.html";
}

