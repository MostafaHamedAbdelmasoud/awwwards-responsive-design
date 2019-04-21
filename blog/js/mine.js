$(".box-left .dropdown .dropss").click(function(){
    $(".sh").slideToggle()
})

$(".box-left .dropdown .drops").click(function(){
    $(".she").slideToggle()
})
    
$(".box-left .dropdown .drop").click(function(){

    $(".sheh").slideToggle()
})

  $(function() {
        $('.chart').easyPieChart({
            //your options goes here
        });
    });

$(".social-icns").click(function(){

    $(".social").fadeToggle(2000)

})




var typed = new Typed('.element', {
  strings: [ "Web Developers","And ","Designers",],
  typeSpeed: 50,
    loop:true
});
