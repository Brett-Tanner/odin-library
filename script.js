"use strict";
const library = [];
const bookCase = document.getElementById("bookcase");
const addBookButton = document.getElementById("addBook");
const modalToggles = document.querySelectorAll(".modalToggle");
const addBookModal = document.getElementById("addBookModal");
const submitBook = document.getElementById("submitBook");
function bindModalButtons(modalToggles) {
    modalToggles.forEach((button) => {
        button.addEventListener("click", () => {
            addBookModal.classList.toggle("show");
        });
    });
}
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    createDisplayBook(book, index) {
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
        pages.innerText = `Pages: ${book.pages.toString()}`;
        info.appendChild(pages);
        const read = document.createElement("p");
        read.innerText = book.read ? "Read" : "Unread";
        info.appendChild(read);
        const removeButton = document.createElement("button");
        removeButton.dataset.index = index.toString();
        removeButton.classList.add("removeBook");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
            if (removeButton.dataset.index === undefined) {
                throw new Error("This button is missing an index");
            }
            const index = parseInt(removeButton.dataset.index);
            removeBook(index);
        });
        info.appendChild(removeButton);
        displayBook.appendChild(info);
        return displayBook;
    }
}
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
function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
    showLibrary();
}
function removeBook(index) {
    library.splice(index, 1);
    showLibrary();
}
function showLibrary() {
    bookCase.innerHTML = "";
    bookCase.appendChild(addBookButton);
    for (const book of library) {
        const displayBook = book.createDisplayBook(book, library.indexOf(book));
        bookCase === null || bookCase === void 0 ? void 0 : bookCase.appendChild(displayBook);
    }
}
for (let i = 0; i < 10; i++) {
    addBook("Pizza", "Pizza Lover", 10, false);
}
bindModalButtons(modalToggles);
