class Marathon {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        runner = new Runner();
        var runnerCountRef = await database.ref('runnerCount').once("value");
        if(runnerCountRef.exists()){
          runnerCount = runnerCountRef.val();
          runner.getCount();
        }
        beginning = new Beginning();
        beginning.display();
      }
      runner1 = createSprite(100, 200);
      runner2 = createSprite(300, 200);
      runner3 = createSprite(500, 200);
      runner4 = createSprite(700, 200);
      runner1.addImage(runnerImage);
      runner1.scale = 0.1;
      runner2.addImage(runnerImage);
      runner2.scale = 0.1;
      runner3.addImage(runnerImage);
      runner3.scale = 0.1;
      runner4.addImage(runnerImage);
      runner4.scale = 0.1;
      runners = [runner1, runner2, runner3, runner4];
  
     
    }
  
    play(){
      beginning.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Runner.getRunnerInfo();
  
      if(allPlayers !== undefined){
        var index = 0;
        var x = 0;
        var y = 0;
        for(var plr in allPlayers){
          index = index + 1
          x = x + 200;
          y = displayHeight - allPlayers[plr].distance;
          runners[index - 1].x = x;
          runners[index - 1].y = y;
          if(index === runner.index){
            runners[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = runners[index - 1].y;
  
  
          }
        }
  
       
  
      }
      if(keyDown(UP_ARROW) && runner.index !== null){
        runner.distance += 10;
        runner.update();
  
      }
  
      drawSprites();
    }
  }
  