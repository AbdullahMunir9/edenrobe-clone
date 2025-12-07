var Navbar = document.getElementById("NavBar");
var Navlogo = document.getElementsByClassName("nav_logo");

var navUL = document.getElementById("Nav_ul");
var navListitems = navUL.getElementsByTagName("li");

var navUL2 = document.getElementById("Nav_ul2");
var navListitems2 = navUL2.getElementsByTagName("li");

var items_nav_cont3 = document.getElementsByTagName("i");

Navbar.addEventListener("mouseenter",()=>{
    Navbar.classList.add("scrolled");

    for(let i=0 ;i<Navlogo.length; i++){
        Navlogo[i].src = 'Images/black_logo.png';
    }
    
    for(let i = 0; i < navListitems.length; i++) {
        var nav_anchor = navListitems[i].getElementsByTagName("a");
        nav_anchor[0].style.color = 'black';
    }

    for(let i=0; i<items_nav_cont3.length ; i++){
        items_nav_cont3[i].style.color = 'black';
    }

    for(let j = 0; j < navListitems2.length; j++) {
        var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
        nav_anchor2[0].style.color = 'black';
    }

    document.getElementsByClassName("loc-anchor")[0].style.color = 'black';
});

Navbar.addEventListener("mouseleave",()=>{
    if(window.scrollY<50){
        Navbar.classList.remove("scrolled");

        for(let i=0 ;i<Navlogo.length; i++){
            Navlogo[i].src = 'Images/white-logo.png';
        }
            
        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'white';
        }

        for(let i=0; i<items_nav_cont3.length ; i++){
            items_nav_cont3[i].style.color = 'white';
        }

        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'white';
        }

        document.getElementsByClassName("loc-anchor")[0].style.color = 'white';
    }
});


function whileScroll(){
    if(window.scrollY>50){
        Navbar.classList.add("scrolled");

        for(let i=0 ;i<Navlogo.length; i++){
            Navlogo[i].src = 'Images/black_logo.png';
        }

        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'black';
        }
    
        for(let i=0; i<items_nav_cont3.length ; i++){
            items_nav_cont3[i].style.color = 'black';
        }
    
        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'black';
        }

        document.getElementsByClassName("loc-anchor")[0].style.color = 'black';
    }
    else{
        Navbar.classList.remove("scrolled");
        
        for(let i=0 ;i<Navlogo.length; i++){
            Navlogo[i].src = 'Images/white-logo.png';
        }
        
        for(let i = 0; i < navListitems.length; i++) {
            var nav_anchor = navListitems[i].getElementsByTagName("a");
            nav_anchor[0].style.color = 'white';
        }
    
        for(let i=0; i<items_nav_cont3.length ; i++){
            items_nav_cont3[i].style.color = 'white';
        }
    
        for(let j = 0; j < navListitems2.length; j++) {
            var nav_anchor2 = navListitems2[j].getElementsByTagName("a");
            nav_anchor2[0].style.color = 'white';
        }

        document.getElementsByClassName("loc-anchor")[0].style.color = 'white';
    }
}

Auto_scroll_button = document.querySelector(".Auto_scroll_button");
function whileScroll2(){
    if (window.scrollY > 800) {
        Auto_scroll_button.style.opacity = '1';
        Auto_scroll_button.style.visibility = 'visible';
        Auto_scroll_button.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    } else {
        Auto_scroll_button.style.opacity = '0';
        Auto_scroll_button.style.visibility = 'hidden';
    }
}
Auto_scroll_button.addEventListener("click",()=>{
    window.scrollTo({
        top : '0',
        behaviour: 'smooth'
    });
})

window.addEventListener("scroll", () => {
    whileScroll();
    whileScroll2();
});


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

// Responsive IMG slider
var slider_img = document.querySelectorAll(".slideshow_img_container img");
window.addEventListener("resize",()=>{
    if(window.innerWidth <= 400){
        slider_img[0].src = 'Images/resp-slider-img1.png';
        slider_img[1].src = 'Images/resp-slider-img2.png';
        slider_img[2].src = 'Images/resp-slider-img3.png';
        slider_img[3].src = 'Images/resp-slider-img4.png';
        slider_img[4].src = 'Images/resp-slider-img5.png';
        slider_img[5].src = 'Images/resp-slider-img6.png';
    }
    else{
        slider_img[0].src = 'Images/img20.png';
        slider_img[1].src = 'Images/img21.png';
        slider_img[2].src = 'Images/img1.png';
        slider_img[3].src = 'Images/img4.png';
        slider_img[4].src = 'Images/img5.png';
        slider_img[5].src = 'Images/img6.png';
    }
});

