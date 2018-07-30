$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is working');
    // click handlers
    $('#submit').on('click', addNewSalary);
}

function addNewSalary() {
    let salary = $('#salary').val();
    console.log(salary);
}