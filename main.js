var timeCounter = 0
var timerCheck = ""
var drawSketch = ""
var answerHolder = ""
var score = 0

function setup(){
    cnv = createCanvas(280,280)
    cnv.center() 
    background("white")

    cnv.mouseReleased(mouseSolto)
}

function mouseSolto(){
    classifier.classify(canvas, gotResult)
}

function draw(){
    strokeWeight(13)
    stroke(0)

    if(mouseIsPressed){
       line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function checkSketch(){
    
}

array1=["pen","paper","book","bottle","t-shirt"]
randomNo = Math.floor((Math.random() *array1.length)+1)
sketch = array1[randomNo]
document.getElementById("esboço-a-ser-desenhado").innerHTML = sketch

function gotResult(error, results){
    if(error){
         console.error(error)
         }
    else{
        console.log(results)
        var nome = results[0].label
        var precisao = (results[0].confidence * 100).toFixed(3) + "%"
        document.getElementById("resultadoNome").innerHTML = nome
        document.getElementById("resultadoPrecisão").innerHTML = precisao
        }
    }