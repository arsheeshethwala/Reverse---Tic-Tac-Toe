let status = [, , , , , , , , , ];
var gameBoard;
var j = 1;
var playerOne;
var playerTwo;
const loseCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

var playable = false;

function startGame() {
    playable = true;
    playerOne = prompt("Player 1 - Enter your initials: ");
    playerTwo = prompt("Player 2 - Enter your initials: ");
    for (var i = 0; i < 9; i++) {
        gameBoard = document.getElementsByTagName("button")[i];
        gameBoard.style.backgroundColor = "white";
        gameBoard.style.color = "black";
        gameBoard.innerHTML = " ";
        gameBoard.setAttribute("onclick", "playGame(this.id)");
    }
    status = [, , , , , , , , , ];
}

function playGame(id) {
    if (playable) {
        var spot = document.getElementById(id);
        if (
            spot.innerText != playerOne &&
            spot.innerText != playerTwo &&
            spot.innerHTML == " "
        ) {
            if (j == 1) {
                spot.innerText = playerOne;
                spot.setAttribute("onclick", " ");
                status[id] = 2;
                checkLooser(id, playerOne);
                console.log("firstPlayer played at " + (id + 1));
                j = 2;
            } else {
                spot.innerText = playerTwo;
                spot.setAttribute("onclick", " ");
                status[id] = 2;
                checkLooser(id, playerTwo);
                console.log("secondPlayer played at " + (id + 1));
                j = 1;
            }
        }
    }
}

function checkLooser(id, player) {
    var availableSpot = 9;
    startGame.onclick = true;
    for (var i = 0; i < loseCombos.length; i++) {
        if (
            player ==
            document.getElementsByTagName("button")[loseCombos[i][0]].innerHTML &&
            player ==
            document.getElementsByTagName("button")[loseCombos[i][1]].innerHTML &&
            player ==
            document.getElementsByTagName("button")[loseCombos[i][2]].innerHTML
        ) {
            playable = false;
            alert(player + " is the Looser!!");
            for (var j = 0; j < 3; j++) {
                document.getElementsByTagName("button")[
                    loseCombos[i][j]
                ].style.backgroundColor = "#FF0000";
            }
        }
    }
    for (var i = 0; i < status.length; i++) {
        if (status[i] != null) {
            availableSpot--;
        }
    }
    if (playable && availableSpot == 0) {
        alert("Draw! Both players are winners");
        startGame();
    }
}