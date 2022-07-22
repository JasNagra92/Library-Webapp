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
function createBook(title,author,pages,read){
let book1 = new Book(title, author, pages,read);
console.log(book1)
addBookToLibrary(book1);
}
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
const openBtn = document.getElementById("openForm");
openBtn.addEventListener('click',()=>{
document.getElementById('myForm').style.display = 'block'
})
const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', function(){
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  createBook(title,author,pages)
  document.forms['bookform'].reset()
  document.getElementById('myForm').style.display = "none"
  displayBooks(myLibrary)
})