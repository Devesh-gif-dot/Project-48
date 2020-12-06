class Player{
  constructor(){
    this.score = 0;
    this.name = null;
    this.rank = null;
    this.index = null;
    this.state = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score,
      state:this.state
    });
  }
  updateInfo(){
  if(play.index === 1){
      player1state = database.ref('player1/state');
      player1name = database.ref('player1/name');
      player1score = database.ref('player1/score');
    }
    if(play.index === 2){
      player2state = database.ref('player2/state');
      player2name = database.ref('player2/name');
      player1score = database.ref('player2/score');
    }
  }
  //updateScore(Score){
    //database.ref('players/player1').update({
      //name: this.name,
      //score: Score
    //})
    //database.ref('players/player2').update({
      //name: this.name,
      //score: Score
    //})
  //}



//  static getPlayerInfo(){
    //var playerInfoRef = database.ref('players');
    //playerInfoRef.on("value",(data)=>{
     // allPlayers = data.val();
//   })
 // }
  //getRank(){
    //var ranking = database.ref('carsAtEnd');
    //ranking.on("value",(data)=>{
      //this.rank = data.val();
    //})
  //}

  //static updateRank(x){
    //database.ref('/').update({
     // carsAtEnd: x 
    //});
 // }
  
}
