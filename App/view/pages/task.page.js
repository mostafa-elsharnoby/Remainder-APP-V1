
const taksPAge = document.getElementById('masterContainer');
let tasksArr = []
window.createTask = function createTask(event){
    const myTasks = document.getElementById('myTasks')
    tasksArr.push(event.target.value)
    myTasks.innerHTML += `<div class='p-4 '>${event.target.value}</div>`
    
}
function TaskPage() {
    let myTEMP = `
        <section class='p-4 bg-info'>
            <input onblur='createTask(event)' class='px-4 cM0-dark fM0-size-a w-100 M0-Create-new-task cM0-white'>
        </section>
        <seciton id='myTasks'>
        `
    for(let [index,task] of tasksArr.entries()){
        myTEMP += `
            <div>


                <div
            </div>
        `
    }
    myTEMP += `</section>`
    return myTEMP
}
taksPAge.innerHTML=TaskPage();