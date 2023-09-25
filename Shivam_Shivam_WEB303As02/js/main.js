// WEB303 Assignment 2

$(document).ready(function () {
    
    function loadContent(page) {
      
      $.ajax({
        url: page + ".html", 
        dataType: "html",
        success: function (data) {
          
          $("#content").fadeOut("fast", function () {
            
                $("#content").html(data);
            
            $("#content").fadeIn("fast");
                            });
    },
        error: function () {
          
          $("#content").html("Error loading content.");
             },
                     });
         }
  
    $("#prospect").click(function (e) {
                e.preventDefault(); 
            loadContent("prospect");
    });
  
    $("#convert").click(function (e) {
             e.preventDefault();
         loadContent("convert");
            });
  
    $("#retain").click(function (e) {
             e.preventDefault();
        loadContent("retain");
        });
  
             loadContent("prospect");
  });
  