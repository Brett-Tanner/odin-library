"use strict";
const library = [];
const bookCase = document.getElementById("bookcase");
const addBookButton = document.getElementById("addBook");
const bookForm = document.getElementById("bookForm");
const submitBook = document.getElementById("submitBook");
submitBook.addEventListener("click", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const title = titleInput instanceof HTMLInputElement && titleInput.value !== ""
        ? titleInput.value
        : "Untitled";
    const authorInput = document.getElementById("author");
    const author = authorInput instanceof HTMLInputElement && authorInput.value !== ""
        ? authorInput.value
        : "Anonymous";
    const pagesInput = document.getElementById("pages");
    const pages = pagesInput instanceof HTMLInputElement && pagesInput.value
        ? parseInt(pagesInput.value)
        : 0;
    const checkBox = document.getElementById("read");
    const read = checkBox instanceof HTMLInputElement && checkBox.checked ? true : false;
    addBook(title, author, pages, read);
});
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
    showLibrary();
}
function createDisplayBook(book) {
    const displayBook = document.createElement("div");
    displayBook.classList.add("book");
    const title = document.createElement("h3");
    title.innerText = book.title;
    displayBook.appendChild(title);
    const author = document.createElement("h4");
    author.innerText = `By: ${book.author}`;
    displayBook.appendChild(author);
    const info = document.createElement("div");
    info.classList.add("info");
    const pages = document.createElement("p");
    pages.innerText = book.pages.toString();
    info.appendChild(pages);
    const read = document.createElement("p");
    read.innerText = book.read ? "Read" : "Unread";
    info.appendChild(read);
    displayBook.appendChild(info);
    return displayBook;
}
function showLibrary() {
    bookCase.innerHTML = "";
    bookCase.appendChild(addBookButton);
    for (const book of library) {
        const displayBook = createDisplayBook(book);
        bookCase === null || bookCase === void 0 ? void 0 : bookCase.appendChild(displayBook);
    }
}
for (let i = 0; i < 10; i++) {
    addBook("Pizza", "Pizza Lover", 10, false);
}
