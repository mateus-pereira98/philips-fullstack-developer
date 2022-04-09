//object destructuring
const user = {
    id: 42,
    displayName: 'jDoe',
    fullName: { 
        fistName: 'John', 
        lastName: 'Doe'
    }
};

function getFullName({fullName: {fistName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(getFullName(user));