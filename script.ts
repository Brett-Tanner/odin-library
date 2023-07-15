const library: Book[] = [];
const bookCase = document.getElementById("bookcase")!;

class Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBook(title: string, author: string, pages: number, read: boolean) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  showLibrary();
}

function createDisplayBook(book: Book) {
  // Create the book container
  const displayBook = document.createElement("div");
  displayBook.classList.add("book");

  // Create the heading info
  const title = document.createElement("h3");
  title.innerText = book.title;
  displayBook.appendChild(title);
  const author = document.createElement("h4");
  author.innerText = `By: ${book.author}`;
  displayBook.appendChild(author);

  // Create the detailed info
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
  for (const book of library) {
    const displayBook: HTMLDivElement = createDisplayBook(book);
    bookCase?.appendChild(displayBook);
  }
}

for (let i = 0; i < 10; i++) {
  addBook("Pizza", "Pizza Lover", 10, false);
}
