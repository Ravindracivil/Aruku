
// var slider = document.querySelector('.slider')
// var image = ['bc.jpg','k.jpg','cr.jpg','ap.jpg','ag.jpg'];
// var  i = 0;

// function prew(){
//     if(i <= 0)i = image.length;
//     i--;
//     return setImg();
// }
// function setImg() {
//     return slider.setAttribute('src','image/'+image[i]);
// }

// let scrollContainer = document.querySelector(".slider");
// let prewimage = document.getElementById("prewimage");
// let nextimage = document.getElementById("nextimage");

// scrollContainer.addEventListener("wheel",(evt) =>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });
// prewimage.addEventListener("click",() =>{
//     scrollContainer.scrollLeft += 900;
// });

// nextimageimage.addEventListener("click",() =>{
//     scrollContainer.scrollLeft -= 900;
// });



let images = ['T.jpg','k.jpg','tg.jpg','bc.jpg','ap.jpg','ag.jpg','cr.jpg','darjeeling.jpg','madagada.jpg','m.jpg'];

let img = document.getElementById('img')
let imgindex = 4;
let leftarrow = document.querySelector('.left')
let rightarrow = document.querySelector('.right')

leftarrow.onclick = function(){
    imgindex -=1
    if(imgindex==0){
        leftarrow.style.display = 'none'
    }else{
        leftarrow.style.display = 'block'
    }
    img.setAttribute('src','images/'+images[imgindex])
    if(imgindex<images.length-1){
        rightarrow.style.display = 'block'
    }
}
rightarrow.onclick = function(){
    imgindex +=1
    if(imgindex==images.length-1){
        rightarrow.style.display = 'none'
    }else{
        rightarrow.style.display = 'block'
    }
    img.setAttribute('src','images/'+images[imgindex])
    if(imgindex>1){
        leftarrow.style.display = 'block'
    }
}


function First(){
    document.getElementById("slideimage").src="ag.jpg";
}
function Second(){
    document.getElementById("slideimage").src="ap.jpg";
}function Third(){
    document.getElementById("slideimage").src="k.jpg";
}
setInterval(First,2000);
setInterval(Second,4000);
setInterval(Third,6000);