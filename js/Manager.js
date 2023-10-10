const LeftSide = 1;
const RightSide = 2;


export default class Manager 
{
  constructor(numberEntitys) 
  {
    this.Entitys = [];
    this.movements = 0;
    this.number = 2 * numberEntitys;
    this.pBoat = null;
    this.startTime = new Date(); 
  }
  
  pushEntity(Entity) 
  {
    this.Entitys.push(Entity); 
  }

  pushBoat(Boat)
  {
    this.pBoat = Boat;
  }

  setmovements()
  {
    this.movements++;
    this.updateMovieCount();
  }

  updateMovieCount() 
  {
    const movieCountElement = document.getElementById('movieCount');
    movieCountElement.textContent = this.movements;
  }

  getElapsedTimeInSeconds() {
    const currentTime = new Date();
    const elapsedTime = (currentTime - this.startTime) / 1000; 
    return elapsedTime.toFixed(1); 
  }

  gameOver()
  {
    this.setCookies();
    window.location.href = 'GameOver.html';
  }

  gameWin()
  {
    this.setCookies();
    window.location.href = 'GameWin.html';
  }
  setCookies()
  {
    const cookies = getCookies();
    const movieCount = cookies.movieCount || 0; // Valor padrão de 0 se o cookie não existir
    const currentTime = new Date(cookies.currentTime);

    // Atualize os elementos HTML com os dados recuperados
    const movieCountElement = this.movements;
    const currentTimeElement =this.getElapsedTimeInSeconds ;

    movieCountElement.textContent = movieCount;
    currentTimeElement.textContent = currentTime.toISOString(); 
  }
  getCookies() 
  {
    const cookies = document.cookie.split(';');
    const cookieData = {};
  
    cookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split('=');
      cookieData[key] = decodeURIComponent(value);
    });
  
    return cookieData;
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