const fs = require('fs');
const parkingObj = require("./data/parking");

const addNewParkingObj = function (newParkingObj) {
    setTimeout(() => {
        parkingObj.push(newParkingObj);
    }, 1000);
}

addNewParkingObj({ car: 'Toyota Prado', owner: 'Mike Jognson', rego: 'MJD123', parkingId: 'P7' });

console.log(parkingObj);


/*setTimeout(()=>{
    console.log(parkingObj);
},2000);*/



