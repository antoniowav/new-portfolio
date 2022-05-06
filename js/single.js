const timelineSingle = gsap.timeline();
timelineSingle.to('.body2', .5,{
    backgroundColor: '#c9c9c9',
    color: '#c9c9c9'
})
timelineSingle.from('.big-txt p', 1.5,{
    delay: 1,
    y: "-100%",
    color: 'black',
    opacity: 0
});
timelineSingle.from(".mockup", 1.5,{
    opacity: 0,
    y: "+100%",
    color: 'black'
})
timelineSingle.from(".proj-desc, .next-proj", 1.2,{
    opacity: 0,
    y: "+100%",
    color: 'black'
})

timelineSingle.from('.logo, .ul li',.5,{
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .5
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
