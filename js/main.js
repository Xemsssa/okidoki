$( function () {
    var hamburger = $(".hamburger"),
        list = $(".ulList");
    
    hamburger.on("click", handler);
    
    
    function handler () {
        console.log("clicked");
        list.toggleClass("active");
    }
});
    