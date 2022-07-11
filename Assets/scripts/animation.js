window.MyAnimation = function Animation (){
    const background = document.getElementById("background-image");
    const logoIcr = document.getElementById("logo_ICR");
    const logoNewIO = document.getElementById("main-content-header");
    const load = document.getElementById("load-container");    

    background.style.opacity = "0.9"
    load.style.opacity= "1"

    background.animate([
    { transform: 'scale(2.3)' },
    ], {
    duration: 2300,
    iterations: 1
    });

    background.style.animationDuration = "400ms";

    logoIcr.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-120px)' }
    ], {
    duration: 2300,
    iterations: 1
    });

    logoNewIO.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(50px)'}
    ], {
    duration: 2300,
    iterations: 1
    });

    load.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(50px)' }
    ], {
    duration: 2300,
    iterations: 1
    });
}