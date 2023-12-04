//  inizialise library and the book object constructor and add some titles
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

//  create the variables for the form
let titleField = "a";
let authorField = "b";
let pagesField = "c";
let readField = false; 

//  access the form button
let submitButton = document.querySelector("#submit-btn")
submitButton.addEventListener("click", addBookToLibrary);


function addBookToLibrary() {
    console.log("clicked");
    titleField = document.querySelector("#title").value;
    authorField = document.querySelector("#author").value;
    pagesField = parseInt(document.querySelector("#pages").value);
    readField = document.querySelector("#read").checked;
    console.log(titleField + authorField + pagesField + readField);

    let newBook = new Book(titleField, authorField, pagesField, readField);
    myLibrary.push(newBook)
    console.log(myLibrary);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
  }