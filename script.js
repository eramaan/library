let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
let eragon = new Book("Eragon", "C. Paolini", 684, true);
let harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);
let theLionTheWitchAndTheWardrobe = new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 206, true);
let aGameOfThrones = new Book("A Game of Thrones", "George R.R. Martin", 694, true);

myLibrary.push(theHobbit);
myLibrary.push(eragon);
myLibrary.push(harryPotter);
myLibrary.push(theLionTheWitchAndTheWardrobe);
myLibrary.push(aGameOfThrones);

console.log(myLibrary);

function addBookToLibrary() {
  // do stuff here
}