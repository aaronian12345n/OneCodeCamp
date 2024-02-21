// Shopping cart 1
// Define a class called Item
class Item {
    // Constructor method initializes a new Item object with provided name, price, and stock
    constructor(name, price, stock) {
        this.name = name;       
        this.price = price;     
        this.stock = stock;     
        this.sold = 0;          
    }

    // Method to log details of the item to the console
    logDetails() {
        console.log(`Item: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Sold: ${this.sold}`);
    }
    // Method to simulate buying an item
    buy() {
        if (this.stock > 0) {   
            console.log("Buying");   
            this.sold++;             
            this.stock--;            
        } else {
            console.log("Out of stock");  
        }
    }

    // Method to simulate returning an item
    returnItem() {
        if (this.sold > 0) {    
            console.log("Returning");   
            this.sold--;              
            this.stock++;               
        } else {
            console.log("No items to return");   
        }
    }
}


// Creating instances of Item
const item1 = new Item("Item 1", 10, 5);
const item2 = new Item("Item 2", 20, 10);
const item3 = new Item("Item 3", 30, 15);

// First instance operations
console.log("First Instance:");
item1.buy();
item1.buy();
item1.buy();
item1.returnItem();
item1.logDetails();

// Second instance operations
console.log("\nSecond Instance:");
item2.buy();
item2.buy();
item2.returnItem();
item2.returnItem();
item2.logDetails();

// Third instance operations
console.log("\nThird Instance:");
item3.returnItem();
item3.returnItem();
item3.returnItem();
item3.logDetails();
console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");

//House
class House {
    // Constructor method for initializing a new House object
    constructor(location, price, lot, type) {
        // Initialize instance variables with provided values
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        // Set discount based on the type of the house
        this.discount = (type === "Pre-selling") ? 0.20 : 0.05;
        // Calculate the total price of the house after applying discount
        this.totalPrice = this.calculateTotalPrice();
        this.show_all();
    }

    // Method to calculate the total price of the house after applying discount
    calculateTotalPrice() {
        return this.price * (1 - this.discount);
    }

    // Method to display all details of the house
    show_all() {
        // Output all details of the house to the console
        console.log(`Location: ${this.location}`);
        console.log(`Price: ${this.price}`);
        console.log(`Lot: ${this.lot}`);
        console.log(`Type: ${this.type}`);
        console.log(`Discount: ${this.discount}`);
        console.log(`Total Price: ${this.totalPrice}`);
        console.log("-------------------------------------------");
    }
}

// Creating instances of House
// Each instance represents a different house with specific details
const house1 = new House("La Union", 1500000, "100sqm", "Pre-selling");
const house2 = new House("Metro Manila", 1000000, "150sqm", "Ready for Occupancy");
const house3 = new House("Cebu", 2000000, "120sqm", "Pre-selling");
const house4 = new House("Davao", 1800000, "200sqm", "Ready for Occupancy");
const house5 = new House("Batangas", 1200000, "80sqm", "Pre-selling");

//Email Builder

// Define a class called EmailBuilder
class EmailBuilder {
    // Constructor method is automatically called when a new EmailBuilder object is created
    constructor() {
        // Initialize instance variables to store email components
        this.recipient = '';       
        this.subject = '';         
        this.body = '';            
        this.attachments = [];    
    }

    // Method to set the recipient of the email
    setRecipient(recipient) {
        this.recipient = recipient;  
        return this;                 
    }

    // Method to set the subject of the email
    setSubject(subject) {
        this.subject = subject;      
        return this;                 
    }

    // Method to set the body of the email
    setBody(body) {
        this.body = body;            
        return this;                 
    }

    // Method to add an attachment to the email
    addAttachment(attachment) {
        this.attachments.push(attachment); 
        return this;                       
    }

    // Method to send the constructed email (log email details to console)
    send() {
        // Log email details to console
        console.log("Sending email:");
        console.log(`Recipient: ${this.recipient}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Body: ${this.body}`);
        console.log(`Attachments: ${this.attachments}`);
    }
}

// Example usage:
// Create a new EmailBuilder object and chain methods to construct an email
const email = new EmailBuilder()
    .setRecipient('aaronian_ros@gmail.com')  
    .setSubject('Meeting Tomorrow')          
    .setBody('Hi Aaron, see you there!')     
    .addAttachment('file1.pdf')              
    .send();                                 

