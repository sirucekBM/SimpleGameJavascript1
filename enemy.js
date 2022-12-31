class Enemy {
    constructor(dimensionX,dimensionY, positionX,positionY,name,color) {

      this.container = document.getElementById("container");
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = positionX;
      this.positionY = positionY;
      this.name=name;
      this.color=color;
      this.energie = 3;

      var newDiv = document.createElement("div");
      newDiv.style.height = this.dimensionY +'px';
      newDiv.style.width = this.dimensionX +'px';
      newDiv.style.background = this.color;
      newDiv.style.position = "absolute";
      newDiv.style.left = this.positionX+'px';
      newDiv.style.top = this.positionY+'px';
      newDiv.style.borderRadius = '0em';
      newDiv.setAttribute("name",this.name);
      newDiv.energie = this.energie;
      this.EnemyX = newDiv;
      this.container.appendChild(this.EnemyX);

    }				

            PosunXY(okolik){

                let kam ="D"
                if(kam=="L")this.positionX = this.positionX - okolik;
                if(kam=="R")this.positionX = this.positionX + okolik;
                if(kam=="D")this.positionY= this.positionY + okolik;

                if(this.positionX + this.dimensionX  > this.container.clientWidth)this.positionX = this.container.clientWidth - this.dimensionX -1
                if(this.positionX  < 2 )this.positionX = 2;

                if(this.positionY + this.dimensionY  > this.container.clientHeight)this.positionY = this.container.clientHeight - this.dimensionY -1
                this.EnemyX.style.top = this.positionY + 'px';

            }
 
  }