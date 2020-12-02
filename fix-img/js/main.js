var sPathToDefaultImg = 'http://lorempixel.com/150/100/abstract/2/Placeholder/';

var replaceImageWithPlaceholderIfNotAvail = function( domImg ) {

  // sanitize domImg
  if ( !domImg
  ||   !domImg.nodeName
  ||    domImg.nodeName != 'IMG' ) {
    // get all images from DOM
    aImg = document.getElementsByTagName('IMG');
    i    = aImg.length;
    if ( i ) {
      while ( i-- ) {
        replaceImageWithPlaceholderIfNotAvail( aImg[i] );
      }
    }
    return;
  }

  // here is where the magic happens
  oImg         = new Image();       // create new Image
  oImg.onerror = function() {       // assign onerror
    domImg.src = sPathToDefaultImg; // handler function
  };
  oImg.src     = domImg.src;        // set src of new Image

};

// now you can use the function on "auto pilot"
replaceImageWithPlaceholderIfNotAvail()

// or feed with any domImage you like to evaluate
// replaceImageWithPlaceholderIfNotAvail( domCustomImg )