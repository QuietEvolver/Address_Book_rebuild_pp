// Business Logic for AddressBook ---------
// It will make the new AddressBook() global so a new instance is only created once and the new Contacts increment to that particular AB instance.
const addressBook = new AddressBook(); 

function AddressBook() {
  this.currentId = 0;
  this.contacts = {};
}


AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

// UPDATE (CRUD)

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};
// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}; 

Contact.prototype.wholeContact = function(){
   return this.firstName + " " + this.lastName  + " Id: " + this.id + " Phone Number: " + this.phoneNumber;
  }

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const firstName = (document.getElementById("input-value-1")).value;
  const lastName = (document.getElementById("input-value-2")).value;
  const phoneNumber = (document.getElementById("input-value-3")).value;
  console.log("First Name: ", firstName);
  console.log("last Name: ", lastName);
  console.log("Phone: ", phoneNumber);
  // instance ofAB
  // must pass in corresponding params in order for fx to run
  // create any contact instance(s) for the AB
  console.log("Create addressBook instance", addressBook);
  let contacts = new Contact(firstName, lastName, phoneNumber); 
  console.log(" Create contact instance: ", contacts);
  // // addressBook.assignId(contacts);// invoke the assign ID fxn method
  // console.log("addressBook.assignId(contacts);" , addressBook.assignId(contacts));
  addressBook.addContact(contacts);
  addressBook.findContact(contacts);
  let addressContactsStrToArr = Array.from(addressBook);// addressBook.split(contacts); // push contact into AB
  console.log("addressContactsStrToArr: ", addressContactsStrToArr);
  addressContactsStrToArr.push(contacts);
  console.log("addressBook.contacts: ", addressBook.contacts);
  contacts.fullName(); // calls fullNm fx to DOM
  document.getElementById("output").innerText =  contacts.wholeContact(); // calling the method on the instance prints output to DOM
  console.log("addressBook: ", addressBook); 
}

window.addEventListener("load", function(){
  document.querySelector("form#contact-in").addEventListener("submit", handleFormSubmission);
});