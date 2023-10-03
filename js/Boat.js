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
      this.isHover = false;
      this.isSelected = false;
      this.state = LeftSide;
      this.onBoat = 0;
      this.state = LeftSide;
      this.X = posX;
      this.Y = posY;
      this.imageUrl = URLimage;

      // canvas  property
      this.heigth = Bheight;
      this.width = Bwidth;

      this.canvas = document.getElementById(Ename);
      this.context = this.canvas.getContext('2d');
      this.canvas.addEventListener('mouseover', this.mouseOver.bind(this));
      this.canvas.addEventListener('mouseout', this.mouseOut.bind(this));
      this.canvas.addEventListener('click', this.handleClick.bind(this));
    }

    draw(ctx) 
    {
      ctx.drawImage(this.imagem, this.posX, this.posY, this.Ewidth, this.Ewidth);
    }
  
    drawImage() {
      const img = new Image();
      img.src = this.imageUrl;
      
      img.onload = () => {
        this.context.clearRect(0, 0, this.Ewidth, this.Eheight);
        this.context.drawImage(img, this.X, this.Y, this.Ewidth, this.Eheight);
      };
    }
  
    mouseOver() 
    {  
      const img = new Image();
      img.src = URLboatSelected;
  
      img.onload = () => {
        this.context.clearRect(0, 0, this.Ewidth, this.Eheight);
        this.context.drawImage(img, this.X, this.Y, this.Ewidth, this.Eheight);
      };
    }
  
    mouseOut() {
      this.drawImage();
    }
  
    handleClick() 
    {
      
      if(this.state === LeftSide)
      {
        this.canvas.style.left = (this.X + drop) + '%'
        this.X += drop;
        this.state = RightSide;
      }
      else
      {
        this.canvas.style.left = (this.X - drop) + '%';
        this.X -= drop;
        this.state = LeftSide;
      }
      this.drawImage();

      this.pManager.checkStateEntitys() ;
    }

    clearCanvas()
    {
      this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
  
    getOnBoat()
    {
      return this.onBoat;
    }

    pushEntity(Entity) 
    {
      Entity.move( (this.X + (this.onBoat * (canvasSpacing + canvasWidth)),( this.Y + canvasHeight - canvasSpacing))); 
      this.onBoat++;
    }
}