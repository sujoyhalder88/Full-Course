// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 3;
// });

//===================== fetch async/await========================
const formSubmit = async (newBag) => {
    const response = await fetch("http://localhost:3000/bags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBag),
    });
    const newBag1 = await response.json();
    setBags([...bags, newBag1]);
};

//===========fetch==============
const aThing = fetch("http://restcountries.eu/rest/v2/all", {})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
console.log(aThing);
setTimeout(() => {
    console.log(aThing);
}, 1000);
