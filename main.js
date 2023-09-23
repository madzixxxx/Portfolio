class MagicParticle{
  constructir(x,y){
    this.x = x;
    this.y = y;
    this.size = random(10,30);
    this.baseColor = color (random(["#f1862f", "#b617e6"])
                            ),
    update(){
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= 10;
      
  }
}
