$(function(){
  main();
});

function loadContent(){
  return $.getJSON('https://script.google.com/macros/s/AKfycbyPtW_xAzkPoU13lZbqFjxg7PuplLXKa-ObukiE4YZddCS9yvii/exec');
}

function applyTemplate(documentData){
  var slideTemplate = Handlebars.compile(
        $('[type="text/x-handlebars-template"]')[0].innerHTML
      );
  var appliedTemplate = slideTemplate(documentData);

  var slides = $(".slides");
  slides.append( appliedTemplate );
}

function initReveal() {
  Reveal.initialize({
    controls: true,
    slideNumber: true,
    history: true,
    keyboard: true,
    overview: true,
    center: false,
    touch: true,
    hideAddressBar: true,
    width: '100%',
    height: '100%',
    margin:0,
    transition: 'default'
  });
}

function main(){
  loadContent()
    .then(applyTemplate)
    .then(initReveal);
}

Handlebars.registerHelper('ttiImage', function(tti) {
  console.log(JSON.stringify(tti));
  return "background-image:url("+JSON.stringify(tti)+")";
});

Handlebars.registerHelper('mylog', function(thing) {
  console.log(JSON.stringify(thing));
});