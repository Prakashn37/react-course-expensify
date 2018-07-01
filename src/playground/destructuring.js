//
//Object destructuring
//

/*const person = {
    name: 'Prakash',
    age: 23,
    location: {
        city: 'Bengaluru',
        temp: 35
    }
};

const {name:firstName = 'Anonymous',age} = person;
const {city,temp:temperature} = person.location;

console.log(`${firstName} is ${age}`);

if(city, temperature){
    console.log(`It is ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan   ',
    publisher: {
            name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);*/

//
//Array destructuring
//

const address = ['27 16th cross', 'Bengaluru' , 'Karnataka', '560037'];

const [street, city, state = 'Karnataka', zip] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '5', '10', '15'];

const [name,,price] = item;

console.log(`A medium ${name} costs ${price}`);

