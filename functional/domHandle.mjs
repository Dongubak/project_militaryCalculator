function getDOM(name) {
  return document.querySelector(name);
}

function createDOM(name) {
  return document.createElement(name);
}

function uls() {
  return [...document.getElementsByTagName("ul")];
}

export { getDOM, createDOM, uls };
