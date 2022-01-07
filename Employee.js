const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function employeeHours(empcheck) {
    switch (empcheck) {
        case IS_PARTTIME:
            return emphours = PART_TIME_HOURS;
        case IS_FULLTIME:
            return emphours = FULL_TIME_HOURS;
        default:
            return emphours = 0;
    }
}

empcheck = (Math.floor(Math.random() * 10) % 3);
let empWage = WAGE_PER_HOUR * employeeHours(empcheck);
console.log("the employee wage is " + empWage);