let getUser = function (done1) {
    setTimeout(() => {
        done1({user: "TestUser", email: "testuser@invenco.com"});
    }, 1000);
};
let getAddress = function (user, done) {
    setTimeout(() => {
        if (user.email === 'testuser@invenco.com') {
            done({address: "Auckalnd CBD"});
        } else {
            done("Error: user not exist")
        }
    }, 4000);
};
let getDOB = function (user, done) {
    setTimeout(() => {
        if (user.email === 'testuser@invenco.com') {
            done({dob: "12/05/1985"});
        } else {
            done("Error: user not exist")
        }
    }, 1000);
};

getUser(function (userResult) {
    console.log(userResult);
    getAddress(userResult, function (userAddress) {
        console.log(userAddress);
        getDOB(userResult, function (userDOB) {
            console.log(userDOB);
        });
    });
});
