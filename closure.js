
var num1 = 2;
var num2 = 3;

var sum1 = function () {
    return num1 + num2;
}

console.dir(sum1);


// closure example 02
var numb1 = 3;
var sum2 = function () {
    var numb2 = 3;
    return function () {
        return numb1 + numb2;
    };
};
var myFunc = sum2();
console.dir(myFunc);



/*
function main (input) {
    const data = input.split( " " );
    let sum = 0;
    for (let i = 0; i<data.length; i++) {
        let item = Number(data[i]);
        sum += item;
    }
    const average = sum/3;
    console.log("Average: " + average.toFixed(2));
    // let toNumber = (Number(num[0])+Number(num[1])+Number(num[2]))/3;
    // console.log("Average: " + toNumber.toFixed(2));
}
main("10 20 30");
*/



/*
function main (input) {
    const data = input.split( " " );
    let a = Number(data[0]);
    let b = Number(data[1]);
    let c = Number(data[2]);
    if(a>b && a>c) {
        console.log(a);
    } 
    else if(b>c && b>a) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
main("89 56 30");
*/



/*
function main (input) {
    let salary = Number(input);
    let bonus = salary*10/100;
    console.log(Math.floor(bonus.toFixed(0)));
}
main("5000.90");
*/
