var canvas, backgroundImage;

var gameState = 0;
var runnerCount;
var allPlayers;
var distance = 0;
var database;

var form, game;
var runner1, runner2, runner3, runner4;
var runners;
var runner, beginning, runnerImage;

function preload(){
   
    runnerImage = loadImage("runner.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Marathon();
  game.getState();
  game.start();
}


function draw(){
  if(runnerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}