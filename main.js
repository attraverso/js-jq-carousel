//creo una variabile con cu iidentificare l'immagine corrente attraverso la classe current-img

//intercetto il click
$('.next-box').click(function() {
  var currentImg = $('img.current-img');

  //rimuovo la classe
  currentImg.removeClass('current-img');

  var nextImg = currentImg.next();
  //scalo di uno e aggiungo la classe

  if(nextImg.length != 0) {
  nextImg.addClass('current-img');
  } else {
  nextImg = $('img:first-child');
  nextImg.addClass('current-img');
}
})

$('.prev-box').click(function() {
  var currentImg = $('img.current-img');

  //rimuovo la classe
  currentImg.removeClass('current-img');

  var previousImg = currentImg.prev();
  //scalo di uno e aggiungo la classe

  if(previousImg.length != 0) {
  previousImg.addClass('current-img');
  } else {
  previousImg = $('img:last-child');
  previousImg.addClass('current-img');
}
})
