let getUser = function () {
    setTimeout(() => {
        return {user: "TestUser", email: "testuser@invenco.com"}
    }, 1000);
};

let user = getUser();
console.log(user);
