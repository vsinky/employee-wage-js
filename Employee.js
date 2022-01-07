const is_present = 1;

var employeePresent = Math.floor((Math.random() * 10) % 2);
console.log(employeePresent);
if (employeePresent == is_present) {
    console.log("employee is present");
} else {
    console.log("the employee is absent");
}