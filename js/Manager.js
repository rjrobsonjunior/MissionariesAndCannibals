const LeftSide = 1;
const RightSide = 2;


export default class Manager 
{
  constructor(numberEntitys) 
  {
    this.Entitys = [];
    this.movies = 0;
    this.number = 2 * numberEntitys;
    this.pBoat = null;
  }
    
  pushEntity(Entity) 
  {
    this.Entitys.push(Entity); 
  }

  pushBoat(Boat)
  {
    this.pBoat = Boat;
  }

  setMovies()
  {
    this.movies++;
    this.updateMovieCount();
  }

  updateMovieCount() 
  {
    const movieCountElement = document.getElementById('movieCount');
    movieCountElement.textContent = this.movies;
  }

  gameOver()
  {
    alert("VOCE PERDEU :< !!! Total de movimentos = " + this.movies);
  }

  gameWin()
  {
    alert("VOCE GANHOU!!! :> Total de movimentos = " + this.movies);
  }

  checkStateEntitys() 
  {
    let missionarieLeft = 0;
    let missionarieRight = 0;
    let cannibalLeft = 0;
    let cannibalRight = 0;

    for (let Entity of this.Entitys) 
    {
      // is Missionarie
      if(Entity.isMissionarie == true)
      {
        if(Entity.state == LeftSide)
        {
          missionarieLeft++;
        }
        else
        {
          missionarieRight ++;
        }
      }
      //is Cannibal
      else
      {
        if(Entity.state == LeftSide)
        {
          cannibalLeft++;
        } 
        else
        {
          cannibalRight ++;
        }
      }
    }

    if( missionarieLeft < cannibalLeft && missionarieLeft != 0 )
    {
      alert("Mais Canibais que Missionários no lado esquerdo;");
      this.gameOver();
    }
    else if (missionarieRight < cannibalRight && missionarieRight != 0)
    {
      alert("Mais Canibais que Missionários no lado direito;");
      this.gameOver();
    }
    else if ((cannibalRight+missionarieRight) == this.number)
    {
      this.gameWin();
    }
  
  }
   
};