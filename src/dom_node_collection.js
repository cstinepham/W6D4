class DOMNodeCollection {
  constructor(htmlElements, nodeList) {
    this.htmlElements = htmlElements;
    this.nodeList = nodeList;
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

DOMNodeCollection.prototype.addClass = function(className) {
  this.attr('class', className);
};

DOMNodeCollection.prototype.removeClass = function() {
  for (var i = 0; i < this.htmlElements.length; i++) {
    this.htmlElements[i].removeAttribute("class");
  }
};

DOMNodeCollection.prototype.children = function () {
  let children = [];
  for (var i = 0; i < this.htmlElements.length; i++) {
  
  }
  return new DOMNodeCollection(children);
};

DOMNodeCollection.prototype.index = function(array, index) {
  return array[index];
};



module.exports = DOMNodeCollection;