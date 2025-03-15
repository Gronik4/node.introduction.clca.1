#! /usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const dateN = new Date();
const year = dateN.getFullYear();
const month = dateN.getMonth()+1;
const day = dateN.getDate();
const hours = dateN.getHours();
const minutes = dateN.getMinutes();
const dates = year+' '+month+' '+day+' '+hours+':'+minutes;
function futureDate(offset) {
  return month+' '+(day*1+offset*1)+' '+hours+':'+minutes;
}
function lastDate(offset) {
  return (month*1 - offset*1)+' '+day+' '+hours+':'+minutes;
}

const argv = yargs(hideBin(process.argv))
.option('current', {
    default: dates
  })
  .option('current--year', {
    alias: 'y',
    default: year
  })
  .option('current--month', {
    alias:'m',
    default: month
  })
  .option('current --date', {
    alias:'d',
    default: day
  })
  .option('add', {
    default: futureDate(process.argv.slice(4)[0])
  })
  .option('sub', {
    default: lastDate(process.argv.slice(4)[0])
  }).argv;
  
console.log(argv);
