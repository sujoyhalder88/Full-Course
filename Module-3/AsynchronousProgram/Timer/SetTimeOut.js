/*
function product() {
    setTimeout(() => console.log("Cake is ready"), 2000);
}
product();
*/

/*
function product() {
    setTimeout(
        (Delisious) => console.log(Delisious + " Cake is ready"),
        2000,
        "  Choco"
    );
}
product();

*/

const getFood = setTimeout(
    (food) => {
        console.log("Our " + food + " is ready");
    },
    2000,
    "Pizza"
);
clearTimeout(getFood);
