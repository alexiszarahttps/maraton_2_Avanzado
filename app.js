//Genera un numero aleatorio entre un rango de enteros

function juegoppt(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = juegoppt(0, 2);

opcionUsuario = prompt("¿Qué elegis?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("La maquina eligió " + opciones[opcionMaquina]);

if (opcionUsuario == piedra) {
  if (opcionMaquina == piedra) {
    alert("Empate!");
  } else if (opcionMaquina == papel) {
    alert("Perdiste :( ");
  } else if (opcionMaquina == tijera) {
    alert("Ganaste!");
  }
} else if (opcionUsuario == papel) {
  if (opcionMaquina == piedra) {
    alert("Ganaste!");
  } else if (opcionMaquina == papel) {
    alert("Empate!");
  } else if (opcionMaquina == tijera) {
    alert("Perdiste!");
  }
} else if (opcionUsuario == tijera) {
  if (opcionMaquina == piedra) {
    alert("Perdiste!");
  } else if (opcionMaquina == papel) {
    alert("Ganaste!");
  } else if (opcionMaquina == tijera) {
    alert("Empate!");
  }
} else {
  alert("No elegiste ninguna opcion o elegiste una incorrecta");
}
var tiempo;
var on = false;
var seg = 0;
var min = 0;

var startTime = function () {
  seg++;
  tiempo = setTimeout("startTime()", 1000);
  if (seg > 59) {
    seg = 0;
    min++;
  }
  document.getElementById("minutos").value = min;
  document.getElementById("segundos").value = seg;
};

var stopStart = function () {
  document.getElementById("tiempo").innerHTML = !on ? "Parar" : "Empezar";
  if (!on) {
    on = true;
    startTime();
  } else {
    on = false;
    clearTimeout(tiempo);
  }
};
