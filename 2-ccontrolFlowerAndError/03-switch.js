let friend = 'Tom';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring me sourdough bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn, do you own a wolf in your back yard?');
        break;
    case 'Alecx':
        console.log('Hey Alex, how many Magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    console.log('yep is a string or boolean');
    break;
    default:
        console.log('yep is not a string or a number');
}