$(function(){
  main();
});

function loadContent(){
  return $.getJSON('https://script.google.com/macros/s/AKfycbyPtW_xAzkPoU13lZbqFjxg7PuplLXKa-ObukiE4YZddCS9yvii/exec');
}

function applyTemplate(documentData){
  var slideTemplate = Handlebars.compile(
        $('#slide-template')[0].innerHTML
      );
  var partialTemplates = $('[data-partial-name]')
    .each(function(index,partial) {
      Handlebars.registerPartial(
        partial.attributes['data-partial-name'].value,
        partial.innerHTML
      );
    });
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
    transition: 'default'
  });
}

function main(){
  loadContent()
    .then(applyTemplate)
    .then(initReveal);
}
