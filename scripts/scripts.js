var img = document.querySelector('.imgShoes');
var circleImg = document.querySelector('.circle'); 

function hoverImg(){
    if (circleImg.classList != 'circleActive'){
        circleImg.classList.toggle('circleActive');       
    }
    
}