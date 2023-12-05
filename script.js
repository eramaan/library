//  inizialise library and the book object constructor and add some titles
 let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
let eragon = new Book("Eragon", "C. Paolini", 684, false);
let harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);
let theLionTheWitchAndTheWardrobe = new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 206, false);
let aGameOfThrones = new Book("A Game of Thrones", "George R.R. Martin", 694, true);

myLibrary.push(theHobbit);
myLibrary.push(eragon);
myLibrary.push(harryPotter);
myLibrary.push(theLionTheWitchAndTheWardrobe);
myLibrary.push(aGameOfThrones);

console.log(myLibrary);

//  display the books
function displayLibrary(item, index) {
    if (item.read === true) {
        document.querySelector("#shelf").insertAdjacentHTML( "beforeend" , "<div class=\"book\" data-index-number=\"" + index + "\"><p class=\"author\">" + item.author + "</p><p class=\"title\">" + item.title + "</p><p class=\"pages\">" + item.pages + "</p><div class=\"btn\"><button><span class=\"material-symbols-outlined read\">visibility</span></button><button class=\"delete\"><span class=\"material-symbols-outlined\">delete</span></button></div></div>");
    } else {    
        document.querySelector("#shelf").insertAdjacentHTML( "beforeend" , "<div class=\"book\" data-index-number=\"" + index + "\"><p class=\"author\">" + item.author + "</p><p class=\"title\">" + item.title + "</p><p class=\"pages\">" + item.pages + "</p><div class=\"btn\"><button><span class=\"material-symbols-outlined read\">visibility_off</span></button><button class=\"delete\"><span class=\"material-symbols-outlined\">delete</span></button></div></div>");
    }
}

myLibrary.forEach(displayLibrary);

//  create the variables for the form
let titleField = "a";
let authorField = "b";
let pagesField = "c";
let readField = false; 

//  access the buttons
let submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", addBookToLibrary);


// functions
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

    updateLibrary()
}

function updateLibrary() {
    const lastIndex = myLibrary.length - 1; 
    if (readField === true) {
        document.querySelector("#shelf").insertAdjacentHTML( "beforeend" , "<div class=\"book\" data-index-number=\"" + lastIndex + "\"><p class=\"author\">" + authorField + "</p><p class=\"title\">"+ titleField + "</p><p class=\"pages\">" + pagesField + "</p><div class=\"btn\"><button><span class=\"material-symbols-outlined read\">visibility</span></button><button class=\"delete\"><span class=\"material-symbols-outlined\">delete</span></button></div></div>");
    } else {
        document.querySelector("#shelf").insertAdjacentHTML( "beforeend" , "<div class=\"book\" data-index-number=\"" + lastIndex + "\"><p class=\"author\">" + authorField + "</p><p class=\"title\">"+ titleField + "</p><p class=\"pages\">" + pagesField + "</p><div class=\"btn\"><button><span class=\"material-symbols-outlined read\">visibility_off</span></button><button class=\"delete\"><span class=\"material-symbols-outlined\">delete</span></button></div></div>");
    }

    //again thanks chat that told me how to add again the listener to the new created elements
    let newDeleteButton = document.querySelector(`.book[data-index-number="${lastIndex}"] .delete`);
    newDeleteButton.addEventListener("click", deleteBook);

    let newReadButton = document.querySelector(`.book[data-index-number="${lastIndex}"] .read`);
    newReadButton.addEventListener("click", readToggle);
}


let deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((deleteButton) => deleteButton.addEventListener("click", deleteBook));

// function deleteBook() {
//     console.log("click");
//     indexToDelete = document.querySelector(".book").getAttribute("data-index-number")
//     myLibrary.splice(indexToDelete, 1);
//     bookToDelete = document.querySelector(".book").getAttribute('data-index-number="' + indexToDelete + '"')
//     bookToDelete.remove();
//     myLibrary.forEach(displayLibrary);
//     console.log(myLibrary);
// }

//thanks chat that gived me the rght code, mine what a little fcked up

function deleteBook(event) {
    const clickedButton = event.target;
    const bookElement = clickedButton.closest(".book");

    if (bookElement) {
        const indexToDelete = bookElement.getAttribute("data-index-number");

        if (indexToDelete !== null) {
            // Remove the book from the array
            myLibrary.splice(indexToDelete, 1);

            // Remove the book from the UI
            bookElement.remove();

            // Re-index the remaining books in the UI
            myLibrary.forEach((book, index) => {
                const bookElement = document.querySelector(`.book[data-index-number="${index}"]`);
                if (bookElement) {
                    bookElement.setAttribute("data-index-number", index);
                }
            });

            console.log(myLibrary);
        }
    }
}

let readButtons = document.querySelectorAll(".read");
readButtons.forEach((readButton) => readButton.addEventListener("click", readToggle));

function readToggle(event) {
    console.log("readclick")
    const clickedButton = event.target;
    const bookElement = clickedButton.closest(".book");
    const indexToToggle = bookElement.getAttribute("data-index-number");

    myLibrary[indexToToggle].read = !myLibrary[indexToToggle].read;
    
    let readIcon = bookElement.querySelector(".read");

    if (myLibrary[indexToToggle].read === true) {
        readIcon.textContent = "visibility";
    } else {
        readIcon.textContent = "visibility_off";
    }

    console.log(indexToToggle);
    console.log(myLibrary);
    }