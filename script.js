  





function jqUpdateSize(){
    // Get the dimensions of the viewport
    // var width = $(window).width();
    var height = $(window).height();
  
    // $('#jqWidth').html(width);
    $('#jqHeight').html(height);
  
    $('.header-content').css({ 
    height:  $(window).height(),
    overflow:" hidden"});
  
  }
  $(document).ready(jqUpdateSize);    // When the page first loads
  $(window).resize(jqUpdateSize);     // When the browser changes size

  
  function menuClick(){
    var x = document.getElementById("menu-bar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function closeMenu(){
    var x = document.getElementById("menu-bar");

    x.style.display = 'none';
  }


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


$(document).ready(function(){
  $(document).on("scroll", function(){
      var pixels = $(document).scrollTop();
      var pageHeight = $(document).height() - $(window).height();
      var progress = 100 * pixels / pageHeight;
      $("div.progress").css("width", progress + "%");
  })
  if($('#back-to-top').length){
      var scrollTrigger = 60, //px
      backToTop = function() {
          var scrollTop = $(window).scrollTop();
          if(scrollTop > scrollTrigger){
              $('#back-to-top').addClass('show');
          }
          else{
              $('#back-to-top').removeClass('show');
          }
      };
      backToTop();
      $(window).on('scroll', function(){
          backToTop();
      });
      $('#back-to-top').on('click', function (e){
          e.preventDefault();
          $('html,body').animate({
              scrollTop : 0
          }, 700);
      }); }
      localStorage.clear();
});


// modal code

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


$("#know-more").click(function() {
  $('html, body').animate({
      scrollTop: $(".about").offset().top
  }, 1000);
});