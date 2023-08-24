const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Boat 
{
    constructor(Ename, posX, posY, Bwidth, Bheight)
    {
        this.isHover = false;
        this.isSelected = false;
        this.Left = LeftSide;
        this.onBoat = 0;
        this.state = LeftSide;
        this.x = posX;
        this.y = posY;

        this.entityList = [];

        // canvas  property
        this.heigth = Bheight;
        this.width = Bwidth;
        this.canvasElement = document.getElementById(Ename);
        this.context = this.canvasElement.getContext('2d');

    }

    draw(ctx) 
    {
      ctx.drawImage(this.imagem, this.posX, this.posY, this.Ewidth, this.Ewidth);
    }
  
    mouseClick(event) 
    {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      if ( mouseX >= this.posX && mouseX <= this.posX + this.width && mouseY >= this.posY && mouseY <= this.posY + this.heigth) 
      {
        this.click = true;
      }
      else {
        this.click = false;
      }
    }
  
    mouseHover(event) 
    {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      if (  mouseX >= this.posX && mouseX <= this.posX + this.width && mouseY >= this.posY && mouseY <= this.posY + this.heigth) 
      {
        this.isMissionarie === true 
        ? this.changeImage(URLboatSelected) 
        :  this.changeImage(URLboatSelected);
      } 
      else 
      {
        this.isMissionarie === true 
        ? this.changeImage(URLboatDeselected) 
        : this.changeImage(URLboatDeselected);
      }
    }
  
    clearCanvas()
    {
      this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
  
    changeImage(imageUrl) 
    {
      const image = new Image();
      image.src = imageUrl;
  
      image.onload = () => {
          this.clearCanvas();
          this.context.drawImage(image, 0, 0);
      };
    }

    setPlusBoat()
    {
        this.onBoat ++;
    }

    setLessBoat()
    {
        this.onBoat --;
    }
    
    getOnBoat()
    {
        return this.onBoat;
    }

    move()
    {

    }

    loop()
    {

    }
}