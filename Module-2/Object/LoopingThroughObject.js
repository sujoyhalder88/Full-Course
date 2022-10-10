/**
 * Looping through an object

 */
//link:-----https://flexiple.com/javascript/loop-through-object-javascript/
const array_for_userdata = {
    name: "Ben Accord",
    email: "ben.english@example.com",
    age: 25,
    dob: "08/12/1996",
    active: true,
};
// for (const key in array_for_userdata) {
//     console.log(`${key}: ${array_for_userdata[key]}`);
// }

for (const key in array_for_userdata) {
    if (array_for_userdata.hasOwnProperty(key)) {
        console.log(`${key}: ${array_for_userdata[key]}`);
    }
}
