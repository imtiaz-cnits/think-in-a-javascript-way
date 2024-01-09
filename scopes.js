var x = 23;

// parent er dunia

function myFunc () {
    // myFunc/child er dunia
    var y = 10;

    // calling parent var inside child function
    console.log(`${x} from myFunc()`);
}

myFunc();

console.log(x);