class Beginning {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Marathon");
      title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        runner.name = this.input.value();
        runnerCount+=1;
        runner.index = runnerCount;
        runner.update();
        runner.updateCount(runnerCount);
        this.greeting.html("Hello " + runner.name);
        this.greeting.position(displayWidth/2 - 70, displayHeight/2);
      });
  
    }
  }