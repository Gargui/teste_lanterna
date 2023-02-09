const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const flashlight = document.getElementById ( 'flashlight' );


function rechargeLamp () {
  battery = 100;
  var elem = document.getElementById("myBar");
  elem.style.width = battery + "%";
        elem.innerHTML = battery  + "%";
}

function lampOff () {
  isLanternOn = false;
        flashlight.src = './img/lanterna-desligada.png';

}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
flashlight.addEventListener ( 'mouseover', lampOn );
flashlight.addEventListener ( 'mouseleave', lampOff );

var isLanternOn = false;
var battery = 100;
function lampOn () {
  if (!isLanternOn) {
    flashlight.src = './img/lanterna-ligada.png';
    isLanternOn = true;
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
      } else {
        battery--;
        elem.style.width = battery + "%";
        elem.innerHTML = battery  + "%";
      }
    }
  }
}
