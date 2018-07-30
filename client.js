$(document).ready(readyNow);

let monthlyCost = 0;

function readyNow() {
    console.log('jquery is working');
    // click handlers
    $('#submit').on('click', addNewSalary);
}

function addNewSalary() {
    let salary = $('#salary').val();
    monthlyCost += salary / 12;
    console.log(salary);
    // Add employee to the list
    $('#employee-list').append('<li>' + salary + '</li>');
    // Update the monthly cost
    $('#monthly-cost').text('$' + monthlyCost);
}