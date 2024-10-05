var Navbar = document.getElementById("NavBar");
var Navlogo = document.getElementById("nav_logo");

var navUL = document.getElementById("Nav_ul");
var navListitems = navUL.getElementsByTagName("li");

var navUL2 = document.getElementById("Nav_ul2");
var navListitems2 = navUL2.getElementsByTagName("li");


Navbar.addEventListener("mouseenter",()=>{
    Navbar.classList.add("scrolled");
    Navlogo.src = 'Images/black_logo.png';

    for(let i = 0; i < navListitems.length; i++) {
        var nav_anchor = navListitems[i].getElementsByTagName("a");
        nav_anchor[0].style.color = 'black';
    }


    for(let j = 0; j < navListitems2.length; j++) {
        var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
        nav_anchor2[0].style.color = 'black';
    }
});

Navbar.addEventListener("mouseleave",()=>{
    if(window.scrollY<50){
        Navbar.classList.remove("scrolled");
        Navlogo.src = 'Images/white-logo.png';
            
        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'white';
        }


        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'white';
        }
    }
});


function whileScroll(){
    if(window.scrollY>50){
        Navbar.classList.add("scrolled");
        Navlogo.src = 'Images/black_logo.png';

        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'black';
        }
    
    
        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'black';
        }
    }
    else{
        Navbar.classList.remove("scrolled");
        Navlogo.src = 'Images/white-logo.png';
        
        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'white';
        }
    
    
        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'white';
        }
    }
}

window.addEventListener("scroll",whileScroll);

// carousel Animations 

const nextButton = document.querySelector('.next_button');
const prevButton = document.querySelector('.prev_button');
const carouselContainer = document.querySelectorAll('.carousel_container ul');
const carouselItems = document.querySelectorAll('.Men_Carousel li');

// Calculate the full width of each item (including margin)
const itemWidth = carouselItems[0].offsetWidth + parseFloat(getComputedStyle(carouselItems[0]).marginRight) * 11.5;
let currentIndex1 = 0;

nextButton.addEventListener('click', () => {
    // Only move if not at the last item
    if (currentIndex1 < carouselItems.length - 4) {
        currentIndex1++;
        carouselContainer[0].style.transform = `translateX(-${currentIndex1 * itemWidth}px)`;
        carouselContainer[0].style.transition = 'transform 0.5s ease';
    }
});

prevButton.addEventListener('click', () => {
    // Only move if not at the first item
    if (currentIndex1 > 0) {
        currentIndex1--;
        carouselContainer[0].style.transform = `translateX(-${currentIndex1 * itemWidth}px)`;
        carouselContainer[0].style.transition = 'transform 0.5s ease';
    }
});

let currentIndex2 = 0;

nextButton.addEventListener('click', () => {
    // Only move if not at the last item
    if (currentIndex2 < carouselItems.length - 4) {
        currentIndex2++;
        carouselContainer[1].style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
        carouselContainer[1].style.transition = 'transform 0.5s ease';
    }
});

prevButton.addEventListener('click', () => {
    // Only move if not at the first item
    if (currentIndex2 > 0) {
        currentIndex2--;
        carouselContainer[1].style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
        carouselContainer[1].style.transition = 'transform 0.5s ease';
    }
});

let currentIndex3 = 0;

nextButton.addEventListener('click', () => {
    // Only move if not at the last item
    if (currentIndex3 < carouselItems.length - 4) {
        currentIndex3++;
        carouselContainer[2].style.transform = `translateX(-${currentIndex3 * itemWidth}px)`;
        carouselContainer[2].style.transition = 'transform 0.5s ease';
    }
});

prevButton.addEventListener('click', () => {
    // Only move if not at the first item
    if (currentIndex3 > 0) {
        currentIndex3--;
        carouselContainer[2].style.transform = `translateX(-${currentIndex3 * itemWidth}px)`;
        carouselContainer[2].style.transition = 'transform 0.5s ease';
    }
});

let currentIndex4 = 0;

nextButton.addEventListener('click', () => {
    // Only move if not at the last item
    if (currentIndex4 < carouselItems.length - 4) {
        currentIndex4++;
        carouselContainer[3].style.transform = `translateX(-${currentIndex4 * itemWidth}px)`;
        carouselContainer[3].style.transition = 'transform 0.5s ease';
    }
});

prevButton.addEventListener('click', () => {
    // Only move if not at the first item
    if (currentIndex4 > 0) {
        currentIndex4--;
        carouselContainer[3].style.transform = `translateX(-${currentIndex4 * itemWidth}px)`;
        carouselContainer[3].style.transition = 'transform 0.5s ease';
    }
});


// Carousel Definer Animations

document.addEventListener('DOMContentLoaded', function() {

    var categorylinks = document.getElementsByClassName("links");
    var carousel_ul = document.getElementsByClassName("carousel");
    var anchor_description = document.querySelector(".carousel_definer_anchor");


    // This is default action , meaning the first link will be selected as soon as page loads
    function hide_carousels(){
        for(let i=1 ; i<carousel_ul.length ;i++){
            carousel_ul[i].style.display = "none";
        }
    }
    hide_carousels();

    categorylinks[0].classList.add("selected");

    // These events occur when we click on the links
    categorylinks[0].addEventListener("click",(event)=>{
        event.preventDefault();
        currentIndex1 = 0;
        categorylinks[0].classList.add("selected");
        carouselContainer[0].style.transform = `translateX(0px)`;


        for(let i=0 ; i<categorylinks.length ;i++){
            if(i==0){
                continue;
            }
            categorylinks[i].classList.remove("selected");
        }

        for(let i=0 ; i<carousel_ul.length ;i++){
            if(i==0){
                carousel_ul[i].style.display = "flex";
                continue;
            }
            carousel_ul[i].style.display = "none";
        }

        anchor_description.innerHTML = "Shop Men";
    });

    categorylinks[1].addEventListener("click",(event)=>{
        event.preventDefault();
        currentIndex2 = 0;
        categorylinks[1].classList.add("selected");
        carouselContainer[1].style.transform = `translateX(0px)`;


        for(let i=0 ; i<categorylinks.length ;i++){
            if(i==1){
                continue;
            }
            categorylinks[i].classList.remove("selected");
        }

        for(let i=0 ; i<carousel_ul.length ;i++){
            if(i==1){
                carousel_ul[i].style.display = "flex";
                continue;
            }
            carousel_ul[i].style.display = "none";
        }

        anchor_description.innerHTML = "Shop Women";
    });

    categorylinks[2].addEventListener("click",(event)=>{
        currentIndex3 = 0;
        event.preventDefault();
        categorylinks[2].classList.add("selected");
        carouselContainer[2].style.transform = `translateX(0px)`;

        for(let i=0 ; i<categorylinks.length ;i++){
            if(i==2){
                continue;
            }
            categorylinks[i].classList.remove("selected");
        }

        for(let i=0 ; i<carousel_ul.length ;i++){
            if(i==2){
                carousel_ul[i].style.display = "flex";
                continue;
            }
            carousel_ul[i].style.display = "none";
        }

        anchor_description.innerHTML = 'Shop Kids';
    });

    categorylinks[3].addEventListener("click",(event)=>{
        currentIndex4 = 0;
        event.preventDefault();
        categorylinks[3].classList.add("selected");
        carouselContainer[3].style.transform = `translateX(0px)`;

        for(let i=0 ; i<categorylinks.length ;i++){
            if(i==3){
                continue;
            }
            categorylinks[i].classList.remove("selected");
        }

        for(let i=0 ; i<carousel_ul.length ;i++){
            if(i==3){
                carousel_ul[i].style.display = "flex";
                continue;
            }
            carousel_ul[i].style.display = "none";
        }

        anchor_description.innerHTML = 'Shop Fragrances';
    });
    
});

// categorylinks.forEach(links => {
//     links.addEventListener("click",function(event){
//         event.preventDefault();
//     });
// });

// var men_carousel_ul = document.getElementsByClassName("Men_Carousel")[0];
// var Women_carousel_ul = document.getElementsByClassName("Women_Carousel")[0];
// var Kids_carousel_ul = document.getElementsByClassName("Kids_Carousel")[0];
// var Fragrances_carousel_ul = document.getElementsByClassName("Frangrances_Carousel")[0];

// var carousel_definer_ul = document.querySelector('.carousel_definer ul');

// var carousel_uls = document.querySelectorAll("carousel_container ul");
// for(let i=1 ; i<carousel_uls.length ; i++){
//     carousel_uls[i].style.display = 'none';
// }



// const handleSlideButtons = () => {
//     slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
//     slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
// }




// JavaScript for carousel functionality
// const carouselContainer = document.querySelector(".carousel_container");
// const carouselUl = carouselContainer.querySelector("ul");
// const prevButton = carouselContainer.querySelector(".prev_button");
// const nextButton = carouselContainer.querySelector(".next_button");
// const totalImages = carouselUl.children.length; // Get total number of images
// let currentIndex = 0; // Track the current image index

// // Set the width of the carousel container to only show one image at a time
// const imageWidth = carouselUl.children[0].offsetWidth; // Width of each image
// carouselUl.style.width = `${imageWidth * totalImages}px`; // Set the width of the entire ul to fit all images

// // Function to update carousel position
// function updateCarouselPosition() {
//     const newTranslateX = -currentIndex * imageWidth; // Calculate how much to translate
//     carouselUl.style.transform = `translateX(${newTranslateX}px)`; // Move the ul element
// }

// // Next button functionality
// nextButton.addEventListener("click", () => {
//     if (currentIndex < totalImages - 1) { // Make sure it doesn't go beyond the last image
//         currentIndex++;
//         updateCarouselPosition();
//     }
// });

// // Prev button functionality
// prevButton.addEventListener("click", () => {
//     if (currentIndex > 0) { // Make sure it doesn't go before the first image
//         currentIndex--;
//         updateCarouselPosition();
//     }
// });

// // Optional: Add smooth transition when moving
// carouselUl.style.transition = "transform 0.5s ease";


// Carousel button hover animation

// var carousel_cont = document.getElementsByClassName("carousel_container")[0];
// carousel_cont.addEventListener("mouseenter",()=>{
//     carousel_cont.getElementsByClassName("prev_button")[0].style.display = "block";
//     carousel_cont.getElementsByClassName("next_button")[0].style.display = "block";
// });
// carousel_cont.addEventListener("mouseleave",()=>{
//     carousel_cont.getElementsByClassName("next_button")[0].style.display = "none";
//     carousel_cont.getElementsByClassName("prev_button")[0].style.display = "none";
// });



//  Drop Down Example JS

// var dropdown = document.getElementsByClassName("showDropDown");
// var hoverdropdown = document.getElementsByClassName("NavdropDown");

// First Drop Down


// dropdown[0].addEventListener("mouseenter",()=>{
//     document.getElementsByClassName("NavdropDown")[0].style.display = "block";
// })
// dropdown[0].addEventListener("mouseleave",()=>{
//     document.getElementsByClassName("NavdropDown")[0].style.display = "none";
// })

// dropdown[0].addEventListener("mouseleave", ()=>{
//     if (!document.getElementsByClassName("NavdropDown")[0].matches(':hover')) {
//         document.getElementsByClassName("NavdropDown")[0].style.display = "none";
//     }
// });
// document.getElementsByClassName("NavdropDown")[0].addEventListener("mouseleave", ()=>{
//     if (!dropdown[0].matches(':hover')) {
//         document.getElementsByClassName("NavdropDown")[0].style.display = "none";
//     }
// });



// Second Drop Down

// dropdown[1].addEventListener("mouseenter",()=>{
//     document.getElementsByClassName("NavdropDown")[1].style.display = "block";
// })
// dropdown[1].addEventListener("mouseleave",()=>{
//     document.getElementsByClassName("NavdropDown")[1].style.display = "none";
// })

// Third Drop Down

// dropdown[2].addEventListener("mouseenter",()=>{
//     document.getElementsByClassName("NavdropDown")[2].style.display = "block";
// })
// dropdown[2].addEventListener("mouseleave",()=>{
//     document.getElementsByClassName("NavdropDown")[2].style.display = "none";
// })

// Fourth Drop Down

// dropdown[3].addEventListener("mouseenter",()=>{
//     document.getElementsByClassName("NavdropDown")[3].style.display = "block";
// })
// dropdown[3].addEventListener("mouseleave",()=>{
//     document.getElementsByClassName("NavdropDown")[3].style.display = "none";
// })

// Fifth Drop Down

// dropdown[4].addEventListener("mouseenter",()=>{
//     document.getElementsByClassName("NavdropDown")[4].style.display = "block";
// })
// dropdown[4].addEventListener("mouseleave",()=>{
//     document.getElementsByClassName("NavdropDown")[4].style.display = "none";
// })