window.AuthAction = async function AuthAction(){
    document.getElementById("form-container").style.display = "none";
    document.getElementById("load-container").style.display = "block";
    window.MyAnimation();

   window.setTimeout(function() {
        window.location.replace("../DashBoard/index.html");
    }, 2100);
}

window.StopAction = async function StopAction(){
    document.getElementById("form-container").style.display = "none";
    document.getElementById("load-container").style.display = "block";
    await window.MyAnimation();

    await setTimeout(function() {
        document.getElementById("load-container").style.display = "none";
        document.getElementById("main-content").style.paddingTop = "5rem";
        document.getElementById("background-image").style.display = "none";
        document.getElementById("spinAction").style.marginBottom = "3rem";
        document.getElementById("logo_ICR").style.display = "none";
        document.getElementById("load-stop-container").style.display = "flex";
        document.getElementById("load-stop-container").style.padding = " 3rem"

    }, 2300);

    setTimeout(function() {
        document.getElementById("spinAction").style.display = "none";
        document.getElementById("no-auth-container").style.display = "block";
    }, 2300);
}
