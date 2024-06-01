// 1. Application State
class Book 
{
    #title;
    #author;
    #genre;
    #hardcover;
    #price;

    constructor(title, author, genre, hardcover, price)
    {
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#hardcover = hardcover;
        this.#price = price;
    }

    get Title()
    {
        return this.#title;
    }

    get Author()
    {
        return this.#author;
    }

    get Genre()
    {
        return this.#genre;
    }

    get IsHardcover()
    {
        return this.#hardcover;
    }

    get Price()
    {
        return this.#price;
    }
}

const state = {
    books: [
        new Book('Fourth Wing', 'Rebecca Yarros', 'Fantasy', false, 13.99),
        new Book('Wir Kinder vom Bahnhof Zoo', 'Christiane Felscherinow', 'Biografie', false, 10.99),
        new Book('Sadako will leben', 'Karl Bruckner', 'Roman', true, 12.99)
    ]
};

//2. State Accessors
function addNewBookToState(title, author, genre, hardcover, price)
{
    state.books.push(new Book(title, author, genre, hardcover, price));
}

function delBookFromState(book)
{
    let idx = state.books.indexOf(book);
    if(idx !== -1)
    {
        state.books.splice(idx, 1);
    }
}

//3. DOM Node References
const itemlist = document.getElementById('book-list');
const bookAdd = document.getElementById('book-add');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const hardcoverInput = document.getElementById('hardcover');
const priceInput = document.getElementById('price');

//4. DOM Node Creation Functions
function createBookElement(book)
{
    const bookItem = document.createElement('tr');

    const bookTitle = document.createElement('td');
    const bookAuthor = document.createElement('td');
    const bookGenre = document.createElement('td');
    const bookHardcover = document.createElement('td');
    const bookPrice = document.createElement('td');

    bookTitle.textContent = book.Title;
    bookAuthor.textContent = book.Author;
    bookGenre.textContent = book.Genre;
    bookHardcover.textContent = book.IsHardcover ? "True" : "False";
    bookPrice.textContent = book.Price;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', (event) => delBookBtn(book));

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookGenre);
    bookItem.appendChild(bookHardcover);
    bookItem.appendChild(bookPrice);
    
    bookItem.appendChild(delBtn);

    return bookItem;
}

//5. Render Function
function render()
{
    itemlist.innerHTML = '';
    const booklist = state.books;
    booklist.forEach(book => {
        itemlist.appendChild(createBookElement(book));
    });
}

//6. Event Handlers
function addBookBtn()
{
    event.preventDefault();
    addNewBookToState(titleInput.value, authorInput.value, genreInput.value, hardcover.value, priceInput.value);
    render();
}

function delBookBtn(book)
{
    delBookFromState(book);
    render();
}

//7. Initial Bindings
bookAdd.addEventListener('click', addBookBtn);

//8. Initial Render
render();
