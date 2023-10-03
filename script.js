const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readText = read ? "already read" : "not read yet";
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${this.readText}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());

function addBookToLibrary() {
  let bookToAdd = prompt("Add a book title", "Boook");
  myLibrary.push(bookToAdd);
}

addBookToLibrary();

console.log(myLibrary);
