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

window.addEventListener("scroll",whileScroll);
