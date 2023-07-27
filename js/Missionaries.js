const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';

export class Missionaries {
    constructor(posX, posY, state) {
      this.posX = posX;
      this.posY = posY;
      this.state = state;
    }
  
    desenhar(ctx) {
      ctx.fillStyle = 'blue';   
      ctx.fillRect(this.posX, this.posY, 20, 20); 
    }
  
    obterPosicao() {
      return {
        x: this.posX,
        y: this.posY
      };
    }
  
    obterstate() {
      return this.state;
    }
  }