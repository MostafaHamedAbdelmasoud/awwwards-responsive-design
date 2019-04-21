  $(function() {
        $('.chart').easyPieChart({
            //your options goes here
        });
    });

$(".social-icns").click(function(){

    $(".social").fadeToggle(2000)

})


    $(".sk-cube-grid").fadeOut(2000,function(){
        
      $("#loading").fadeOut(2000 , function(){
          
              $("body").css("overflow","auto")

      })  

    })
    

var typed = new Typed('.element', {
  strings: [ "Web Developers","And ","Designers",],
  typeSpeed: 50,
    loop:true
});


