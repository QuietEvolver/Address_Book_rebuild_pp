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

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const firstName = (document.getElementById("input-value-1")).value;
  document.getElementById("output-passage").removeAttribute("class");
  document.getElementById("user-input").innerText = computeInput(numToArray(inputNumber));

}

window.addEventListener("load", function(){
  document.querySelector("form#number-in").addEventListener("submit", handleFormSubmission);
});