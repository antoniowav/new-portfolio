
const timeline = gsap.timeline();
timeline.from('.line p', 2,{
    delay: 1,
    ease: 'power4.out',
    y: 350,
    skewY: 15,
    stagger: {
        amount: .8
    }
});
timeline.to('.body',1.5,{
    backgroundColor: '#c9c9c9'
})
timeline.to('.line p a', 1,{
    color: 'black'
},"-=1.5")
timeline.from('.logo, .ul li',1,{
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .4
    }
});

timeline.from('.social-icons, h1 a',1,{
    opacity: 0,
    y: "100%",
    stagger: {
        amount: .4
    }
});



const cursorFollower = document.querySelectorAll(".cursor");

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({},0.016,{
    repeat: -2,
    onRepeat: function(){
        posX += (mouseX  - posX) / 10;
        posY += (mouseY  - posY) / 10;

        TweenMax.set(cursorFollower, {
            css: {
                left: posX - 80,
                top: posY - 80
            }
        });
    }
});

document.addEventListener("mousemove", 
function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});