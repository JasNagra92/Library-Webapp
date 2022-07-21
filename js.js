let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = read
}

function addBookToLibrary(book){ 
    myLibrary.push(book)
}
let hobbit = new Book('The Hobbit', "J.R. Tolkien", 300, 'read');
addBookToLibrary(hobbit);

function displayBooks(array){
    
    for (let i = 0; i < array.length;i++){
        let table = document.getElementById("booktable");
        let row = table.insertRow(1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        title.innerHTML = array[i].title;
        author.innerHTML = array[i].author;
        pages.innerHTML = array[i].pages;
        read.innerHTML = array[i].read
     }
}
