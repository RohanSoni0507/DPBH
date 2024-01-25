function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px';
}

const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('#close-menu');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);

const books = [
    {
        name: "Artificial Intelligence : Text Book 1",
        pdfLink: "books/tb1.pdf"
    },
];

function listBooks(books) {
    const table = document.querySelector('#book-list');
    table.innerHTML = '';

    for (const book of books) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download</a>`;
    }
}


function sortBooks() {
    const sortedBooks = quickSort(books);
    listBooks(sortedBooks);
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].name < pivot.name) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

window.addEventListener('load', () => {
    const showBooksPage = document.querySelector('#show-book-list');

    if (showBooksPage) {
        listBooks(books);
    }
    const sortBooksPage = document.querySelector('#sort-book-list');

    if (sortBooksPage) {
        sortBooks();
    }
});

const subjects = [
    { name: 'Introduction to Dark Patterns', image: 'images/pqt.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/pqtr.pdf"
        },
    ] },
    { name: 'Types of Dark Patterns', image: 'images/daa1.jpg', books: [
        {
            name: "List of Books",
            pdfLink: "books/daabooklist.pdf"
        },
    ] },
    { name: 'Recognizing Manipulative Design', image: 'images/iot.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/iotr.pdf"
        },
    ] },
    { name: 'Case Studies', image: 'images/dms.jpg', books: [
        {
        name: "Course Plan 21CSC206T AI_2324_even",
        pdfLink: "books/dbmscp.pdf"
        },
    ] },
    { name: 'Impact on User Behavior', image: 'images/se.jpg', books: [
        {
            name: "Last Year Question Paper",
            pdfLink: "books/seques.pdf"
        },
    ] },
    { name: 'Legal Aspects and Consumer Rights', image: 'images/ai.jpg', books: [
        {
            name: "Text Book 1",
            pdfLink: "books/tb1.pdf"
        },
    ] },

    { name: 'Tips for Safe Online Shopping', image: 'images/uhv.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/uhvr.pdf"
        },
    ] },
    { name: 'Interactive Quizzes and Scenarios', image: 'images/daa2.jpg', books: [
        {
            name: "List of Lab Experiments",
            pdfLink: "books/list.pdf"
        },
    ] },
    { name: 'Video Tutorials', image: 'images/ccts.jpg', books: [
        {
            name: "Youtube Video Recommendation",
            pdfLink: "books/cctsr.pdf"
        },
    ] },
    { name: 'Updates on Emerging Patterns', image: 'images/cc.jpg', books: [
        {
            name: "All Subjects Syllabus 2021",
            pdfLink: "books/ass.pdf"
        },
    ] },
    { name: 'FAQs and Troubleshooting', image: 'images/you.jpg', books: [
        {
            name: "Probability and Queueing Theory : Youtube Playlist Recommendation",
            pdfLink: "books/pqtr.pdf"
        },
    ] },
    { name: 'User Testimonials and Experiences', image: 'images/tt.jpg', books: [
        {
            name: "Time Table - 4th Semester",
            pdfLink: "books/tt.pdf"
        },
    ] },
];
function createSubjectCards() {
    const subjectCardsContainer = document.querySelector('.subject-cards');

    subjects.forEach((subject) => {
        const card = document.createElement('div');
        card.classList.add('subject-card');

        const image = document.createElement('img');
        image.src = subject.image;
        image.alt = subject.name;
        image.classList.add('subject-image');

        const name = document.createElement('div');
        name.textContent = subject.name;
        name.classList.add('subject-name');

        card.appendChild(image);
        card.appendChild(name);
        card.addEventListener('click', () => displayBooks(subject.books));

        subjectCardsContainer.appendChild(card);
    });
}

function displayBooks(books) {
    const booksList = document.querySelector('.books-list');
    booksList.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('book-table');

    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const linkHeader = headerRow.insertCell(1);
    nameHeader.textContent = 'Book Name';
    linkHeader.textContent = 'Link';

    books.forEach((book) => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download</a>`;
    });

    booksList.appendChild(table);
}

window.addEventListener('load', createSubjectCards);