var show = document.querySelector(".menu")
var btn = document.querySelector("#btn")
var check = 0 ;

btn.addEventListener("click",function(){
    if(check == 0 ){
        show.style.display="block"
        check = 1
    }
    else{
        show.style.display="none"
        check = 0
    }

})

// ========================== GSAP start =======================//

var tl = gsap.timeline()

tl.from(".nav ,.nav #logo , .nav .landscape li , .nav #btn",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})

tl.from(".main-page .content , .main-page h1 , .main-page h3 , .main-page p ,#about , .course-img , .sign-page",{
    x:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from(".main-page img , #about .right, .teachers , .course-p, .log , .log-in",{
    x:80,
    opacity:0,
    duration:0.8,
})



