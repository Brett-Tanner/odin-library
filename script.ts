let library: Book[] = [];

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
  console.log(library);
}

addBook("Pizza", "Pizza Lover", 10, false);
