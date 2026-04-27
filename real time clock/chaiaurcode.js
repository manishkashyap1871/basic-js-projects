const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
   //console.log(date.toLocaleTimeString()); //=> it //will give o/p only in console
  clock.innerHTML = (date.toLocaleTimeString());
}, 1000);