let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + " pages";
  this.read = read;
  this.inTable = "false";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
let hobbit = new Book("The Hobbit", "J.R. Tolkien", 300, "read");
addBookToLibrary(hobbit);

function displayBooks(array) {
  array.forEach((book) => {
    let table = document.getElementById("booktable");

    if (book.inTable == "false") {
      let row = table.insertRow(1);
      let title = row.insertCell(0);
      let author = row.insertCell(1);
      let pages = row.insertCell(2);
      let read = row.insertCell(3);
      title.innerHTML = book.title;
      author.innerHTML = book.author;
      pages.innerHTML = book.pages;
      read.innerHTML = book.read;
      book.inTable = "true";
    }
  });
}
