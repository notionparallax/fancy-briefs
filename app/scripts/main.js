$(function() {
    main();
});

function loadContent() {
    return $.getJSON('https://script.google.com/macros/s/AKfycbyPtW_xAzkPoU13lZbqFjxg7PuplLXKa-ObukiE4YZddCS9yvii/exec');
}

function applyTemplate(documentData) {
    var slideTemplate = Handlebars.compile(
        $('[type="text/x-handlebars-template"]')[0].innerHTML
    );
    var appliedTemplate = slideTemplate(documentData);

    var slides = $(".slides");
    slides.append(appliedTemplate);
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
        width:  '90%',
        height: '90%',
        margin: 0,
        transition: 'default'
    });
}

function body_image(url, title, cssclass, alt){
  return '<img src="'+url
         +'" class="'+cssclass
         +'"  title="'+title
         +'" alt="'+alt
         +'">';
}
function body_p(content, id){
  return '<p id="'+id+'">'
         +content
         +'</p>';
}

function main() {
    loadContent()
        .then(applyTemplate)
        .then(initReveal);
}

function Vanilla(obj) {
    console.log("this one's a Vanilla");
    console.log(obj);
    var vanillaObjects = [];
    var body = obj.Vanilla[0].body;
    for (i in body){
      var el = Object.keys(body[i]);
      if (el == 'p'){
        var p = body[i].p;
        vanillaObjects.push(body_p(p.value, p.id));
      }
      if (el == 'img'){
        var img = body[i].img;
        vanillaObjects.push(body_image(img.value,"","",""));
      }
    }
    console.log(vanillaObjects);
    return vanillaObjects;
}

function TTI(obj) {
    console.log("this one's a TTI");
    console.log(obj);
    return;
}

function TIT(obj) {
    console.log("this one's a TIT");
    console.log(obj);
    return;
}

function ITI(obj) {
    console.log("this one's a ITI");
    console.log(obj);
    return;
}

function Video(obj) {
    console.log("this one's a Video");
    console.log(obj);
    return;
}

Handlebars.registerHelper('ourtemplate', function(obj) {
    var pageType = Object.keys(obj)[0];
    if (pageType == 'Vanilla') {
        return Vanilla(obj);
    } else if (pageType == 'TTI') {
        return TTI(obj);
    } else if (pageType == 'TIT') {
        return TIT(obj);
    } else if (pageType == 'ITI') {
        return ITI(obj);
    } else if (pageType == 'Video') {
        return Video(obj);
    } else {}

    return "";
});

Handlebars.registerHelper('ttiImage', function(tti) {
    console.log(JSON.stringify(tti));
    return "background-image:url(" + JSON.stringify(tti) + ")";
});

Handlebars.registerHelper('mylog', function(thing) {
    console.log(thing);
});


Handlebars.registerHelper('ttiImage', function(tti) {

    console.log(JSON.stringify(tti));
    return "background-image:url(" + JSON.stringify(tti) + ")";
});
