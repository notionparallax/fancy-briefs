$(function(){
  main();
});

function loadContent(){
  return $.getJSON("https://spreadsheets.google.com/feeds/list/1xPj-1ZVF1K4Y5kvdRLH8V9UTqkfr2vUFesysNeMtg7U/1/public/basic?alt=json");
}

function processContent(googleSpreadsheet){
  var documentData = [];
  for (var rowNumber in googleSpreadsheet.feed.entry) {
    var row = googleSpreadsheet.feed.entry[rowNumber];
    var rowData = [row.title.$t].concat( row.content.$t.split(',').map(function(columns) {
      return columns.split(':')[1].trim();
    }) );
    documentData.push(rowData);
  }
  return documentData;
}

function applyTemplate(documentData){
  console.log(documentData);
  var slides = $(".slides");
  for (var slideNumber in documentData) {
    var slideData = documentData[slideNumber];
    var slideColumn = [];
    for (var i = 0; i < slideData.length; i+= 2) {
      slideColumn.push('<section>'
        + '<h1>' + slideData[i] + '</h1>'
        + '<p>' + slideData[i+1] + '</p>'
        + '</section>'
        );
    }
    slide = $('<section>'
      + slideColumn.join('')
      + '</section>' );
    slides.append(slide);
  }
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
