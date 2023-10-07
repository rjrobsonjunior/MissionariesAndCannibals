const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const LeftSide = 1;
const RightSide = 2;
const canvasWidth = 7;
const canvasHeight = 18;
const canvasSpacing = 1;
const canvasWidthBoat = 25;

const drop = 50;


export default class Boat 
{
    constructor(Ename, posX, posY, Bwidth, Bheight, URLimage, Manager)
    {
      this.pManager = Manager;
      this.state = LeftSide;
      this.onBoat = 0;
      this.state = LeftSide;
      this.X = posX;
      this.Y = posY;
      this.imageUrl = URLimage;

      this.EntityList = [];

      // canvas  property
      this.heigth = Bheight;
      this.width = Bwidth;

      this.canvas = document.getElementById(Ename);
      this.context = this.canvas.getContext('2d');
      this.canvas.addEventListener('mouseover', this.mouseOver.bind(this));
      this.canvas.addEventListener('mouseout', this.mouseOut.bind(this));
      this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    drawImage() {
      const img = new Image();
      img.src = this.imageUrl;
      
      img.onload = () => {
        this.context.clearRect(0, 0, this.width, this.heigth);
        this.context.drawImage(img, 0, 0, this.width, this.heigth);
      };
      this.canvas.style.left = this.X + '%';
      this.canvas.style.top = this.Y + '%';
    }
  
    mouseOver() 
    {  
      const img = new Image();
      img.src = URLboatSelected;
  
      img.onload = () => {
        this.context.clearRect(0, 0, this.width, this.heigth);
        this.context.drawImage(img,  0, 0, this.width, this.heigth);
      };
      this.canvas.style.left = this.X + '%';
      this.canvas.style.top = this.Y + '%';
    }
  
    mouseOut() {
      this.drawImage();
    }
  
    handleClick() 
    {
      
      if(this.state === LeftSide)
      {
        this.X += drop;
        this.state = RightSide;
      }
      else
      {
        this.X -= drop;
        this.state = LeftSide;
      }
      this.drawImage();

      for (let i = 0; i < this.EntityList.length; i++) 
      {
        this.EntityList[i].move(this.state);
      }
      
      this.pManager.checkStateEntitys() ;
    }

    clearCanvas()
    {
      this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.heigth);
    }
  
    getOnBoat()
    {
      return this.onBoat;
    }

    pushEntity(entity) 
    {
      this.EntityList.push(entity);
      this.onBoat++;
    }

    deleteEntity(entity)
    {
      const index = this.EntityList.indexOf(entity);
      if(index != -1 )
      {
        this.EntityList.splice(index, 1);
      }
    }
};