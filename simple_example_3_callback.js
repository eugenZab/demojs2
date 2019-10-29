let getUser = function (done) {
    setTimeout(() => {
        done ({user: "TestUser", email: "testuser@invenco.com"});
    }, 1000);
};

getUser(function (user) {
    console.log(user);
});
