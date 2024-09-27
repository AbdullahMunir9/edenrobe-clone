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