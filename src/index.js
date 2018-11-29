function $l (selector) {
  let nodeList = document.querySelectorAll(selector);
  let nodeArray = Array.prototype.slice.call(nodeList);
  return nodeArray;
}
window.$l = $l;