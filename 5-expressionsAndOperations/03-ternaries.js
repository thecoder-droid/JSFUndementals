let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative');

if (x > 0) {
    console.log('x is positive');
} else {
    console.log('x is negative');
}

let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting!');
}

greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting');



let age = 'Happy Birthday!'

if (age.length > 20) {
    console.log('Happy birthday to you!');
} else if (age.length == 20) {
    console.log('Happy birthday you old fart!');
} else {
    console.log('Happy birthday!');
}

let c = 17;

c < 2 ? console.log('c is happy') : console.log('x is sad');

if (c < 2) {
    console.log('c is happy');
} else {
    console.log('c is sad');
}