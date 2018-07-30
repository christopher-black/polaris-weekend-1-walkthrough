$(document).ready(readyNow);

let monthlyCost = 0;

function readyNow() {
    console.log('jquery is working');
    // click handlers
    $('#submit').on('click', addNewSalary);
}

function addNewSalary() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#employee-id').val();
    let jobTitle = $('#job-title').val();
    let salary = $('#salary').val();
    monthlyCost += salary / 12;
    console.log(salary);
    // Add employee to the list
    $('#employee-list').append('<li>' + firstName + 
                                      lastName + 
                                      employeeId +
                                      jobTitle + 
                                      salary + '</li>');
    // Update the monthly cost
    $('#monthly-cost').text('$' + monthlyCost);
    if(monthlyCost > 20000) {
        $('#monthly-cost').addClass('highlight');
    } else {
        $('#monthly-cost').removeClass('highlight');
    }
}