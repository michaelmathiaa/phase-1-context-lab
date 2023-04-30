/* Your Code Here */

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);

    const hoursOfWork = (timeOut.hour - timeIn.hour) / 100;

    return hoursOfWork;
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const pay = this.payPerHour;

    return hoursWorked * pay;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employees) {
    return employees.reduce((pay, employee) => pay + allWagesFor.call(employee), 0);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

