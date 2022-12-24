// SCRIPT FOR LOADER
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";

}

window.addEventListener("load",()=>{
    console.log("page has loaded");
})