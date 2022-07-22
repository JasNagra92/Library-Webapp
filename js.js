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
// const createBook = function(title,author,pages,read){
// let title = new Book(title, author, pages,read);
// addBookToLibrary(title);
// }
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
const openBtn = document.getElementById("addBook");
openBtn.addEventListener('click',(e)=>{
  console.log(e)
document.getElementById('myForm').style.display = 'block'
})
