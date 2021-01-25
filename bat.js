class Bat {
    constructor() {
        this.batData;
        this.batImg;
        this.animationBat = [];
        this.x = 1090;
        this.y = 100;
        this.width = 60;
        this.height = 60;

    }
    preload() {
        this.batData = loadJSON('images/bat/bat.JSON')
        this.batImg = loadImage('images/bat/Bat_Walk.png');
     }
     setup() {
        let frames = this.batData.frames;
        for (let i = 0; i < frames.length; i++){
            let pos = frames[i].position;
            let img = this.batImg.get(pos.x, pos.y, pos.w, pos.h);
            this.animationBat.push(img);
        }
    }
    draw() {
        image(this.animationBat[frameCount % this.animationBat.length], this.x, this.y, this.width, this.height);
        if (keyIsDown(RIGHT_ARROW)) { 
            if (this.y < 510){
                this.y = this.y + Math.random()*85;
                if(this.x < 20) {
                    this.x = 1090;
                    this.y = Math.random()*551;
                }
            }
            this.x = this.x - Math.random()*100;
            if(this.x < 20) {
                this.x = 1090;
                this.y = Math.random()*551;
            }
        } else {
            if (this.y < 510){
                this.y = this.y + Math.random()*45;
                if(this.x < 20) {
                    this.x = 1090;
                    this.y = Math.random()*551;
                }
            }
            this.x = this.x - Math.random()*50;
             if(this.x < 20) {
                this.x = 1090;
                this.y = Math.random()*551;
            }
        } 
        
        
    }

}