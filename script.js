function foo(){
    setTimeout(()=>{document.getElementById("demo").innerHTML=10},1000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=9},2000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=8},3000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=7},4000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=6},5000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=5},6000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=4},7000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=3},8000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=2},9000)
    setTimeout(()=>{document.getElementById("demo").innerHTML=1},10000)
    setTimeout(()=>{document.getElementById("demo").innerHTML="Happy Independence day"},11000)

}

foo()