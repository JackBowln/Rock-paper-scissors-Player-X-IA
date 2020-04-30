/* var player recebe a jogada do jogador feita a partir do html:
1 - pedra
2 - papel
3 - tesoura

player IA
1 ganha 3 
2 ganha 1
3 ganha 2
1 perde 2
2 perde 3
3 perde 1
*/

var playerScore = 0;
var iaScore = 0;

function play(player) {
    //jogada da IA
    var ia = 1 + Math.floor(Math.random()*3); //retorna um valor entre 1 e 3
    
    //ver quem ganhou
    if( (player == 1 && ia==3) || (player == 2 && ia==1) || (player == 3 && ia==2) ){
        res = "player Wins";
      }else if( (player == 1 && ia==2) || (player == 2 && ia==3) || (player == 3 && ia==1) ){
        res = "ia Wins";
      }else{
        res = "deuce";
      }
      console.log(player, ia, res);
    

    //atualizar o placar
    if(res == "player Wins"){
        playerScore++;
    }else if(res == "ia Wins"){
        iaScore++;
    }


    //atualizar a interface do jogador (mostrar o resultado)

    var div = document.getElementById("resultados");
    var pScore = document.getElementById("score");
    var pWinner = document.getElementById("lastWinner");

    pScore.innerHTML = "Player " + playerScore + " X " + iaScore + " IA";
    pWinner.innerHTML = res;
    div.className = "show";

}