var person = {
    name: 'John',
    age: 25,
    address: 'Main 123 St',
};

console.log('Tên:', person.name);
console.log('Tuổi:', person.age);
console.log('Địa chỉ:', person.address);

delete person.age;

person.birthdate = '10-10-1999';

console.log(person);