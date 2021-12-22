function init() {
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", function1);
}

function function1(event) {
    event.preventDefault();

    const startDate = new Date(document.querySelector("#startDate").value);
    const endDate = new Date(document.querySelector("#endDate").value);
    const result = endDate.getTime() - startDate.getTime();
    const MILLTODAY = 1000*60*60*24;

    console.log(result/MILLTODAY);

    

}

init();