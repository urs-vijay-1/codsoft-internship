/* calling button */

function makeCall() {
    // Specify the phone number
    const phoneNumber = "+919392035308"; // replace with desired phone number
    // Open the phone dialer with the specified number
    window.location.href = `tel:${phoneNumber}`;
}



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.toggle('active-dot', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', previousSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});



