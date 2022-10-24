import { createDOM } from "./domHandle.mjs";

function addList(location, value) {
  const textNode = document.createTextNode(value);
  const listNode = createDOM("li");
  listNode.appendChild(textNode);
  location.appendChild(listNode);
}

export default addList;
