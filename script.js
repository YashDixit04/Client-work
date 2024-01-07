AOS.init();
//script for scroll to top
$("#top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
//script for light box
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


// ==================== SLIDER ====================
const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const imgFour = document.getElementById("imgFour");

const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");

const animateSwiping = [
    { transform: "translateX(100%)" },
    { transform: "translateX(0%)" },
];
  
const animateTiming = {
    duration: 350,
    iterations: 1
};

const changeImg = (img, btn) => {
    if (imgOne.classList.value == "img img-active") {
        imgOne.classList.remove("img-active");
        btnOne.classList.remove("active");
    };
    if (imgTwo.classList.value == "img img-active") {
        imgTwo.classList.remove("img-active");
        btnTwo.classList.remove("active");
    };
    if (imgThree.classList.value == "img img-active") {
        imgThree.classList.remove("img-active");
        btnThree.classList.remove("active");
    };
    if (imgFour.classList.value == "img img-active") {
        imgFour.classList.remove("img-active");
        btnFour.classList.remove("active");
    };

    img.classList.add("img-active");
    img.animate(animateSwiping, animateTiming);
    btn.classList.add("active");
}

btnOne.addEventListener("click", () => {
    changeImg(imgOne, btnOne);
})
btnTwo.addEventListener("click", () => {
    changeImg(imgTwo, btnTwo);
})
btnThree.addEventListener("click", () => {
    changeImg(imgThree, btnThree);
})
btnFour.addEventListener("click", () => {
    changeImg(imgFour, btnFour);
})