$( function () {
    var hamburger = $(".hamburger"),
        list = $(".ulList");
    
    hamburger.on("click", handler);
    
    
    function handler () {
        console.log("clicked");
//        hamburger.css("color", "red");
        
        list.toggleClass("active");
    }
});
    