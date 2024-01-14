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