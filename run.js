const fs = require('fs');
const _ = require('lodash');
const parkingObj = require("./data/parking");

const addNewParkingObj = function (newParkingObj) {
    setTimeout(function (){
        parkingObj.push(newParkingObj);
    }, 1000);
}

const deleteParkingObj = function (parkingId) {
    setTimeout(function (){
        _.remove(parkingObj, function(obj) {
            return obj.parkingId === parkingId;
          });
    }, 1000);
}

addNewParkingObj({ car: 'Toyota Prado', owner: 'Mike Jognson', rego: 'MJD123', parkingId: 'P7' });
deleteParkingObj("P4");


console.log(parkingObj);


