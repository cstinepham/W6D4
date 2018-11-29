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


module.exports = DOMNodeCollection;