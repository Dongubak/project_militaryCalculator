import addList from "./addList.mjs";
import dateCal from "./dataCal.mjs";
import { uls } from "./domHandle.mjs";
import inputValues from "./getInputValue.mjs";
import onClear from "./onClear.mjs";

function onClick(event) {
  event.preventDefault();
  onClear();
  const [start, end, today] = [...inputValues()];
  const [all, rest, percent] = uls();
  const allDay = Math.ceil(dateCal(end, start));
  const restDay = Math.ceil(dateCal(end, today));
  const percentDay = Math.ceil(((allDay - restDay) / allDay) * 100);
  addList(all, allDay);
  addList(rest, restDay);
  addList(percent, percentDay);
}

export default onClick;
