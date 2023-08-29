class InteractiveCanvas {
    constructor(canvasId, initialX, initialY, imageUrl) {
      this.canvas = document.getElementById(canvasId);
      this.context = this.canvas.getContext('2d');
      this.x = initialX;
      this.y = initialY;
      this.imageUrl = imageUrl;
  
      this.canvas.addEventListener('mouseover', this.mouseOver.bind(this));
      this.canvas.addEventListener('mouseout', this.mouseOut.bind(this));
      this.canvas.addEventListener('click', this.handleClick.bind(this));
  
      this.drawImage();
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
      const hoverImageUrl = './assets/padre1.png'; // Substitua pela URL da imagem de hover
      const img = new Image();
      img.src = hoverImageUrl;
      
      img.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(img, this.x, this.y, img.width, img.height);
      };
    }
  
    mouseOut() {
      this.drawImage();
    }
  
    handleClick() {
      this.x += this.canvas.width * 0.5; // Mover para direita 50%
      this.drawImage();
    }
  }
  
  // Inicializar o objeto InteractiveCanvas
  const interactiveCanvas = new InteractiveCanvas('myCanvas', 10, 10, './assets/padre2.png');
  