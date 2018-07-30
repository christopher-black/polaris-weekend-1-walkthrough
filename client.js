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
    // Creates a tr that we can append later 
    let row = $('<tr></tr>'); 
    // Append to that row
    row.append('<td>' + firstName + '</td>');
    row.append('<td>' + lastName + '</td>');
    row.append('<td>' + employeeId + '</td>');
    row.append('<td>' + jobTitle + '</td>');
    row.append('<td>' + salary + '</td>');
    // employee-list is the tbody
    $('#employee-list').append(row); // put row on DOM
    // // Add employee to the list
    // $('#employee-list').append('<li>' + firstName + 
    //                                   lastName + 
    //                                   employeeId +
    //                                   jobTitle + 
    //                                   salary + '</li>');
    // Update the monthly cost
    $('#monthly-cost').text('$' + monthlyCost);
    if(monthlyCost > 20000) {
        $('#monthly-cost').addClass('highlight');
    } else {
        $('#monthly-cost').removeClass('highlight');
    }
}