
const timeline = gsap.timeline();
timeline.from('.line p', 1,{
    delay: 1,
    ease: 'power4.out',
    y: 350,
    skewY: 15,
    stagger: {
        amount: .8
    }
});
timeline.to('.body',1,{
    backgroundColor: '#c9c9c9'
})
timeline.to('.line p a', 1,{
    color: 'black'
},"-=1.5")
timeline.from('.logo, .ul li',0.4,{
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



/* 
var media1 = window.matchMedia("(max-width: 819px)");
var media2 = window.matchMedia("(max-width: 730px)");
var media3 = window.matchMedia("(max-width: 410px)");
var media4 = window.matchMedia("(max-width: 375px)");

const cursor1 = document.getElementById("cursor-follow1")
const cursor2 = document.getElementById("cursor-follow2")
const cursor3 = document.getElementById("cursor-follow3")
const cursor4 = document.getElementById("cursor-follow4")




function mediaQueries1(media1){
    if(media1.match){
        cursor1.style.display = "none"
        cursor2.style.display = "none"
        cursor3.style.display = "none"
        cursor4.style.display = "none"
        line1.style.fontSize = "90px"
        line2.style.fontSize = "90px"   
        line3.style.fontSize = "90px"
        line4.style.fontSize = "90px"
    }else{
        return;
    }
}   


const projText1 = document.getElementById("proj1")
const projText2 = document.getElementById("proj2")
const projText3 = document.getElementById("proj3")
const projText4 = document.getElementById("proj4")
const logo = document.getElementById("logo")
const about = document.getElementById("about")
const contact = document.getElementById("contact")
const menu = document.getElementById("menu")
const home = document.getElementById("home")
const text = document.getElementById("text")
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const line4 = document.getElementById("line4")

    
function mediaQueries2(media2){
    if(media2.matches){
        projText1.style.fontSize = "60px"
        projText2.style.fontSize = "60px"
        projText3.style.fontSize = "60px"
        projText4.style.fontSize = "60px"
        logo.style.marginTop = "40px"
        logo.style.marginLeft = "0"
        about.style.marginRight = "0"
        contact.style.marginRight = "0"
        about.style.marginTop = "20px"
        contact.style.marginTop = "20px"
        menu.style.flexDirection = "column"
        home.style.margin = "0"
        home.style.padding = "0"
        text.style.marginTop = "155px"
         line1.style.fontSize = "90px"
        line2.style.fontSize = "90px"
        line3.style.fontSize = "90px"
        line4.style.fontSize = "90px"

    }else{
        return;
    }
}

function mediaQueries3(media3){
    if(media3.matches){
        projText1.style.fontSize = "40px"
        projText2.style.fontSize = "40px"
        projText3.style.fontSize = "40px"
        projText4.style.fontSize = "40px"
        line1.style.fontSize = "40px"
        line2.style.fontSize = "40px"
        line3.style.fontSize = "40px"
        line4.style.fontSize = "40px"
        logo.style.marginTop = "40px"
        logo.style.marginLeft = "0"
        about.style.marginRight = "0"
        contact.style.marginRight = "0"
        about.style.marginTop = "20px"
        contact.style.marginTop = "20px"
        menu.style.flexDirection = "column"
        home.style.margin = "0"
        home.style.padding = "0"
        text.style.marginTop = "100px"

    }else{
        return;
    }
}
    function mediaQueries4(media4){
        if(media4.matches){
            projText1.style.fontSize = "40px"
            projText2.style.fontSize = "40px"
            projText3.style.fontSize = "40px"
            projText4.style.fontSize = "40px"
            line1.style.fontSize = "40px"
            line2.style.fontSize = "40px"
            line3.style.fontSize = "40px"
            line4.style.fontSize = "40px"
            logo.style.marginTop = "40px"
            logo.style.marginLeft = "0"
            about.style.marginRight = "0"
            contact.style.marginRight = "0"
            about.style.marginTop = "20px"
            contact.style.marginTop = "20px"
            menu.style.flexDirection = "column"
            home.style.margin = "0"
            home.style.padding = "0"
            text.style.marginTop = "80px"
    
        }else{
            return;
        }
}

mediaQueries1(media1)
mediaQueries2(media2)
mediaQueries3(media3)
mediaQueries4(media4)

media1.addListener(mediaQueries1)
media2.addListener(mediaQueries2)
media3.addListener(mediaQueries3)
media4.addListener(mediaQueries4) */


/* 
media1.addEventListener("change", () => {
    this.checkNative(mediaQueries1);
});

media2.addEventListener("change", () => {
    this.checkNative(mediaQueries1);
}); */

