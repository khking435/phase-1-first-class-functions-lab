// Code your solution in this file!
const drivers = ['Antonia','Nuru', 'Amari','Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length -  2, drivers.length)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){

    function fareMultiplier(integer){
    return fare * integer}
    return fareMultiplier
}

function fareDoubler(fareMultiplier){
    return fareMultiplier * 2
}
function fareTripler(fareMultiplier){
    return fareMultiplier * 3
}
function selectDifferentDrivers(drivers,selectingDriver){
    return selectingDriver(drivers)
}