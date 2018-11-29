const DomNodeCollection = require("./dom_node_collection.js");

function $l (selector) {
  let nodeList = document.querySelectorAll(selector);
  let nodeArray = Array.prototype.slice.call(nodeList);

  if (nodeArray[0] instanceof HTMLElement) {
    return new DomNodeCollection(nodeArray);
  }
  
  return nodeArray;
}

window.$l = $l;