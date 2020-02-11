// $(.about).click(function(){
//     $(.main-container).
// });

// var hideAbout = $(".about-container").hide();
// var hideMain = $(".main-container").hide();

// function showAbout(){ $(document).ready(function(){
//     $(".about").click(function(){
//       $(".main-container").hide();
//       $(".careers").hide();
//       $(".about-container").show();
// });
// });
// }


$(".about").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".about-container").offset().top
  }, 700);
  // $(".about").addClass("underline");
});

$(".portfolio").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".portfolio-container").offset().top
  }, 700);
});

$(".logo").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".main-container").offset().top
  }, 700);
});

$(".contact").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".contact-container").offset().top
  }, 700);
});



// var loader = document.getElementById("loader");

// window.addEventListener("load",function(){
//   setTimeout(function(){
//     // alert("Hello"); 
//     loader.style.visibility = "hidden";
//    }, 1000);
// });