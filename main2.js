
var slideimg = Array.from(document.querySelectorAll('.photoslider img'));
var slidecount = slideimg.length;
var currentSlide = 1;
var nextbtn = document.querySelector('.controler .next')
var prevbtn = document.getElementById('prev');
nextbtn.onclick = nextslide; 
prevbtn.onclick = prvslide; 
var contcount = document.createElement("ul");
contcount.setAttribute("id","count");
for(var i=1;i<=slidecount;i++){
var dataind = document.createElement("li");
dataind.setAttribute("data-index",i);
dataind.appendChild(document.createTextNode(i));
contcount.appendChild(dataind);
}
document.getElementById("indicators").appendChild(contcount);
var newcount=document.getElementById("count");
var paginationsBullets=Array.from(document.querySelectorAll("#count li"));
for(var i=0;i<paginationsBullets.length;i++){
    paginationsBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        Checker();

    }
}
Checker();
function nextslide(){
    if(nextbtn.classList.contains("disabled")){

    }
    else{
    currentSlide++;
    Checker();
    }
}
function prvslide(){
    if(prevbtn.classList.contains("disabled")){
        
    }
    else{
currentSlide--;
Checker();
}}
function Checker(){
    /*set active class on pagination */
    removeactive();

    slideimg[currentSlide-1].classList.add("active");
    contcount.children[currentSlide-1].classList.add('active');


if(currentSlide==1){
    prevbtn.classList.add("disabled")
}
else{
    prevbtn.classList.remove("disabled")

}
if(currentSlide==slidecount){
    nextbtn.classList.add("disabled")
}
else{
    nextbtn.classList.remove("disabled")

}
    
}
function removeactive(){
slideimg.forEach(function(img){
    img.classList.remove("active");
});
paginationsBullets.forEach(function (Bullets) {
    Bullets.classList.remove("active");
});

}
