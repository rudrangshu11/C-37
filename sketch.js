var database, game, form, player; 
var playerCount = 0;
var allPlayers;
var gameState = 0;
function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
}