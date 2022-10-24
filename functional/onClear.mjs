function uls() {
  return [...document.getElementsByTagName("ul")];
}

function onClear() {
  const ulChild = uls();
  for (const items of ulChild) {
    items.removeChild(items.children[1]);
  }
}

export default onClear;
