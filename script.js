// // global library
// const myLibrary = [];

// // constructor
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.readText = read ? "already read" : "not read yet";
//   this.info = function () {
//     return `${title} by ${author}, ${pages} pages, ${this.readText}`;
//   };
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());

// function addBookToLibrary() {
//   let bookToAdd = prompt("Add a book title", "Boook");
//   myLibrary.push(bookToAdd);
// }

// addBookToLibrary();

// console.log(myLibrary);

// use innerText to display library

// factory function
const Book = (title, author, pages, read) => {
  const readText = read ? "already read" : "not read yet";
  const info = () => {
    return `${title} by ${author}, ${pages} pages, ${readText}`;
  };
  return {
    title,
    author,
    pages,
    readText,
    info,
  };
};

// module
const library = (() => {
  bookList = [];

  const addButton = document.querySelector("button");
  const libraryDiv = document.querySelector("div");

  const addBook = () => {
    let bookToAdd = prompt("Add a book title", "Boook");
    bookList.push(bookToAdd);
    libraryDiv.innerHTML = bookList;
  };

  addButton.addEventListener("click", addBook);

  removeBook = (book) => {};

  return {
    addBook,
    removeBook,
  };
})();
