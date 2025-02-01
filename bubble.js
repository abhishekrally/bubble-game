var timern = 60;
var score=0;  
var rn1=0;  
function bubble(){
    var clutter = "";

for(var i = 1;i<=119;i++){
     var rn = Math.floor(Math.random()*10)
    clutter += ` <div id="bubble">${rn}</div>`;//+= means purani wale and new value me add hogi and woh savev rhe gi
}
document.querySelector("#bottom").innerHTML=clutter;
}
function runtime(){
    var timeint=setInterval(function (){
        if(timern > 0){ 
        timern--;
    document.querySelector("#timer").textContent=timern;
    // text ko update krne  k liye htm me yeh tag use hota hai 
    } else{
        clearInterval(timeint);
        document.querySelector("#bottom").innerHTML=` <h2>game over</h2>`;
        // yeh  interval chalta rehta hai agar isse stop na ke toh memory khaiye ga 
    }
    },1000);
}
function getNewHit(){
     rn1 = Math.floor(Math.random()*10)
    document.querySelector("#hitint").textContent=rn1;

}
function incscore(){
score += 10;
document.querySelector("#scoreint").textContent=score;
}
document.querySelector("#bottom").addEventListener("click",function(dets){
    var click=Number(dets.target.textContent);
    if(click==rn1){
        incscore();
        getNewHit();
        bubble(); 
    }
})  
getNewHit();
bubble();
runtime();