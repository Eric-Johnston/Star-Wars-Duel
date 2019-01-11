
const init = function () {

    let characters = {
        obiWan: {
            name: "Obi-Wan",
            healthPoints: 125,
            baseAttack: 8,
            attackPower: 7,
            counterAP: 13,
            playerChar: null
        },
        quiGon: {
            name: "Qui-Gon",
            healthPoints: 135,
            baseAttack: 9,
            attackPower: 8,
            counterAP: 14,
            playerChar: null
        },
        darthMaul: {
            name: "Darth Maul",
            healthPoints: 140,
            baseAttack: 10,
            attackPower: 9,
            counterAP: 15,
            playerChar: null
        },
        darthSidious: {
            name: "Darth Sidious",
            healthPoints: 160,
            baseAttack: 11,
            attackPower: 10,
            counterAP: 16,
            playerChar: null
        }
    };

    $(".available-characters").children().on('click', function () {

        $(this).removeClass("char-avail");
        //We create the charID variable so we can evaluate the ID of the DOM element in our switch statement
        let charID = $(this).attr("id");
        let moveChar = $(this).addClass("user-char").removeClass("char-avail");
        let enemyChars = $(this).parent().children(".char-avail").addClass("enemy-char").removeClass("char-avail");

        for (let i = 0; i < enemyChars.length; i++) {

            switch (charID) {
                case "obiwan":
                    $(".user-character").append(moveChar);
                    $(".enemies").append(enemyChars)[i];
                    break;
                case "quigon":
                    $(".user-character").append(moveChar);
                    $(".enemies").append(enemyChars)[i];
                    break;
                case "maul":
                    $(".user-character").append(moveChar);
                    $(".enemies").append(enemyChars)[i];
                    break;
                case "sidious":
                    $(".user-character").append(moveChar);
                    $(".enemies").append(enemyChars)[i];
                    break;
                default:
                    console.log("There was an error");
            };

            $(".enemies").children().on('click', function () {

                let charID = $(this).attr("id");
                let defender = $(this).addClass("defender-char").removeClass("user-char");
    
                switch (charID) {
                    case "obiwan":
                        $("#defender-char").append(defender);
                        break;
                    case "quigon":
                        $("#defender-char").append(defender);
                        break;
                    case "maul":
                        $("#defender-char").append(defender);
                        break;
                    case "sidious":
                        $("#defender-char").append(defender);
                        break;
                };
            });
        };
    });
};

window.addEventListener('load', init());