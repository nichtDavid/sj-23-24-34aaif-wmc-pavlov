// 1. Application State
class Book {
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

    getBooks()
    {
        return state.books;
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

//3. DOM Node References
const booklist = document.getElementById('book-list');
const bookAdd = document.getElementById('book-add');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const hardcoverInput = document.getElementById('hardcover');
const priceInput = document.getElementById('price');

//4. DOM Node Creation Functions
function createBookElement(book)
{

}

//5. Render Function
function render()
{
    booklist.innerHTML = '';
    const books = getBooks();
    books.forEach(book => {
        booklist.appendChild(createBookElement(book));
    });
}

//8. Initial Render
render();
