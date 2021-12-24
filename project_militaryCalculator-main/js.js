function init() {
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function1);
}

function function1(event) {
    
    event.preventDefault();
    clear();
    const [start, end, today] = [...inputValue()];
    const [all, rest, percent] = uls();
    
    const allDay = Math.ceil(dateCal(end, start));
    const restDay = Math.ceil(dateCal(end, today));
    const percentDay = Math.ceil((allDay - restDay) / allDay * 100);
    console.log(allDay, restDay, percentDay);
    addlist(all, allDay);
    addlist(rest, restDay);
    addlist(percent, percentDay);

}

function dateCal() {
    const arr = [...arguments];
    const timeCal = arr[0].getTime() - arr[1].getTime();
    const MILLITODAY = 1000 * 60 * 60 * 24;
    return timeCal / MILLITODAY;
}

function uls() {
    return [...document.getElementsByTagName('ul')];
}

function inputValue() {
    const startDate = new Date(document.querySelector("#startDate").value);
    const endDate = new Date(document.querySelector("#endDate").value);
    const today = new Date();  
    
    return [startDate, endDate, today];
}

function addlist(location, value) {
    const textNode = document.createTextNode(value);
    const listNode = document.createElement('li');
    listNode.appendChild(textNode);
    location.appendChild(listNode);
}

function clear() {
    const ulChild = uls();

    for (const items of ulChild) {
        items.removeChild(items.children[1]);
    }
    
}
///date객체 전달

init();