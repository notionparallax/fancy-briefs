$(function(){
  setTimeout(main, 3000);
});

function loadContent(){
  return $.getJSON("https://spreadsheets.google.com/feeds/list/1xPj-1ZVF1K4Y5kvdRLH8V9UTqkfr2vUFesysNeMtg7U/1/public/basic?alt=json");
}

function processContent(googleSpreadsheet){

}

function applyTemplate(){
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
    .then(processContent)
    .then(applyTemplate)
    .then(initReveal);
}
