/*AUTOMATIC ROTATION*/

var clock = setInterval(getNextItem, 3000);

$('button:first-child').click(function() {
  clock = setInterval(getNextItem, 3000);
})

$('button:last-child').click(function() {
  clearInterval(clock);
});

/*PICK IMAGE VIA DOT*/
//recupero l'indice del pallino selezionato
$('.dots-box i').click(function() {
  //mi salvo la posizione in una var
  var currentDot = $(this);
  var dotIndex = currentDot.index();

  //tolgo da tutti i pallini le classi che li rendono correnti, idem x le img
  $('.dots-box i').removeClass('fas').addClass('far');
  $('img').removeClass('current');

  //cambio classi per metterlo corrente
  currentDot.removeClass('far').addClass('fas');

  //recupero l'immagine corrispondente
  var currentImg = $('img').eq(dotIndex);

  //cambio classi per metterla corrente
  currentImg.addClass('current');
})


/*MANUAL LINEAR FLOW*/
$('.next-box').click(getNextItem);
$('.prev-box').click(getPreviousItem)


/*FUNCTIONS*/

function getNextItem() {
  //recupero l'immagine attuale
  var currentImg = $('img.current');
  var currentDot = $('.dots-box .fas');

  //tolgo la classe current
  currentImg.removeClass('current');
  currentDot.removeClass('fas').addClass('far');

  //recupero l'immagine successiva
  var nextImg = currentImg.next('img');
  var nextDot = currentDot.next('i');

  if (nextImg.length != 0) {
    //se c'è un'immagine successiva -> metto classe current
    nextImg.addClass('current');
    nextDot.removeClass('far').addClass('fas');
  } else {
    //se non c'è un'immagine dopo -> metto classe current alla prima immagine
    $('img:first-child').addClass('current');
    $('.dots-box i:first-child').removeClass('far').addClass('fas');
  }
};

function getPreviousItem() {
  //recupero l'immagine attuale
  var currentImg = $('img.current');
  var currentDot = $('.dots-box .fas');

  //tolgo la classe current
  currentImg.removeClass('current');
  currentDot.removeClass('fas').addClass('far');

  //recupero l'immagine successiva
  var previousImg = currentImg.prev('img');
  var previousDot = currentDot.prev('i');

  if (previousImg.length != 0) {
    //se c'è un'immagine successiva -> metto classe current
    previousImg.addClass('current');
    previousDot.removeClass('far').addClass('fas');
  } else {
    //se non c'è un'immagine dopo -> metto classe current alla prima immagine
    $('img:last-child').addClass('current');
    $('.dots-box i:last-child').removeClass('far').addClass('fas');
  }
};
