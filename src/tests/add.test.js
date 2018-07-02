const add = (a,b) => a+b;

const greeting = (name) => `Hello ${name}`;

test('should add two numbers', () =>{
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Greeting generator', () =>{
    const result = greeting('Prakash');
    expect(result).toBe('Hello Prakash');
});