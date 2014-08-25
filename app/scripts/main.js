$(function(){
  main();
});

function loadContent(){
  return $.getJSON('https://script.google.com/macros/s/AKfycbyPtW_xAzkPoU13lZbqFjxg7PuplLXKa-ObukiE4YZddCS9yvii/exec');
}

function applyTemplate(documentData){
  console.log(documentData.result[2]);
  window.test.tti = documentData.result[2].TTI;
}

function main(){
  loadContent()
    .then(applyTemplate)
}
