$(function(){
  main();
});

function loadContent(){
  return $.getJSON('https://script.google.com/macros/s/AKfycbyPtW_xAzkPoU13lZbqFjxg7PuplLXKa-ObukiE4YZddCS9yvii/exec');
}

function applyTemplate(documentData){
  console.log(documentData);
  window.test={};
  window.mytest = documentData;
  window.test.tti       = documentData.result[2].TTI;
  window.test.titlepage = documentData.result[3].TitlePage;
}

function main(){
  loadContent()
    .then(applyTemplate)
}
