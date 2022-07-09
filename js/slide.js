var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// slide com jQuery
$(function(){

  var indiceAtual = 0;
  var indiceMaximo = $('.slider img').length;
  var delay = 5000;

  alterandoSlider();
  initSlider();
  clicSlider();
  //console.log(indiceMaximo)
  function initSlider(){
      for(var i = 0; i < indiceMaximo; i ++){
          if(i == 0){
              $('.bullets-nav').append('<span style="background-color:#069;"></span>');
          }else{
              $('.bullets-nav').append('<span></span>')
          }
      }
      $('.slider img').eq(0).fadeIn();
      setInterval(function(){
          alterandoSlider();
      },delay)
  }
  function clicSlider(){
      $('.bullets-nav span').click(function(){
          $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
          indiceAtual = $(this).index();
          $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
          $('.bullets-nav span').css('background-color','#ccc');
          $(this).css('background-color','#069');
      })
  }
  function alterandoSlider(){
      $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
          indiceAtual+=1;
      if(indiceAtual == indiceMaximo)
          indiceMaximo = 0;
          $('.bullets-nav span').css('background-color','#ccc');
          $('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
          $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
  }
})