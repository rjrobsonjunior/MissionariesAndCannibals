const LeftSide = 1;
const RightSide = 2;

const canvasWidth = 7;
const canvasHeight = 18;
const canvasSpacing = 1;
const canvasWidthBoat = 25;
const URLmissionariesSelected = '../assets/padre2.png';
const URLcannibalsSelected = '../assets/canibal2.png';

const drop = 60;
const dropBoat = 50;

export default class Entity
{
  constructor(Ename, posX, posY, Ewidth, Eheigth, missionarie, URLimage) 
  {
    this.isMissionarie = missionarie;
    this.X = posX;
    this.Y = posY;
    this.state = LeftSide;
    this.imageUrl = URLimage;
    this.onBoat = false;
    

    this.OriginalX = posX;
    this.OriginalY = posY;

    this.pBoat = null;

    // canvas  property
    this.heigth = Eheigth;
    this.width = Ewidth;
    this.canvas = document.getElementById(Ename);
    this.context = this.canvas.getContext('2d');  
    this.canvas.addEventListener('mouseover', this.mouseOver.bind(this));
    this.canvas.addEventListener('mouseout', this.mouseOut.bind(this));
    this.canvas.addEventListener('click', this.handleClick.bind(this));

  }

  pushBoat(Boat)
  {
    this.pBoat = Boat;
  }

  drawImageOut() {
    const img = new Image();
    img.src = this.imageUrl;
    
    img.onload = () => {
      //console.log(this.imageUrl);
      this.context.clearRect(0, 0, this.width, this.heigth);
      this.context.drawImage(img, 0, 0, this.width, this.heigth);
    };
    this.canvas.style.left = this.X + '%';
    this.canvas.style.top = this.Y + '%';
  }

  drawImage()
  {
    this.canvas.style.left = this.X + '%';
    this.canvas.style.top = this.Y + '%';
  }

  mouseOver()
  {
    const hoverImageUrl = this.isMissionarie === true 
    ? URLmissionariesSelected 
    : URLcannibalsSelected;

    const img = new Image();
    img.src = hoverImageUrl;

    img.onload = () => {
      //console.log(hoverImageUrl);
      this.context.clearRect(0, 0, this.width, this.heigth);
      this.context.drawImage(img,  0, 0, this.width, this.heigth);
    };
    this.canvas.style.left = this.X + '%';
    this.canvas.style.top = this.Y + '%';
  }

  mouseOut() {
    this.drawImageOut();
  }

  handleClick() {
    
    // Entity is not on the Boat
    if(this.onBoat === false)
    {
      //Entity left side
      if(this.state === LeftSide)
      {
        if(this.pBoat.state === RightSide)
        {
          alert("Barco inascessível!");
        }
        else
        {
          const inBoat = this.pBoat.getOnBoat();
          if(inBoat < 2)
          {
            this.X = this.pBoat.X + ( inBoat * (canvasSpacing + canvasWidth)) + canvasWidth;
            this.Y = this.pBoat.Y -10;

            this.pBoat.pushEntity(this);

            this.onBoat = true;
          }
          else
          {
            alert("barco cheio!");
          }
        }
      }
      //Entity Rigth side
      else
      {
        if(this.pBoat.state === LeftSide)
        {
          alert("Barco inascessível!");
        }
        else
        {
          const inBoat = this.pBoat.getOnBoat();
          if(inBoat < 2)
          {
            this.X = this.pBoat.X + ( inBoat * (canvasSpacing + canvasWidth)) + canvasWidth;
            this.Y = this.pBoat.Y -10;

            this.pBoat.pushEntity(this);

            this.onBoat = true;
          }
          else
          {
            alert("barco cheio!");
          }
        }
      }
    }
    // Entity is on the Boat
    else
    {
      this.pBoat.deleteEntity(this);
      this.onBoat = false;
      if(this.state == LeftSide)
      {
        //this.canvas.style.left = this.OriginalX + '%';
        this.X = this.OriginalX;
        this.Y = this.OriginalY;
      }
      else
      {
        this.X = this.OriginalX + drop;
        this.Y = this.OriginalY;
      }
    }
    
    this.drawImage();
  }

  getIsMissionarie()
  {
    return this.isMissionarie;
  }

  setCordinate()
  {
    this.X = this.pBoat.X + canvasWidth;
    this.drawImage();
  }

  move(direction)
  {
    this.state = direction;
    if(direction == LeftSide)
    {
      this.X -= dropBoat;
    }
    else
    {
      this.X += dropBoat;
    }
    this.canvas.style.left = this.X + '%';
  }
};