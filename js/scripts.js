// // Business Logic for AddressBook ---------
// // It will make the new AddressBook() global so a new instance is only created once and the new Contacts increment to that particular AB instance.
// const addressBook = new AddressBook(); 

// function AddressBook() {
//   this.currentId = 0;
//   this.contacts = {};
// }

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] !== undefined) {
//     return this.contacts[id];
//   }
//   return false;
// };

// // UPDATE (CRUD)

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// };
// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }; 

// Contact.prototype.wholeContact = function(){
//    return this.firstName + " " + this.lastName  + " Id: " + this.id + " Phone Number: " + this.phoneNumber;
// }

// // // User Interface Logic ---------
// // // Ep: https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/address-book-adding-interactivity
// // // let addressBook = new AddressBook();
// // function listContacts(addressBookToDisplay) {
// //   let contactsDiv = document.querySelector("div#contacts");
// //   contactsDiv.innerText =  null;
// //   const ul = document.createElement("ul");
// //   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
// //     const contact = addressBookToDisplay.findContact(key);
// //     const li = document.createElement("li");
// //     li.append(contact.fullName());
// //     li.setAttribute("id", contact.id);
// //     ul.append(li);
// //   });
// //   contactsDiv.append(ul);
// // }

// // // event.target represents the element that the event originated from. In our case, it's our <li> element that we click on inside of the contacts div, and the id property in event.target.id corresponds to the list item's id attribute
// // /*- We're able to create an event handler that reacts to clicks on elements that don't yet exist in the DOM.
// // -By accessing event.target, we're able to write code based on the data of elements that do not yet exist, and do stuff with that data.*/
// // function displayContactDetails(event) {
// //   console.log("The id of this <li> is " + event.target.id + ".");
// //   const contact = addressBook.findContact(event.target.id);
// //   document.querySelector(".first-name").innerText = contact.firstName;
// //   document.querySelector(".last-name").innerText = contact.lastName;
// //   document.querySelector(".phone-number").innerText = contact.phoneNumber;
// //   document.querySelector("h2").removeAttribute("class");
// // }
// function displayContactDetails(e){
//   // const ul = document.createElement("ul");
//   // Object.keys(addressBook.contacts).forEach(function(key) {
//   //   const contact = addressBook.findContact(key);  
//   //   const li = document.createElement("li");
//   //   li.append(contact.fullName());
//   //   li.setAttribute("id", contact.id);
//   //   ul.append(li);
//   // });
//   const contact = addressBook.findContact(e.target.id);
//   console.log(contact);
//   document.querySelector(".first-name").innerText = contact.firstName;
//   document.querySelector(".last-name").innerText = contact.lastName;
//   document.querySelector(".phone-number").innerText = contact.phoneNumber;
//   document.querySelector("div#contact-details").removeAttribute("class");
// }

// // event handler for the find by id


// function handleFormSubmission(e){
//   e.preventDefault();
//   const firstName = (document.getElementById("input-value-1")).value;
//   const lastName = (document.getElementById("input-value-2")).value;
//   const phoneNumber = (document.getElementById("input-value-3")).value;
//   // instance ofAB
//   // must pass in corresponding params in order for fx to run
//   // create any contact instance(s) for the AB
//   console.log("Create addressBook instance", addressBook);
//   let contacts = new Contact(firstName, lastName, phoneNumber); 
//   console.log(" Create contact instance: ", contacts);
//   // // addressBook.assignId(contacts);// invoke the assign ID fxn method
//   // console.log("addressBook.assignId(contacts);" , addressBook.assignId(contacts));
//   addressBook.addContact(contacts);
//   addressBook.findContact(contacts);
//   let addressContactsStrToArr = Array.from(addressBook);// addressBook.split(contacts); // push contact into AB
//   console.log("addressContactsStrToArr: ", addressContactsStrToArr);
//   addressContactsStrToArr.push(contacts);
//   console.log("addressBook.contacts: ", addressBook.contacts);
//   contacts.fullName(); // calls fullNm fx to DOM
//   document.getElementById("output").innerText =  contacts.wholeContact(); // calling the method on the instance prints output to DOM
//   console.log("addressBook: ", addressBook); 
//   const searchId = document.getElementById("input-value-id").value;
  
//   let search = addressBook.findContact(searchId);
//   const contact = addressBook.findContact(e.target.id);
//   console.log("searchId ", searchId );
//   console.log("search()", search );
//   document.getElementById("output").innerText = contact;
// }

// window.addEventListener("load", function(){
//   document.querySelector("form#contact-in").addEventListener("submit", handleFormSubmission);
//   // on click button fxMethod()ln~51
//   document.querySelector("button#search-id-button").addEventListener("click", displayContactDetails);   
//   // document.querySelector("div#contacts").addEventListener("click", displayContactDetails);  
// });

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

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

// User Interface Logic ---------
let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}

function displayContactDetails(event) {
  const contact = addressBook.findContact(event.target.id);
  document.querySelector(".first-name").innerText = contact.firstName;
  document.querySelector(".last-name").innerText = contact.lastName;
  document.querySelector(".phone-number").innerText = contact.phoneNumber;
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
}

function handleDelete(event) {
  addressBook.deleteContact(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#contact-details").setAttribute("class", "hidden");
  listContacts(addressBook);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
  addressBook.addContact(newContact);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
}

window.addEventListener("load", function (){
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});