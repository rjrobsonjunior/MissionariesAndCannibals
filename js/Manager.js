//import Entity from "./Entity";
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Manager 
{
  constructor(numberEntitys) 
  {
    this.Entitys = [];
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

  gameOver()
  {

  }

  gameWin()
  {

  }

  checkStateEntitys() 
  {
    let missionarieLeft = 0;
    let missionarieRight = 0;
    let cannibalLeft = 0;
    let cannibalRight = 0;
    const onBoat = 0;

    for (let Entity of this.Entitys) 
    {
      console.log(`${Entity.constructor.isMissionarie} - Nome: ${Entity.nome}, Lado Rio: ${Entity.ladoRio}`);
      // is Missionarie
      if(Entity.isMissionarie == true)
      {
        if(Entity.state == LeftSide)
        {
          missionarieLeft++;
        }
        else if (Entity.state == RightSide)
        {
          missionarieRight ++;
        }
        else
        {
          onBoat ++;
        }
      }
      //is Cannibal
      else
      {
        if(Entity.state == LeftSide)
        {
          cannibalLeft++;
        }
        else if (Entity.state == RightSide)
        {
          cannibalRight ++;
        }
        else
        {
          onBoat ++;
        }
      }
    }

    if( missionarieLeft < cannibalLeft)
    {
      alert("Mais Canibais que Missionários no lado esquerdo;");
      this.gameOver();
    }
    else if (missionarieRight < cannibalRight)
    {
      alert("Mais Canibais que Missionários no lado direito;");
      this.gameOver();
    }
    else if ((cannibalRight+missionarieRight) == this.number)
    {
      this.gameWin();
    }
  }

  loop()
  {
    for( Entity of this.Entitys)
    {
      Entity.loop();
    }
  }
}