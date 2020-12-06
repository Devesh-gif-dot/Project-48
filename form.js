class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.s1 = createElement('h2');
    this.s2 = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("SpaceShip Jump");
    this.title.position(displayWidth/2 + 50, 0);

    this.input.position(displayWidth/2 + 50 , displayHeight/2 - 350);
    this.button.position(displayWidth/2 + 80, displayHeight/2-300);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      play.name = this.input.value();
      playerCount+=1;
      play.index = playerCount;
      gameState = "start";
      play.state = "start";
      play.updateCount(playerCount);
      this.greeting.html("Hello " + play.name)
      this.greeting.position(displayWidth/2 + 70, displayHeight/3);
      play.update();
      //play.updateInfo();
      //play.updateInfo();
    });


  }
    
}
