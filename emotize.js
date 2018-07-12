window.onload = function() {
  emotize();
}

/**
 Just the ones I use. Maybe using a JSON collection + XHR call will be more readable if it need to be completed
 */
var emoticons = {
  ':-\\)' : '\u{1F600}',
  ';-\\)' : '\u{1F609}',
  ':-\\(' : '\u{1F614}',
  ':-/' : '\u{1F615}',
  ':-D' : '\u{1F601}',
  ':\'\\(' : '\u{1F622}'
}

/** 
 Browse the .emotize HTML element and replace text smiley with corresponding emoticon
 */
emotize = function() {
  var ps = document.getElementsByClassName('emotize');
  for (var i=0; i < ps.length; i++) {
    var phtml = ps[i].innerHTML;
    for (var smiley in emoticons) {
      phtml = phtml.replace(new RegExp(smiley, 'g'), emoticons[smiley]);
    }
  	ps[i].innerHTML = phtml;
  }
}

