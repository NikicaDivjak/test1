{
    "globals": {
        "$": false
    }
}


/*$(document).ready(function () {
    $("nav a").click(function () {
        $("nav ul").slideToggle();
    });
});*/

//$(document).ready(function () {
    $('.js--mobile').click(function () {
        $('.js--main-many').slideToggle(200);
    });
});

/*$(document).ready(function(){
  $(".js--mobile").click(function(){
    $(".js--main-many").slideToggle("slow");
  });
});*/

$(".js--mobile").click(function() {
  $(this).toggleClass("on");
  $(".js--main-many").slideToggle();
});