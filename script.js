function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){     //adding event in the nav bar
    let tl = gsap.timeline()
    
    tl.to(".nav-bottom",{
        height:"21vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block" 
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        // duration: 0.3,
        stagger:{
            amount:0.5
        }
    })
}) 

nav.addEventListener("mouseleave",function(){     //adding event in the nav bar
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        transform:`translateY(25px)`,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration: 0.1
    })
    tl.to(".nav-bottom",{
        height:0,
        duration: 0.2
    })
}) 
}
navAnimation()

function page2Animation(){

var relem = document.querySelectorAll(".right-elem")
relem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{      //NodeList(5) [text, h2, text, img, text]
            opacity: 1,
            scale: 1
        }) 
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{      //NodeList(5) [text, h2, text, img, text]
            opacity: 0,
            scale: 0
        }) 
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3], {
            x:dets.x - elem.getBoundingClientRect().x-50 ,
            y:dets.y - elem.getBoundingClientRect().y-170
        })
    })
})
}
page2Animation()
