/*
   Write a js program to find leap year 
   * ! leap year = year % 4
   * ! centuary year = year % 400
*/

const year = +prompt("Enter a year: ");
const res = (year%100 !==0 && year%4 ===0) || (year%400 === 0)? `Leap Year ${year}` : `Not a leap year`;
console.log(res);

