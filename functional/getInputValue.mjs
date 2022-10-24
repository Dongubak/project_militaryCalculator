import { getDOM } from "./domHandle.mjs";

function inputValues() {
  const startDate = new Date(getDOM("#startDate").value);
  const endDate = new Date(getDOM("#endDate").value);
  const today = new Date();
  return [startDate, endDate, today];
}

export default inputValues;
