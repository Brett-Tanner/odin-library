const library: Book[] = [];
const bookCase = document.getElementById("bookcase")!;
const addBookButton = document.getElementById("addBook")!;
const modalToggles = document.querySelectorAll(".modalToggle")!;
const addBookModal = document.getElementById("addBookModal")!;
const submitBook = document.getElementById("submitBook")!;

function addModalButton(modalToggles: NodeList) {
  modalToggles.forEach((button) => {
    button.addEventListener("click", () => {
      addBookModal.classList.toggle("show");
    });
  });
}

addModalButton(modalToggles);

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const title =
    titleInput instanceof HTMLInputElement && titleInput.value !== ""
      ? titleInput.value
      : "Untitled";
  const authorInput = document.getElementById("author");
  const author =
    authorInput instanceof HTMLInputElement && authorInput.value !== ""
      ? authorInput.value
      : "Anonymous";
  const pagesInput = document.getElementById("pages");
  const pages =
    pagesInput instanceof HTMLInputElement && pagesInput.value
      ? parseInt(pagesInput.value)
      : 0;
  const checkBox = document.getElementById("read");
  const read =
    checkBox instanceof HTMLInputElement && checkBox.checked ? true : false;

  addBook(title, author, pages, read);
});

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
  pages.innerText = `Pages: ${book.pages.toString()}`;
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
    const displayBook: HTMLDivElement = createDisplayBook(book);
    bookCase?.appendChild(displayBook);
  }
}

for (let i = 0; i < 10; i++) {
  addBook("Pizza", "Pizza Lover", 10, false);
}
