console.log('Hello from index.js')


const canvas = document.getElementById('canvas1')

//To draw in the canvas you need to create a 2D context object:
const ctx = canvas.getContext('2d')



const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600


//this creates an image tag in html
const playerImage = new Image()
const playerImageSrc = playerImage.src = './images/shadow_dog.png'



function animate() {

    //first need to clear the previous pixels with this built in method:
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillRect(50, 50, 100, 100)
    //
    ctx.drawImage(playerImage, 0, 0)
    requestAnimationFrame(animate)
}

animate()
