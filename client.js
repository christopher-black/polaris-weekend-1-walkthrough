$(document).ready(readyNow);

let monthlyCost = 0;
let employees = [];

function readyNow() {
    console.log('jquery is working');
    // click handlers
    $('#submit').on('click', addNewSalary);
    $('#employee-list').on('click', '.delete-btn', removeEmployee);
}

function removeEmployee() {
    // $(this) references the target that was clicked on
    let salary = $(this).parent().parent().find('.salary').text();
    monthlyCost -= salary / 12;
    updateMonthlyCosts();
    // Remove the row
    $(this).parent().parent().remove();

    // loop through employees and look for the employee id
    // remove that index
}

// Updates the DOM and background color
function updateMonthlyCosts() {
    // Update the dom
    $('#monthly-cost').text('$' + monthlyCost);
    if (monthlyCost > 20000) {
        $('#monthly-cost').addClass('highlight');
    } else {
        $('#monthly-cost').removeClass('highlight');
    }
}

// employee object or class
function appendEmployeeToDom(employee) {
    // Creates a tr that we can append later 
    let row = $('<tr></tr>');
    // Append to that row
    row.append('<td>' + employee.firstName + '</td>');
    row.append('<td>' + employee.lastName + '</td>');
    row.append('<td>' + employee.employeeId + '</td>');
    row.append('<td>' + employee.jobTitle + '</td>');
    row.append('<td class="salary">' + employee.salary + '</td>');
    row.append('<td><button class="delete-btn">Remove</button></td>');
    // employee-list is the tbody
    $('#employee-list').append(row); // put row on DOM
}

function addNewSalary() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#employee-id').val();
    let jobTitle = $('#job-title').val();
    let salary = $('#salary').val();

    let employee = {firstName: firstName,
                    lastName: lastName,
                    employeeId: employeeId,
                    jobTitle: jobTitle,
                    salary: salary};
    appendEmployeeToDom(employee);
    monthlyCost += salary / 12;
    console.log(salary);
    
    // // Add employee to the list
    // $('#employee-list').append('<li>' + firstName + 
    //                                   lastName + 
    //                                   employeeId +
    //                                   jobTitle + 
    //                                   salary + '</li>');
    // Update the monthly cost
    updateMonthlyCosts();

    // clear input fields
    // input fields that are a child of employee-form
    $('#employee-form input').val('');
}