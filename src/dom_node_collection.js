class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }
}

DOMNodeCollection.prototype.html = function(string) {
  if(string === undefined) {
    return this.htmlElements[0];
  } else {
      for (let i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML = string;
      }
  }
};

DOMNodeCollection.prototype.empty = function () {
  for (var i = 0; i < this.htmlElements.length; i++) {
    this.htmlElements[i].innerHTML = '';
  }
};

DOMNodeCollection.prototype.append = function (el) {
  for (var i = 0; i < this.htmlElements.length; i++) {
    this.htmlElements[i].innerHTML += el;
  }
};

DOMNodeCollection.prototype.attr = function(id, value){
  if(value === undefined) {
    return this.htmlElements[0].getAttribute(id);
  } else {
    for (var i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].setAttribute(id, value);
    }
  }
};




module.exports = DOMNodeCollection;