// Global variables

var charSelected = false;
var enemySelected = false;
var player = []
var enemy = []
var enemiesDefeated = 0;
var gameOver = false;

// Characters

var obiWan = {
    name = "Obi-Wan",
    healthPoints = 120,
    baseAttack = 6,
    attackPower = 9,
    counterAP = 8
}

var quiGon = {
    name = "Qui-Gon",
    healthPoints = 130,
    baseAttack = 8,
    attackPower = 9,
    counterAP = 9
}

var darthMaul = {
    name = "Darth Maul",
    healthPoints = 140,
    baseAttack = 8,
    attackPower = 10,
    counterAP = 10,
}

var darthSidious = {
    name = "Darth Sideous",
    healthPoints = 160,
    baseAttack = 9,
    attackPower = 12,
    counterAP = 12
}

//

function playerSelect(charSelected) {
    player.name = charSelected.name;
    player.healthPoints = charSelected.healthPoints;
    player.baseAttack = charSelected.baseAttack;
    player.attackPower = charSelected.attackPower;
    player.counterAP = charSelected.counterAP;
}

function defenderSelect(defenderSelect) {
    defender.name = defenderSelect.name;
    defender.healthPoints = defenderSelect.healthPoints;
    defender.baseAttack = defenderSelect.baseAttack;
    defender.attackPower = defenderSelect.attackPower;
    defender.counterAP = defenderSelect.counterAP;
}

//

function setEnemies(){
    
}