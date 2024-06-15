const canvas = document.getElementById('canvas1')

//To draw in the canvas you need to create a 2D context object:
const ctx = canvas.getContext('2d')



const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600


//this creates an image tag in html
const playerImage = new Image()
const playerImageSrc = playerImage.src = './images/shadow_dog.png'

//avatar measures 
const spriteWidth = 573
const spriteHeight = 523

// let x = 0
// let y = 0


let frameX = 0
let frameY = 0

//Game framing
let gameFrame = 0
const staggerFrames = 12


function animate() {

    //first need to clear the previous pixels with this built in method:
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    
    //variable responsible for the frame magage
    let position = Math.floor(gameFrame / staggerFrames) % 6

    frameX = spriteWidth * position
    
    ctx.drawImage(playerImage, frameX , frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)   
    
    if (gameFrame % staggerFrames === 0) {
        if (frameX < 6) frameX++
        else frameX = 0
    }
    
    
    
    gameFrame++
    requestAnimationFrame(animate)
}

animate();









//ctx.fillRect(50, 50, 100, 100)
//draw Image final version can receive 9 arguments:
//image you want to display, 
// the next four arguments determine the rectangular area we want to cut off the source image
// The next four decides the position of the canvas the cuted off image is going to be displayed
// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)