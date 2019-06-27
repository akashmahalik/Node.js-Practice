var square = (x) => {
    var result = x*x;
    return result;
};

console.log(square(9));

var square_arr = (x)=> x*x;
//var square_arr = x=> x*x; //if one argument braces not reqd


console.log(square_arr(8));

var user = {
    name: 'Akash',
    sayHi: () => {
        // console.log(arguments); //arguments dont work in arrow function

        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);

    }
};
// arrow functions do not bind this keyword !!!
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
