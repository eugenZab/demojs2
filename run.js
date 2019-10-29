const fs = require('fs');
const _ = require('lodash');
const parkingObj = require("./data/parking");

const addNewParkingObj = function (newParkingObj, done) {
    setTimeout(function () {
        parkingObj.push(newParkingObj);
        done();
    }, 1000);
}

const deleteParkingObj = function (parkingId, done) {
    setTimeout(function () {
        _.remove(parkingObj, function (obj) {
            return obj.parkingId === parkingId;
        });
        done();
    }, 1000);
}

deleteParkingObj("P1", function () {
    deleteParkingObj("P2", function () {
        addNewParkingObj({ car: 'New Car P8', owner: 'Nick Jognson', rego: 'MJD183', parkingId: 'P8' }, function () {
            addNewParkingObj({ car: 'Toyota Prado', owner: 'Daisy Jognson', rego: 'MJD982', parkingId: 'P9' }, function () {
                fs.writeFileSync('./data/newParkingObj.json', JSON.stringify(parkingObj));
                console.log(parkingObj);
            });
        });
    })
});

