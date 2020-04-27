let diceIds = 1;
function removeAllDice(){
    document.getElementById("masterBucket").innerHTML = "";
}
function roll(diceId, diceType){
    let roll = (Math.floor(Math.random()*(diceType))+1);
    console.log(document.getElementById(diceId).innerHTML)
    document.getElementById(diceId).innerText = roll;
}
function createDice(){
    let diceType;
    let diceAmount;
    diceType = document.getElementById("dicelist").innerText;
    diceAmount = document.getElementById("amountlist").innerText;
    if( diceType == "----"){
      alert("no Dice Type selected");
      if(document.getElementById("amountlist").innerText == "-----"){
        alert("no amount of dice value selected");
      }
    }
    else{
        if(diceAmount == "-----"){
            alert("no amount of dice value selected");
        }
        else{
            if(diceType == "d4"){
                createD4(parseInt(diceAmount, 10));
            }
            if(diceType == "d6"){
                createD6(parseInt(diceAmount, 10));
            }
            if(diceType == "d8"){
                createD8(parseInt(diceAmount, 10));
            }
            if(diceType == "d12"){
                createD12(parseInt(diceAmount, 10));
            }
            if(diceType == "d20"){
                createD20(parseInt(diceAmount, 10));
            }
        }
    }
}
function createD4(amount){
    let temp;
    for(let x = 0; x < amount; x++){
        temp = `dice${diceIds}`;
        document.getElementById("masterBucket").innerHTML += `<div><div class = "diceBox4-8-20"><div class = "centertext" id = "${temp}"></div></div><button type = "button" onclick = "roll(\`${temp}\`, ${4})">reroll d4</button></div>`
        roll(temp, 4);
        diceIds += 1;
    }
}
function createD6(amount){
    let temp;
    for(let x = 0; x < amount; x++){
        temp = `dice${diceIds}`;
        document.getElementById("masterBucket").innerHTML += `<div><div class = "diceBox6"><div class = "centertext" id = "${temp}"></div></div><button type = "button" onclick = "roll(\`${temp}\`, ${6})">reroll d6</button></div>`
        roll(temp, 6);
        diceIds += 1;
    }
}
function createD8(amount){
    let temp;
    for(let x = 0; x < amount; x++){
        temp = `dice${diceIds}`;
        document.getElementById("masterBucket").innerHTML += `<div><div class = "diceBox4-8-20"><div class = "centertext" id = "${temp}"></div></div><button type = "button" onclick = "roll(\`${temp}\`, ${8})">reroll d8</button></div>`
        roll(temp, 8);
        diceIds += 1;
    }
}
function createD12(amount){
    let temp;
    for(let x = 0; x < amount; x++){
        temp = `dice${diceIds}`;
        document.getElementById("masterBucket").innerHTML += `<div><div class = "diceBox12"><div class = "centertext" id = "${temp}"></div></div><button type = "button" onclick = "roll(\`${temp}\`, ${12})">reroll d12</button></div>`
        roll(temp, 12);
        diceIds += 1;
    }
}
function createD20(amount){
    let temp;
    for(let x = 0; x < amount; x++){
        temp = `dice${diceIds}`;
        document.getElementById("masterBucket").innerHTML += `<div><div class = "diceBox4-8-20"><div class = "centertext" id = "${temp}"></div></div><button type = "button" onclick = "roll(\`${temp}\`, ${20})">reroll d20</button></div>`
        roll(temp, 20);
        diceIds += 1;
    }
}
/*
<div><div class = `diceBox`><div class = `centertext` id = `dice${diceIds}`></div></div><button type = `button` onclick = "roll()">reroll</button></div>




      <div>
        <div class = "diceBox12">
          <div class = "centertext" id = "dice" >
            8
          </div>
        </div>
        <button type = "button" onclick = "roll()">reroll</button>
      </div> 
*/
function swapToTop(topId, selectedId){
    let temp;
    temp = document.getElementById(topId).innerText;
    document.getElementById(topId).innerText = document.getElementById(selectedId).innerText;
    document.getElementById(selectedId).innerText = temp;
}
function diceDropdown(){
    document.getElementById("diceDropdown").classList.toggle("show");
}
function amountDropdown(){
    document.getElementById("amountDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }