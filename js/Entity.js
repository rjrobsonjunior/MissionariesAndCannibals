const URLmissionariesSelected = '../assets/padre2.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Entity
{
  constructor(Ename, posX, posY, Ewidth, Eheigth, missionarie, URLimage) 
  {
    this.isMissionarie = missionarie;
    this.X = posX;
    this.Y = posY;
    this.state = LeftSide;
    this.mouseClick = false;
    this.imageUrl = URLimage;

    // canvas  property
    this.heigth = Eheigth;
    this.width = Ewidth;
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
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, this.x, this.y, img.width, img.height);
    };
  }

  mouseOver() {
    const hoverImageUrl = this.isMissionarie === true 
    ? URLmissionariesSelected 
    : URLcannibalsSelected;

    const img = new Image();
    img.src = hoverImageUrl;
    
    img.onload = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, this.posX, this.posY, this.Ewidth, this.Ewidth);
    };
  }

  mouseOut() {
    this.drawImage();
  }

  handleClick() {
    this.posXx += this.canvas.width * 0.5; // Mover para direita 50%
    this.drawImage();
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