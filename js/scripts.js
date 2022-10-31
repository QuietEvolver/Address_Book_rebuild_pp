// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
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

  // let addressContactsStrToArr = addressBook.split(contacts); // push contact into AB
  // console.log("addressContactsStrToArr: ", addressContactsStrToArr);
  // // UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const firstName = (document.getElementById("input-value-1")).value;
  const lastName = (document.getElementById("input-value-2")).value;
  const phoneNumber = (document.getElementById("input-value-3")).value;
  console.log("First Name: ", firstName);
  console.log("last Name: ", lastName);
  console.log("Phone: ", phoneNumber);
  // instance ofAB
  let addressBook = new AddressBook(); 
  // must pass in corresponding params in order for fx to run
  // create any contact instance(s) for the AB
  console.log("addressBook instance", addressBook);
  let contacts = new Contact(firstName, lastName, phoneNumber); 
  console.log("contact instance: ", contacts);
  console.log("addressBook.contacts: ", addressBook.contacts);
  addressBook.addContact(contacts);
  
  document.getElementById("output").innerText = addressContacts;
}

window.addEventListener("load", function(){
  document.querySelector("form#contact-in").addEventListener("submit", handleFormSubmission);
});