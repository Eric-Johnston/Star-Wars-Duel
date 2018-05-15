// Global variables

var charSelected = false;
var enemySelected = false;
var player = []
var enemy = []
var enemiesDefeated = 0;
var gameOver = false;

// Characters

var obiWan = {
    name: "Obi-Wan",
    healthPoints: 120,
    baseAttack: 6,
    attackPower:  9,
    counterAP: 8,
}

var quiGon = {
    name: "Qui-Gon",
    healthPoints: 130,
    baseAttack: 8,
    attackPower: 9,
    counterAP: 9
}

var darthMaul = {
    name: "Darth Maul",
    healthPoints: 140,
    baseAttack: 8,
    attackPower: 10,
    counterAP: 10,
}

var darthSidious = {
    name: "Darth Sideous",
    healthPoints: 160,
    baseAttack: 9,
    attackPower: 12,
    counterAP: 12
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
    defender.name = enemySelected.name;
    defender.healthPoints = enemySelected.healthPoints;
    defender.baseAttack = enemySelected.baseAttack;
    defender.attackPower = enemySelected.attackPower;
    defender.counterAP = enemySelected.counterAP;
}

//

function setEnemies(){
    $(".available-characters").removeClass("available-characters").addClass("enemies-available");
    $(".enemies").append($(".enemies-available"));
}

//
$(document).ready(function(){

    $("#obiwan").on("click", function() {

        if(charSelected == false){
            playerSelect(obiWan);
            charSelected = true;
            console.log(player);
            $("#obiwan").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

    });

    $("#quigon").on("click", function() {
        
        if(charSelected == false){
            playerSelect(obiWan);
            charSelected = true;
            console.log(player);
            $("#quigon").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }
    });

    $("#maul").on("click", function() {
        
        if(charSelected == false){
            playerSelect(obiWan);
            charSelected = true;
            console.log(player);
            $("#maul").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }
    });

    $("#sidious").on("click", function() {
        
        if(charSelected == false){
            playerSelect(obiWan);
            charSelected = true;
            console.log(player);
            $("#sidious").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }
    });

});