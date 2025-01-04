//distanza fra due esperienze
let blocco1 = document.getElementById("esp1");
let blocco2 = document.getElementById("esp2");
let offset1 = blocco1.getBoundingClientRect().top + blocco1.clientHeight;
let offset2 = blocco2.getBoundingClientRect().top;
let bias = offset2 - offset1;
//all'evendo del dom generato
document.addEventListener("DOMContentLoaded", (event) => {
  //il numero index è il numero di esperienze lavorative
  for (let index = 1; index < 5; index++) {
    //ricavo l'altezza dei dot
    let dot = document.getElementById("dot" + index);
    let altezzadot = dot.clientHeight + dot.clientHeight * (73 / 100);
    //ricavo l'altezza della prima sezione
    let blocco = document.getElementById("esp" + index);
    let altezza = 0;
    if (index < 4) {
      altezza = blocco.clientHeight - altezzadot + bias;
    } else {
      altezza = blocco.clientHeight - altezzadot;
    }
    //assegno questa altezza all'hr verticale
    let hr = document.getElementById("hr" + index);
    hr.style.height = altezza + "px";
  }
});
