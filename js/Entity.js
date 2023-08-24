const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Entity
{
  constructor(Ename, posX, posY, Ewidth, Eheigth, missionarie) 
  {
    this.isMissionarie = missionarie;
    this.X = posX;
    this.Y = posY;
    this.state = LeftSide;
    this.mouseClick = false;

    // canvas  property
    this.heigth = Eheigth;
    this.width = Ewidth;
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
      ? this.changeImage(URLmissionariesSelected) 
      :  this.changeImage(URLcannibalsSelected);
    } 
    else 
    {
      this.isMissionarie === true 
      ? this.changeImage(URLmissionariesDeselected) 
      : this.changeImage(URLcannibalsDeselected);
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

  getIsMissionarie()
  {
    return this.isMissionarie;
  }

  move(bool)
  {
    //bool  === true ? left -> right : rigth -> left 
    if(bool)
    {

    }
    else
    {

    }
  }
  loop()
  {
    this.mouseHover();
    this.mouseClick();
    this.draw();
  }
}