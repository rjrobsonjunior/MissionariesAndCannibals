const URLmissionariesSelected = '../assets/padre2.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const LeftSide = 1;
const RightSide = 2;
const drop = 60;

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

  drawImage() {
    const img = new Image();
    img.src = this.imageUrl;
    
    img.onload = () => {
      //console.log(this.imageUrl);
      this.context.clearRect(0, 0, this.Ewidth, this.Eheight);
      this.context.drawImage(img, this.X, this.Y, this.Ewidth, this.Eheight);
    };
  }

  mouseOver() {

    const hoverImageUrl = this.isMissionarie === true 
    ? URLmissionariesSelected 
    : URLcannibalsSelected;

    const img = new Image();
    img.src = hoverImageUrl;

    img.onload = () => {
      //console.log(hoverImageUrl);
      this.context.clearRect(0, 0, this.Ewidth, this.Eheight);
      this.context.drawImage(img, this.X, this.Y, this.Ewidth, this.Eheight);
    };
  }

  mouseOut() {
    this.drawImage();
  }

  handleClick() {
    // Entity is not on the Boat
    console.log(this);
    if(this.onBoat === false)
    {
      if(this.state === LeftSide)
      {
        if(this.pBoat.state === RightSide)
        {
          alert("Barco inascessível!");
        }
        else
        {
          this.pBoat.pushEntity(this);
        }
      }
      else
      {
        if(this.state === LeftSide)
        {

        }
      }
    }
    // Entity is on the Boat
    else
    {
      if(this.state == LeftSide)
      {
        this.canvas.style.left = this.OriginalX + '%';
        this.X += this.OriginalX;
      }
      else
      {
        this.canvas.style.left = (this.OriginalX + drop)+ '%';
        this.X += this.OriginalX + drop;
      }
    }
    
    
    this.drawImage();
  }

  getIsMissionarie()
  {
    return this.isMissionarie;
  }

  move(x, y)
  {
    this.X = x;
    this.Y = y;
    this.drawImage();
  }
  loop()
  {
    
  }
}