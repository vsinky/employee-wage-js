const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WOROKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function employeeWorkingHours(empCheck) {

    switch (empCheck) {
        case IS_PARTTIME:
            return PART_TIME_HOURS;
        case IS_FULLTIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WOROKING_DAYS) {
    totalWorkingDays++;
    let empCheck = (Math.floor(Math.random() * 10) % 3);
    console.log(totalWorkingDays + " Day Employee wage - " + (employeeWorkingHours(empCheck) * WAGE_PER_HOUR));
    totalEmpHrs += employeeWorkingHours(empCheck);
}
let empTotalWages = WAGE_PER_HOUR * totalEmpHrs;
console.log("Total employee hours:" + totalEmpHrs + "\nTotal wage:  " + empTotalWages);