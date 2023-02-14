const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const flashlight = document.getElementById ( 'flashlight' );


function rechargeLamp () {
  if (!isLanternOn) {
    alert("A lanterna está desligada. Ligue-a antes de recarregar a bateria.");
    return;
  }
  battery = 100;
  var elem = document.getElementById("myBar");
  elem.style.width = battery + "%";
  elem.innerHTML = battery  + "%";
}

function lampOff () {
  isLanternOn = false;
  document.getElementById("lanternStatus").textContent = "Desligada";
        flashlight.src = './img/lanterna-desligada.png';

}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );

var isLanternOn = false;
var battery = 100;
function lampOn () {
  if (!isLanternOn) {
    flashlight.src = './img/lanterna-ligada.png';
    isLanternOn = true;
    document.getElementById("lanternStatus").textContent = "Ligada";
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 1000);
    function frame() {
      if(!isLanternOn){
        clearInterval(id);
        return;
      }
      if (battery <= 0) {
        clearInterval(id);
        isLanternOn = false;
        lampOff(); // chama a função lampOff para desligar a lanterna e atualizar a imagem
      } else {
        battery--;
        elem.style.width = battery + "%";
        elem.innerHTML = battery  + "%";
      }
    }
  }
}
