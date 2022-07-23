let myLibrary = [];
let table = document.getElementById("booktable");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + " pages";
  this.read = read;
  this.inTable = false;
}

function createBook(title, author, pages, read) {
  let book1 = new Book(title, author, pages, read);
  addBookToLibrary(book1);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(array) {
  array.forEach((book) => {
    if (book.inTable == false) {
      let row = table.insertRow(1);
      let title = row.insertCell(0);
      let author = row.insertCell(1);
      let pages = row.insertCell(2);
      let read = row.insertCell(3);
      let remove = row.insertCell(4);
      let removeBtn = document.createElement("button");
      removeBtn.dataset.id = book.title;
      removeBtn.dataset.delete = "delete";
      removeBtn.innerHTML = "remove book";
      remove.appendChild(removeBtn);

      let toggle = row.insertCell(5);
      let toggleBtn = document.createElement("button");
      toggleBtn.dataset.toggle = "toggle";
      toggleBtn.dataset.id = book.title;
      toggleBtn.innerHTML = "read";
      toggle.appendChild(toggleBtn);

      title.innerHTML = book.title;
      author.innerHTML = book.author;
      pages.innerHTML = book.pages;
      read.innerHTML = book.read;
      book.inTable = true;
    }
  });
}
function deleteRow(button) {
  button.parentNode.parentNode.remove();
}

table.addEventListener("click", function (e) {
  if (e.target.dataset.delete == "delete") {
    let index = myLibrary.findIndex(
      (book) => book.title === e.target.dataset.id
    );
    myLibrary.splice(index, 1);
    deleteRow(e.target);
  } else if (e.target.dataset.toggle == "toggle") {
    let book = myLibrary.find((book) => book.title == e.target.dataset.id);
    deleteRow(e.target);
    book.inTable = false;
    toggleRead(book);
  }
});

const openBtn = document.getElementById("openForm");
openBtn.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});
const addBookBtn = document.getElementById("addBook");
addBookBtn.addEventListener("click", function () {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.querySelector(`input[name="read"]:checked`).value;
  createBook(title, author, pages, read);
  document.forms["bookform"].reset();
  document.getElementById("myForm").style.display = "none";
  displayBooks(myLibrary);
});
function toggleRead(book) {
  if (book.read == "read") {
    book.read = "not-read";
  } else {
    book.read = "read";
  }
  displayBooks(myLibrary);
}