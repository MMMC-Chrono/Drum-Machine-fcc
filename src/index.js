function playAudio(drum) {
   let playDrum = document.getElementById(drum);
   playDrum.play();

   var displayEl = document.getElementById("display");
   if(drum == "Q") {
       displayEl.textContent = "Heater 1"
   } else if(drum == "W") {
       displayEl.textContent = "Heater 2"
   } else if(drum == "E") {
       displayEl.textContent = "Heater 3"
   } else if(drum == "A") {
       displayEl.textContent = "Heater 4"
   } else if(drum == "S") {
       displayEl.textContent = "Clap"
   } else if(drum == "D") {
       displayEl.textContent = "Open-HH"
   } else if(drum == "Z") {
       displayEl.textContent = "Kick-n'-Hat"
   } else if(drum == "X") {
       displayEl.textContent = "Kick"
   } else {
       displayEl.textContent = "Closed-HH"
   }
   
}

window.document.onkeyup = function(event) {
    let key = event.key;
    return (
        key === "q" || key === "Q" ? playAudio('Q') :
        key === "w" || key === "W" ? playAudio('W') :
        key === "e" || key === "E" ? playAudio('E') :
        key === "a" || key === "A" ? playAudio('A') :
        key === "s" || key === "S" ? playAudio('S') :
        key === "d" || key === "D" ? playAudio('D') :
        key === "z" || key === "Z" ? playAudio('Z') :
        key === "x" || key === "X" ? playAudio('X') :
        key === "c" || key === "C" ? playAudio('C') :
        null
    )
}

const volEl = document.querySelectorAll('.clip');
const vol = document.getElementById('volume-output');
const sliderEl = document.getElementById('vol-range');

sliderEl.onclick = function() {
    vol.innerHTML = this.value;
    for (let i=0; i<volEl.length; i++) {
        volEl[i].volume = this.value/100;
    }
}