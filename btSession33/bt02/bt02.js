var phoneBook ={
    contactl: {
    name: "Alice",
    phone: "123-456-7890",
    email:"alice@example.com",
    },
    contact2: {
    name: "Bob",
    phone: "987-654-3210",
    email:"bob@example.com",
},
};

for (let key in phoneBook) {
    const contact = phoneBook[key];
    console.log(`Liên lạc: ${key}`);
    console.log(`Tên: ${contact.name}`);
    console.log(`Số điện thoại: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
};