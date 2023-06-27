// Program to find number of days in a month---06-05

let number = prompt("Enter a month:");
let year = parseInt(prompt("enter a year:"));
if (number == "jan" || number == "march" || number == "may" || number == "july" || number == "aug" || number == "oct" || number == "december") {
    console.log("31 days");
}
else if (number == "feb") {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log("29 febrary leap year");
    }
    else {
        console.log("28 days febrary");
    }
}
else if (number == "april" || number == "june" || number == "september" || number == "november") {
    console.log("30 days");
}