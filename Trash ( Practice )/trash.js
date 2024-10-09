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