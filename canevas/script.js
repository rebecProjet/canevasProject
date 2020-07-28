//radius and volume

let radius =document.getElementsByClassName("rad")[0]     
let volume=document.getElementById("volume")
let btnCalc= document.getElementById("calc")

btnCalc.addEventListener("click",function(e){
    e.preventDefault()
    console.log("radius"+radius.value)
    let v =(4*Math.PI*Math.pow(radius.value,3))/3
    volume.textContent= v
    volume.style.color="blue"
    console.log("volume:"+volume.textContent)

    //canvas
let myCanvas=document.querySelector("#myCanvas")
console.log(myCanvas)
let ctx=myCanvas.getContext("2d")
ctx.beginPath();
ctx.arc(250, 250, radius.value, 0*Math.PI, 2*Math.PI);
ctx.stroke();
validationGodel(myCanvas)

    //buttonClear
let buttonClear= document.getElementById("buttonClear")
buttonClear.addEventListener("click",function(e){
    const context = myCanvas.getContext('2d');
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
})

    //buttonAuto
let buttonAuto= document.getElementById("buttonAutomat")
buttonAuto.addEventListener("click",function(e){
    e.preventDefault()
    setTimeout(automate, 100)})

})

let r
function validationRadius(r){
    if (r >=0 && isNaN(r)==false){
    console.log("Yes, it is an number validated")
    }
    else{console.log("No, it is not an number validated")} 
}
validationRadius(radius.value)



function validationGodel(myCanvas){
    if((2*radius.value) >500){
        console.log("it is impossible")
    }}



   //canvas
let myCanvas=document.querySelector("#myCanvas")
console.log(myCanvas)
let ctx=myCanvas.getContext("2d")
ctx.beginPath();
ctx.arc(250, 250, radius.value, 0*Math.PI, 2*Math.PI);
ctx.stroke();
validationGodel(myCanvas)

//automat
function automate(){
let ctx=myCanvas.getContext("2d")
ctx.beginPath();
    for(let i=0 ;i<250;i++){
    ctx.arc(250, 250, i, 0, 2*Math.PI);
    ctx.stroke();
    }
}

let buttonAuto= document.getElementById("buttonAutomat")
buttonAuto.addEventListener("click",function(e){
    e.preventDefault()
    setTimeout(automate, 100)})

 //buttonClear
let buttonClear= document.getElementById("buttonClear")
buttonClear.addEventListener("click",function(e){
    const context = myCanvas.getContext('2d');
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
})

  
