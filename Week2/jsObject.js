// javascript object syntax example

let student = {
    studentID: 12345,
    studentName: "John",
    studentPhone: "123-456-7890",
    studentEmail: "john@doe.com"
};

console.log(`Name : ${student.studentName}`);

let student1 = {
    id: 12345,
    name: "John",
    phone: "123-456-7890",
    email: "john@doe.com",

    setID: function (newID) {
        this.id = newID;
    },

    getID: function() {
        return this.id;
    },

    setName: function (newName) {
        this.name = newName;
    },

    getName: function() {
        return this.name;
    },

    setPhone: function (newPhone) {
        this.name = newPhone;
    },

    getPhone: function() {
        return this.phone;
    },

    setEmail: function (newEmail) {
        this.email = newEmail;
    },

    getEmail: function() {
        return this.email;
    },

    outputNameDelay: function () {
        let that = this; //initialize local variable so this function can know what the object properties are
        setTimeout(function () {
            console.log(`After 1 second timeout: ${that.name}`);
        }, 1000);
    }
};

console.log(`Student Name: ${student1.name}`);
console.log(`Student Name with getName: ${student1.getName()}`);

student1.outputNameDelay();