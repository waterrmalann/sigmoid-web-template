"use strict";

const e_counterElements = document.querySelectorAll('[data-counter]');

const observer = new IntersectionObserver(handleIntersection);

e_counterElements.forEach(obs => {
  observer.observe(obs);
  //obs.style.display = "hidden";
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            let _target = entry.target;
            startCounter(_target);
            observer.unobserve(_target); // free the observation once we start counter
        }
    });
}

function startCounter(element) {
    let countTill = parseInt(element.dataset.counter);
    let currentCount = parseInt(element.innerText) || 0;
    if (currentCount < countTill) {
        setTimeout(
            () => {startCounter(element)}, 0.005
        );
        currentCount++;
        element.innerText = `${currentCount}`;
    } else {
        element.innerText = `${currentCount}+`;
    }
}

/* TESTIMONIAL SLIDER */

const e_testimonialSliderLeft = document.getElementById('testimonialSliderLeft');
const e_testimonialSliderRight = document.getElementById('testimonialSliderRight');

const e_testimonialSliders = document.getElementsByClassName('testimonial-slider-slide');
for (let i = 0; i < e_testimonialSliders.length; i++) {
    e_testimonialSliders[i].style.display = "none";
}
e_testimonialSliders[0].style.display = "block";

var currentSlide = 0;
function setTestimonialSlider(n) {
    if (n >= e_testimonialSliders.length) {
        n = 0;
    } else if (n < 0) {
        n = e_testimonialSliders.length - 1;
    }

    currentSlide = n;
    for (let i = 0; i < e_testimonialSliders.length; i++) {
        e_testimonialSliders[i].style.display = "none";
    }
    e_testimonialSliders[currentSlide].style.display = "block";
}

e_testimonialSliderRight.addEventListener('click', () => {
    setTestimonialSlider(++currentSlide);
});
e_testimonialSliderLeft.addEventListener('click', () => {
    setTestimonialSlider(--currentSlide);
});

/* SLIDER */

var slider = tns({
    container: '.client-slider',
    items: 8,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 4
      },
      700: {
        gutter: 30
      },
      900: {
        items: 6
      }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButton: false
});