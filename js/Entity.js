const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Entity{

    constructor(name, width, height, posX, posY, missionarie) {

        this.X = posX;
        this.Y = posY;
        this.hover = false;
        this.state = LeftSide;

    }
    
      draw(ctx) {
        ctx.drawImage(this.imagem, this.posX, this.posY, this.largura, this.altura);
      }
    
      verificarClique(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        if (
          mouseX >= this.posX &&
          mouseX <= this.posX + this.largura &&
          mouseY >= this.posY &&
          mouseY <= this.posY + this.altura
        ) {
          this.clicado = true;
        } else {
          this.clicado = false;
        }
      }
    
      verificarMouseSobre(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
    
        if (
          mouseX >= this.posX &&
          mouseX <= this.posX + this.largura &&
          mouseY >= this.posY &&
          mouseY <= this.posY + this.altura
        ) {
          this.mouseSobre = true;
        } else {
          this.mouseSobre = false;
        }
      }
    }