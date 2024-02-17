let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

var typed = new Typed(".multiple-text", {
    strings: ["Front End Developer", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll > 50 && currentScroll > previousScroll) {
            $(".header").addClass("header-scrolled");
            $(".logo").addClass("logo-scrolled");
            $(".navbar a").addClass("scrolled");
        } else {
            $(".header").removeClass("header-scrolled");
            $(".logo").removeClass("logo-scrolled");
            $(".navbar a").removeClass("scrolled");
        }
        previousScroll = currentScroll;
    });
});
