//creo una variabile con cu iidentificare l'immagine corrente attraverso la classe current-img

//intercetto il click
setInterval(function() {
  var currentImg = $('img.current');
  var currentDot = $('.bullets-box i.current')
  //rimuovo la classe
  currentImg.removeClass('current');
  currentDot.removeClass('fas current');
  currentDot.addClass('far');
  var nextImg = currentImg.next();
  var nextDot = currentDot.next();

  //scalo di uno e aggiungo la classe
  if(nextImg.length != 0) {
  nextImg.addClass('current');
  nextDot.removeClass('far');
  nextDot.addClass('fas current');
  } else {
  nextImg = $('img:first-child');
  nextImg.addClass('current');
  nextDot = $('.bullets-box i:first-child');
  nextDot.removeClass('far')
  nextDot.addClass('fas current');
}
}, 3000)

/*$('.prev-box').click(function() {
  var currentImg = $('img.current');
  var currentDot = $('.bullets-box i.current')
  //rimuovo la classe
  currentImg.removeClass('current');
  currentDot.removeClass('fas current');
  currentDot.addClass('far');
  var previousImg = currentImg.prev();
  var previousDot = currentDot.prev();

  //scalo di uno e aggiungo la classe
  if(previousImg.length != 0) {
  previousImg.addClass('current');
  previousDot.removeClass('far');
  previousDot.addClass('fas current');
  } else {
  previousImg = $('img:last-child');
  previousImg.addClass('current');
  previousDot = $('.bullets-box i:last-child');
  previousDot.removeClass('far')
  previousDot.addClass('fas current');
}
})*/
