//check if the page is loaded and remove the loader!
$(document).ready(($)=>{

    $.noConflict();

    $(window).on("load",()=>{
        $("#loader").css({"display":"none"});
    })
})