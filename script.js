const currentDay = document.querySelector("#currentDay")
const saveBtn = document.querySelector(".saveBtn")
let days = {}
let length = 10
let time = 8

for (let i = 1; i <= length; i++) {

    days[`${time}am`] = ""
    time++
}


let now = moment().format("dddd,MMM Do")
currentDay.innerHTML = now

let table

function createTables() {
    for (day in days) {
        table += ` <div id="hour-9" class="row">
            <div class="col-1 hour">9AM</div>
            <textarea class="col-10 task"></textarea>
            <button class="col-1 saveBtn btn"><i class="fas fa-save"></i></button>
        </div>`

    }

}

function saveDatetoLocal(obj) {
    localStorage.setItem('shifts', json.stringify(obj))
}

function start() {
    createTables()
}
// when you click save button this runs
saveBtn.addEventListener("click", function() {

})