import { getDOM } from "./functional/domHandle.mjs";
import onClick from "./functional/onClick.mjs";

function init() {
  const btn = getDOM("#btn");
  btn.addEventListener("click", onClick);
}

init();
