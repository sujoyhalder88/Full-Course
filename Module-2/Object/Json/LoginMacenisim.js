/**
 * 			Javascript Code to create a login mechanism using object
 */

const user = {
    name: "RELEVEL",
    userName: "relevel",
    password: "password:)",
    login: function (userName, password) {
        if (userName === this.userName && password === this.password) {
            console.log("Login Successfully");
        } else {
            console.log("Authentication Failed!!");
        }
    },
};
console.log(user.login());
