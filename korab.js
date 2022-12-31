class Korab {
    constructor(dimensionX,dimensionY, positionX,positionY,name,color) {

      this.container = document.getElementById("container");
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = positionX;
      this.positionY = positionY;
      this.name=name;
      this.color=color;
      this.energie = 10;
      this.seznamStrel = [];

      var newDiv = document.createElement("div");
      newDiv.style.height = this.dimensionY +'px';
      newDiv.style.width = this.dimensionX +'px';
      newDiv.style.background = this.color;
      newDiv.style.position = "absolute";
      newDiv.style.left = this.positionX+'px';
      newDiv.style.top = this.positionY+'px';
      newDiv.style.borderRadius = '2em';
      newDiv.setAttribute("name",this.name);
      newDiv.energie = this.energie;
      this.KorabX = newDiv;
      this.container.appendChild(this.KorabX);

    }				
            DejToTam(){
                this.container.appendChild(this.KorabX);
            }

            PosunXY(kam, okolik){
                
                console.log('pozice korábu: ' +this.positionY);
                console.log('boxWraper: ' + this.container.clientWidth);
                console.log('boxWraper offset: ' + this.container.offsetWidth);
                console.log('objekt left: ' + this.positionX);

                if(kam=="L")this.positionX = this.positionX - okolik;
                if(kam=="R")this.positionX = this.positionX + okolik;

                if(this.positionX + this.dimensionX  > this.container.clientWidth)this.positionX = this.container.clientWidth - this.dimensionX -1
                if(this.positionX  < 2 )this.positionX = 2;
                this.KorabX.style.left = this.positionX+'px';

            }

            vystrel(){
                let pX = this.positionX+ (this.dimensionX/2);
                let pY = this.positionY-1
                var strela = new Strela(2,10,pX,pY,'s','red');
                this.seznamStrel.push(strela);
            }

            pohybStrely(){
                for ( var s=0; s < this.seznamStrel.length; s++ ) {
                    this.seznamStrel[s].posunY(10);
                    if(this.seznamStrel[s].positionY < 5){
                        this.seznamStrel[s].strelaX.remove();
                        this.seznamStrel.splice(s, 1);

                    }
                }
            }



            getSeznamStrel(){
                return this.seznamStrel;
            }

            getStav() {
              console.log(`Obj stav: ${this.newDiv}`);
            };
            
  }