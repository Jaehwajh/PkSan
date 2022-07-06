function reveal(){
    let reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop= reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active")
        }
    }

    
}

window.addEventListener("scroll", reveal);



/* Carousel*/

const slides = document.querySelectorAll('.slide')


/*Next button*/
const nextSlide = document.querySelector('#btn-next');

let curSlide = 0;

let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function(){
    if(curSlide === maxSlide){
        curSlide = 0;
    }else {
        curSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    })
})


/*Previous Button */

const prevSlide = document.querySelector('#btn-prev')

prevSlide.addEventListener('click', function (){
    if (curSlide === 0){
        curSlide = maxSlide;
    }else {
        curSlide--;
    }

    slides.forEach((slide,index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    })
})