
const init = function () {

    let player = {};
    let enemy = {};
    let characters = {
        obiWan: {
            name: "Obi-Wan",
            healthPoints: 125,
            baseAttack: 8,
            attackPower: 7,
            counterAP: 13,
            playerChar: null,
            enemyChar: null
        },
        quiGon: {
            name: "Qui-Gon",
            healthPoints: 135,
            baseAttack: 9,
            attackPower: 8,
            counterAP: 14,
            playerChar: null,
            enemyChar: null
        },
        darthMaul: {
            name: "Darth Maul",
            healthPoints: 140,
            baseAttack: 10,
            attackPower: 9,
            counterAP: 15,
            playerChar: null,
            enemyChar: null
        },
        darthSidious: {
            name: "Darth Sidious",
            healthPoints: 160,
            baseAttack: 11,
            attackPower: 10,
            counterAP: 16,
            playerChar: null,
            enemyChar: null
        }
    };

    $(".available-characters").children().on('click', function () {

        $(this).removeClass("char-avail");
        let charID = $(this).attr("id");
        let moveChar = $(this).addClass("user-char").removeClass("char-avail");
        let enemyChars = $(this).parent().children(".char-avail").addClass("enemy-char").removeClass("char-avail");

        for (let i = 0; i < enemyChars.length; i++) {

            switch (charID) {
                case "obiwan":
                    $(".user-character").append(moveChar);
                    player = characters.obiWan;
                    player.playerChar = true;
                    $(".enemies").append(enemyChars)[i];
                    return;
                case "quigon":
                    $(".user-character").append(moveChar);
                    player = characters.quiGon;
                    player.playerChar = true;
                    $(".enemies").append(enemyChars)[i];
                    return;
                case "maul":
                    $(".user-character").append(moveChar);
                    player = characters.darthMaul;
                    player.playerChar = true;
                    $(".enemies").append(enemyChars)[i];
                    return;
                case "sidious":
                    $(".user-character").append(moveChar);
                    player = characters.darthSidious;
                    player.playerChar = true;
                    $(".enemies").append(enemyChars)[i];
                    return;
                default:
                    console.log("Something went wrong");
                    break;
            };
        };

        $(".enemies").children().on('click', function () {

            let charID = $(this).attr("id");
            let defender = $(this).addClass("defender-char").removeClass("user-char enemies");

            switch (charID) {
                case "obiwan":
                    $("#defender-char").append(defender);
                    enemy = characters.obiWan;
                    enemy.enemyChar = true;
                    break;
                case "quigon":
                    $("#defender-char").append(defender);
                    enemy = characters.quiGon;
                    enemy.enemyChar = true;
                    break;
                case "maul":
                    $("#defender-char").append(defender);
                    enemy = characters.darthMaul;
                    enemy.enemyChar = true;
                    break;
                case "sidious":
                    $("#defender-char").append(defender);
                    enemy = characters.darthSidious;
                    enemy.enemyChar = true;
                    break;
                default:
                    console.log("Something went wrong");
                    break;
            };
        });

        $("#attack").on('click', function () {

            //Player attack
            enemy.healthPoints = enemy.healthPoints - player.baseAttack;
            //Enemy attack
            player.healthPoints = player.healthPoints - enemy.baseAttack;
            $(".defender-char").children(".characterhp").html(`Health: ${enemy.healthPoints}`);
            $(".user-char").children(".characterhp").html(`Health: ${player.healthPoints}`);
            $("#gametxt").html(`<p>You attacked ${enemy.name} for ${player.baseAttack} damage!<p>`);
            //Player AP increase
            player.baseAttack = player.baseAttack + player.attackPower;
            
            if(enemy.healthPoints <= 0) {
                $("#defender-char").html("");
            }

        });
    });
};

window.addEventListener('load', init());