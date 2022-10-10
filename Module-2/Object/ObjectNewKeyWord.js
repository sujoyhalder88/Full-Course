/**
 *   . Using the new Javascript keyword, we can create a new object.
 */

function Laptop(make, model, cores) {
    this.make = make;
    this.model = model;
    this.cores = cores;
}
let l = new Laptop("Apple", "mac book pro", 10);
console.log(l.model);
