const URLmissionariesSelected = '../assets/padre1.png';
const URLmissionariesDeselected = '../assets/padre1.png';
const URLcannibalsSelected = '../assets/canibal2.png';
const URLcannibalsDeselected = '../assets/canibal1.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export class Entity{
    constructor(posX, posY, missionarie) {
        const canvas = document.createElement('canvas');
        canvas.id = name;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const canvasWidth = (width / 100) * windowWidth;
        const canvasHeight = (height / 100) * windowHeight;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.position = 'absolute';

        // Definir posicionamento em porcentagem da tela
        canvas.style.left = x + '%';
        canvas.style.top = y + '%';

        const ctx = canvas.getContext('2d');

        const imagem = new Image();
        imagem.src = imagemURL;

        imagem.onload = function() {
            ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
        };

        document.body.appendChild(canvas);
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