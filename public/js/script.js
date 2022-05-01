$(document).ready(function(){
  var scrollSpeed = 750;
  var navHeight = $("nav").height();

  $("#navItem1").click(function(){
    $('html, body').animate({
      scrollTop: $("#topBlock").offset().top - navHeight
    }, scrollSpeed);
  })

  $("#navItem2").click(function(){
    $('html, body').animate({
      scrollTop: $("#section2").offset().top - navHeight
    }, scrollSpeed);
  })

  $("#navItem3").click(function(){
    $('html, body').animate({
      scrollTop: $("#section3").offset().top - navHeight
    }, scrollSpeed);
  })

  $("#navItem4").click(function(){
    window.location.href = "resume";
  })

  $("#homeButtonContainer").click(function(){
    $('html, body').animate({
      scrollTop: $("#topBlock").offset().top - navHeight
    }, scrollSpeed);
  })

  $(window).scroll(function(){
    //var Distance from bottom of nav bar to each section
    var homeSection = $("#topBlock").offset().top - ($(window).scrollTop() + navHeight);
    var section2 = $("#section2").offset().top - ($(window).scrollTop() + navHeight);
    var section3 = $("#section3").offset().top - ($(window).scrollTop() + navHeight);

    if(homeSection <= 0){
      $("#navItem1").addClass("navActive");
    }
    else {
      $("#navItem1").removeClass("navActive")
    };

    if(section2 <= 0){
      $("#navItem2").addClass("navActive");
      $("#navItem1").removeClass("navActive")
    }
    else{
      $("#navItem2").removeClass("navActive")
    };

    if(section3 <= 0){
      $("#navItem3").addClass("navActive");
      $("#navItem2").removeClass("navActive")
    }
    else{
      $("#navItem3").removeClass("navActive")
    };
  })
});