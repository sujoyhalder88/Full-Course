// Call Back hell

let stocks = {
    Fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
    //get an order

    setTimeout(function () {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);

        //order placed, call production to start
        call_production();
    }, 2000);
};

let production = () => {
    // console.log("Production has started");
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(
                    `${stocks.liquid[0]} and ${stocks.liquid[1]} Added`
                );
                setTimeout(() => {
                    console.log("Start the Machine");
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`);
                            setTimeout(() => {
                                console.log("serve Ice Cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(0, production);
