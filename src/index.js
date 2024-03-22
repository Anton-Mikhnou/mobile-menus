import './style.css';


const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        nav.classList.add('close');
    } else {
        nav.classList.remove('close');
        nav.classList.add('open');
    }
})

const imgs = document.querySelectorAll('.imgCard');
const arrow = document.querySelectorAll('.main__arrow');
const points = document.querySelectorAll('.pintSpan')
let imageIndex = 0;

function show(index) {
    imgs[imageIndex].classList.remove('active');
    points[imageIndex].classList.remove('activeSpan');
    imgs[index].classList.add('active');
    points[index].classList.add('activeSpan');
    imageIndex = index;
}

arrow.forEach((e) => {
    e.addEventListener('click', (event) =>{
        if(event.target.classList.contains('left')) {
            let index = imageIndex - 1;

            if(index < 0) {
                index = imgs.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('right')) {
            let index = imageIndex + 1;

            if(index >= imgs.length) {
                index = 0;
            }

            show(index);
        }
    })
})

points.forEach((span, index) => {
    span.addEventListener('click', () => show(index));
});

show(0)