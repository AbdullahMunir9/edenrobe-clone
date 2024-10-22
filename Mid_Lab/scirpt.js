document.getElementById("profile-image").addEventListener("mouseenter",()=>{
    document.getElementById("introduction-popup").style.display = 'block';
});
document.getElementById("profile-image").addEventListener("mouseleave",()=>{
    document.getElementById("introduction-popup").style.display = 'none';
});