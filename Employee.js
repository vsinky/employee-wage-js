const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {

    switch (empCheck) {
        case IS_PARTTIME:
            return PART_TIME_HOURS;
        case IS_FULLTIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
const NUMBER_OF_WOROKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WOROKING_DAYS) {
    totalWorkingDays++;
    let empCheck = (Math.floor(Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empTotalWages = calcDailyWage(totalEmpHrs);
console.log("Total working days: " + totalWorkingDays + "\nTotal working hours: " + totalEmpHrs + "\nTotal wage:  " + empTotalWages);
console.log(empDailyWageArr);