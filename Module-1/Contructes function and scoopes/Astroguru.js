/*
1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”
*/

function astroguru(nc, sn, l, j) {
    console.log(
        `You will be a ${j} in ${l} and married to ${sn} with ${nc} kids`
    );
}
astroguru(2, "mili", "kolkata", "developer");
