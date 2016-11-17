function important()
{
  delayer();
}
window.onload = important;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function delayer() {
    sleep(7000);
};

sleep(7000);
//alert("hoho");