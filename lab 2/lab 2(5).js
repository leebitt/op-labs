const contacts = [
    { name: "Dani", phone: "078-437-1084" },
    { name: "Jane", phone: "987-654-3210" },
    { name: "Bob", phone: "333-216-7840" },
    { name: "Alice", phone: "555-196-4567" },
];

function findPnoneByName(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone;
        }
    }
}

console.log(findPnoneByName("Jane"));
console.log(findPnoneByName("Dani"));