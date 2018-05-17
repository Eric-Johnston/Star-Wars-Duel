// Global variables

var charSelected = false;
var enemySelected = false;
var player = {}
var enemy = {}
var enemiesDefeated = 0;
var gameOver = false;

// Characters

var obiWan = {
    name: "Obi-Wan",
    healthPoints: 125,
    baseAttack: 6,
    attackPower:  4,
    counterAP: 9,
}

var quiGon = {
    name: "Qui-Gon",
    healthPoints: 135,
    baseAttack: 8,
    attackPower: 5,
    counterAP: 10,
}

var darthMaul = {
    name: "Darth Maul",
    healthPoints: 140,
    baseAttack: 8,
    attackPower: 7,
    counterAP: 11,
}

var darthSidious = {
    name: "Darth Sidious",
    healthPoints: 160,
    baseAttack: 9,
    attackPower: 9,
    counterAP: 13,
}

//

function playerSelect(charSelected) {
    player.name = charSelected.name;
    player.healthPoints = charSelected.healthPoints;
    player.baseAttack = charSelected.baseAttack;
    player.attackPower = charSelected.attackPower;
    player.counterAP = charSelected.counterAP;
}

function defenderSelect(enemySelected) {
    enemy.name = enemySelected.name;
    enemy.healthPoints = enemySelected.healthPoints;
    enemy.baseAttack = enemySelected.baseAttack;
    enemy.attackPower = enemySelected.attackPower;
    enemy.counterAP = enemySelected.counterAP;
}

//

function setEnemies(){
    $(".available-characters").removeClass("available-characters characters").addClass("enemies-available");
    $(".enemies").append($(".enemies-available"));
}

//

function resetGame(){
    $("#obiwan").children(".characterhp").html("Health: " + obiWan.healthPoints);
    $("#quigon").children(".characterhp").html("Health: " + quiGon.healthPoints);
    $("maul").children(".characterhp").html("Health: " + darthMaul.healthPoints);
    $("#sidious").children(".characterhp").html("Health: " + darthSidious.healthPoints);
    $("#obiwan").removeAttr("defender-char").removeClass("defender-char defender player-char").addClass("available-characters")
    $("#quigon").removeAttr("defender-char").removeClass("defender-char defender player-char").addClass("available-characters")
    $("#maul").removeAttr("defender-char").removeClass("defender-char defender player-char").addClass("available-characters")
    $("#sidious").removeAttr("defender-char").removeClass("defender-char defender player-char").addClass("available-characters")
    $(".characters").append(".available-characters")

    
    
    $("#gametxt").empty();
    $("#restart").hide();
    charSelected = false;
    enemySelected = false;
    enemiesDefeated = 0;
    gameOver = false;
    player = {};
    enemy = {};
}
//
$(document).ready(function(){

    $("#reset").hide();

    $("#obiwan").click(function() {

        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(obiWan);
            charSelected = true;
            console.log("Your character is")
            console.log(player);
            console.log("----------------------")
            $("#obiwan").removeClass("available-characters").addClass("player-char").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }
        
        if(charSelected == true){
            $("#quigon").click(function(){
                defenderSelect(quiGon);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#quigon").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#maul").click(function(){
                defenderSelect(darthMaul);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#maul").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#sidious").click(function(){
                defenderSelect(darthSidious);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#sidious").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }
    });
    
    
    $("#quigon").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(quiGon);
            charSelected = true;
            console.log(player);
            $("#quigon").removeClass("available-characters").addClass("player-char").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        } 

        if(charSelected == true){
            $("#obiwan").click(function(){
                defenderSelect(obiWan);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#obiwan").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#maul").click(function(){
                defenderSelect(darthMaul);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#maul").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#sidious").click(function(){
                defenderSelect(darthSidious);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#sidious").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }
    });

    $("#maul").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(darthMaul);
            charSelected = true;
            console.log(player);
            $("#maul").removeClass("available-characters").addClass("player-char").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

        if(charSelected == true){
            $("#obiwan").click(function(){
                defenderSelect(obiWan);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#obiwan").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#quigon").click(function(){
                defenderSelect(quiGon);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#quigon").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#sidious").click(function(){
                defenderSelect(darthSidious);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#sidious").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }
    });

    $("#sidious").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(darthSidious);
            charSelected = true;
            console.log(player);
            $("#sidious").removeClass("available-characters").addClass("player-char").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

        if(charSelected == true){
            $("#obiwan").click(function(){
                defenderSelect(obiWan);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#obiwan").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#quigon").click(function(){
                defenderSelect(quiGon);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#quigon").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }

        if(charSelected == true){
            $("#maul").click(function(){
                defenderSelect(darthMaul);
                console.log("Defender character is")
                console.log(enemy);
                console.log("----------------------")
                enemySelected = true;
                $("#maul").removeClass("enemies-available").addClass("defender-char");
                $(".defender").append($(".defender-char"));
            });
        }
    });

    $("#attack").click(function(){
        console.log("You attacked!")
        console.log("Attacker: " + JSON.stringify(player));
        console.log("----------------------")
        console.log("Defender: " + JSON.stringify(enemy));
        console.log("----------------------")

        if(charSelected && enemySelected){
            enemy.healthPoints = enemy.healthPoints - player.baseAttack;
            $(".defender-char").children(".characterhp").html("Health: " +enemy.healthPoints);
            $("#gametxt").html("<p>You attacked " + enemy.name + " for " + player.baseAttack + " damage!<p>");
            player.baseAttack = player.attackPower + player.baseAttack;
        
            if(enemy.healthPoints > 0){
                player.healthPoints = player.healthPoints - enemy.counterAP;
                $(".player-char").children(".characterhp").html("Health: " + player.healthPoints);
                
                
                if(player.healthPoints > 0){
                    $("#gametxt").append("<p>" + enemy.name + "counter-attacked for " + enemy.counterAP + " damage!<p>");
                }
                
                else{
                gameOver = true;
                $("#gametxt").append("<p> You have been defeated!")
                $("#reset").show();
                }
            }

            else{
                enemiesDefeated++;
                (this).defenderSelect = false;
                $("#gametxt").html("<p> You have defeated " + enemy.name + "!<p>" + "<p>Choose a new enemy.<p>")
                $((".defender-char")).hide();

                if(enemiesDefeated == 3){
                    gameOver = true;
                    $("#gametxt").html("<p> You won!<p>" + "<p> Play again?<p>")
                    $("#reset").show();
                }
            }

        }       

    });

    $("#reset").click(function(){
        resetGame();
    });
});