let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = ` ${document.querySelector('.slider').clientHeight}px `;

function goPrev(){
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext(){
    currentSlide ++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0 ;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;  
}

setInterval(goNext, 4000);



let totalSlidesObra = document.querySelectorAll('.slider-item-obra').length;
let currentSlideObra = 0;

document.querySelector('.slider-width-obra').style.width = `calc(31vw * ${totalSlidesObra})`;
//document.querySelector('.slider-controls-obra').style.height = ` ${document.querySelector('.slider-obra').clientHeight}vh `;

window.onresize = function(event) {
    if (window.innerWidth > 1200) {
        document.querySelector('.slider-width-obra').style.width = `calc(30vw * ${totalSlidesObra})`;
      }
    if (window.innerWidth < 1200) {
      document.querySelector('.slider-width-obra').style.width = `calc(44vw * ${totalSlidesObra})`;
    }
    if (window.innerWidth < 768) {
        document.querySelector('.slider-width-obra').style.width = `calc(100vw * ${totalSlidesObra})`;
      }
  };

function goPrevObra(){
    currentSlideObra --;
    if(currentSlideObra < 0){
        currentSlideObra = totalSlidesObra -3;
    }
    updateMarginObra();
};

function goNextObra(){
    currentSlideObra ++;
    if(currentSlideObra > (totalSlidesObra-3)){
        currentSlideObra = 0 ;
    }
    updateMarginObra();
};

function updateMarginObra(){
    let sliderItemWidth = document.querySelector('.slider-item-obra').clientWidth;
    let newMargin = (currentSlideObra * sliderItemWidth);
    document.querySelector('.slider-width-obra').style.marginLeft = `-${newMargin}px`;  
};


let abrirMenu = document.getElementById('abrir');

abrirMenu.addEventListener('click', function(){
    document.getElementById('abrir').style.display = 'none'
    document.getElementById('fechar').style.display = 'block'
    document.getElementById('menu-mobile-width').style.width = '50%';
    document.getElementById('nav').style.display = 'block';
});


let fecharMenu = document.getElementById('fechar');

fecharMenu.addEventListener('click', function(){
    document.getElementById('abrir').style.display = 'block'
    document.getElementById('fechar').style.display = 'none'
    document.getElementById('menu-mobile-width').style.width = '0%';  
    document.getElementById('nav').style.display = 'none';  
});