const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WOROKING_DAYS = 20;

function employeeWorkingHours(empCheck) {
    let empHours;
    switch (empCheck) {
        case IS_PARTTIME:
            return empHours = PART_TIME_HOURS;
        case IS_FULLTIME:
            return empHours = FULL_TIME_HOURS;
        default:
            return empHours = 0;
    }
}

let empHours = 0;
for (let i = 1; i <= NUMBER_OF_WOROKING_DAYS; i++) {
    empCheck = (Math.floor(Math.random() * 10) % 3);
    console.log(i + "Day Employee wage - " + (employeeWorkingHours(empCheck) * WAGE_PER_HOUR));
    empHours += employeeWorkingHours(empCheck);
}
let empTotalWages = WAGE_PER_HOUR * empHours;
console.log("the employee total wage is " + empTotalWages);