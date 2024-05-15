//loader
const nombrebox = document.getElementById('nombrebox');
const heroiconscont = document.getElementById('heroiconscont');
const loader = document.getElementById('loader');

window.onload = function(){
setTimeout(function(){
    nombrebox.style.opacity = 1;
    window.scrollTo(0, 0);
    setTimeout(function(){
        heroiconscont.style.opacity = 1;
        setTimeout(function(){
            loader.style.opacity = 0;
            setTimeout(function(){
                loader.style.display = "none";
                const videoback = document.getElementById('videoback');
                videoback.play;
            },1000)
        },1000)
    },500)
},50)
}

const portafolio = document.getElementById('portafolio');
const porttxt = document.getElementById('porttxt');

function portafoliopen(){
    portafolio.style.zIndex = "110";
    portafolio.style.width = "100vw";
    portafolio.style.height = "100vh";
    portafolio.style.bottom = "0px";
    portafolio.style.left = "0px";
    portafolio.style.background = "#000";
    portafolio.style.border = "none";
    porttxt.style.opacity = "0";
    setTimeout(function(){
        window.location = "Portafolio/portafolio.html"
    },1000)
}