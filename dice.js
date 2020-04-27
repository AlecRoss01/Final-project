window.onload = () =>{
}
let baseStats = [];
baseStats.length = 6;
let statModifiers = [];
statModifiers.length = 6;
let skillStats = [];
skillStats.length = 18;
function classDropdown() {
    document.getElementById("classDropdown").classList.toggle("show");
    console.log("clicked");
}
function raceDropdown() {
  document.getElementById("raceDropdown").classList.toggle("show");
}
function alignmentDropdown() {
  document.getElementById("alignmentDropdown").classList.toggle("show");
}
function lvlDropdown(){
  document.getElementById("lvlDropdown").classList.toggle("show");
}
function backgroundDropdown(){
  document.getElementById("backgroundDropdown").classList.toggle("show");
}

function swapToTop(topId, selectedId){
  let temp;
  temp = document.getElementById(topId).innerText;
  document.getElementById(topId).innerText = document.getElementById(selectedId).innerText;
  document.getElementById(selectedId).innerText = temp;
}

let skillNames = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Invesitagation", "Medicine",
"Nature", "Perception", "Performance", "Persuasion", "Religon", "Sleight of Hand", "Stealth", "Survival"]
function threeLargest(array){
  let temp;
  for(let x = 0; x< array.length; x++){
    for(let f = 0; f< array.length; f++){
      if(array[x] > array[f]){
        temp = array[f];
        array[f] = array[x];
        array[x] = temp;
      }
    }
  }
  console.log(array);
  return array[0] + array[1] + array[2];
}
function rollStats(){
  let statArray = [0, 0, 0, 0, 0, 0];
  let diceArray = [0, 0, 0, 0];
  for(let y = 0; y< statArray.length; y++){
    for(let i = 0; i<diceArray.length; i++){
      diceArray[i] = Math.floor((Math.random() * 6)+1);
    }
    statArray[y] = threeLargest(diceArray);
  }
  return statArray;
}
function skillSetup(){
  for(let g = 0; g<baseStats.length; g++){
    if(g == 0){
      skillStats[3] = statModifiers[g];
    }
    else if(g == 1){
      skillStats[0] = statModifiers[g];
      skillStats[15] = statModifiers[g];
      skillStats[16] = statModifiers[g];
    }
    else if(g == 3){
      skillStats[2] = statModifiers[g];
      skillStats[5] = statModifiers[g];
      skillStats[8] = statModifiers[g];
      skillStats[10] = statModifiers[g];
      skillStats[14] = statModifiers[g];
    }
    else if(g == 4){
      skillStats[1] = statModifiers[g];
      skillStats[6] = statModifiers[g];
      skillStats[9] = statModifiers[g];
      skillStats[12] = statModifiers[g];
      skillStats[17] = statModifiers[g];
    }
    else if(g == 5){
      skillStats[4] = statModifiers[g];
      skillStats[7] = statModifiers[g];
      skillStats[11] = statModifiers[g];
      skillStats[13] = statModifiers[g];
    }
  }
}
function setupStatModifiers(){
  for(let v = 0; v< baseStats.length; v++){
    if(baseStats[v] >= 30){
      statModifiers[v] = 10;
    }
    else if(baseStats[v] >= 28){
      statModifiers[v] = 9;
    }
    else if(baseStats[v] >= 26){
      statModifiers[v] = 8;
    }
    else if(baseStats[v] >= 24){
      statModifiers[v] = 7;
    }
    else if(baseStats[v] >= 22){
      statModifiers[v] = 6;
    }
    else if(baseStats[v] >= 20){
      statModifiers[v] = 5;
    }
    else if(baseStats[v] >= 18){
      statModifiers[v] = 4;
    }
    else if(baseStats[v] >= 16){
      statModifiers[v] = 3;
    }
    else if(baseStats[v] >= 14){
      statModifiers[v] = 2;
    }
    else if(baseStats[v] >= 12){
      statModifiers[v] = 1;
    }
    else if(baseStats[v] >= 10){
      statModifiers[v] = 0;
    }
    else if(baseStats[v] >= 8){
      statModifiers[v] = -1;
    }
    else if(baseStats[v] >= 6){
      statModifiers[v] = -2;
    }
    else if(baseStats[v] >= 4){
      statModifiers[v] = -3;
    }
    else if(baseStats[v] >= 2){
      statModifiers[v] = -4;
    }
    else if(baseStats[v] >= 1){
      statModifiers[v] = -5;
    }
  }
}
function statSetup(){
  let statRadios = document.getElementsByName('BaseStats');
  for (let i = 0, length = statRadios.length; i < length; i++) {
    if (statRadios[i].checked) {
      if(statRadios[i].value == "1"){
        baseStats = rollStats();
        document.getElementById("baseClass1").innerText = `Strength: ${baseStats[0]}`;
        document.getElementById("baseClass2").innerText = `Dexterity: ${baseStats[1]}`;
        document.getElementById("baseClass3").innerText = `Constitution: ${baseStats[2]}`;
        document.getElementById("baseClass4").innerText = `Intelligence: ${baseStats[3]}`;
        document.getElementById("baseClass5").innerText = `Wisdom: ${baseStats[4]}`;
        document.getElementById("baseClass6").innerText = `Charisma: ${baseStats[5]}`;
        setupStatModifiers();
        skillSetup();
        for(let o = 0; o<skillStats.length; o++){
          document.getElementById(`skill${o+1}`).innerText= `${skillNames[o]}: ${skillStats[o]}`;
        }
        break;
      }
    }
  }
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
