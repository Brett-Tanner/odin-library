"use strict";
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
const newBook = new Book("Pizza", "Me", 10, false);
console.log(newBook);
