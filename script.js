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
    {
        name: "Artificial Intelligence : Text Book 2",
        pdfLink: "books/tb2.pdf"
    },
    {
        name: "Artificial Intelligence : Text Book 3",
        pdfLink: "books/tb3.pdf"
    },
    {
        name: "Design and Analysis of Algorithms (Lab) : Lab 2 - Linear search, Binary search",
        pdfLink: "books/daaexp2.pdf"
    },
    {
        name: "Artificial Intelligence : Syllabus",
        pdfLink: "books/aisys.pdf"
    },
    {
        name: "Artificial Intelligence : Course Plan 21CSC206T AI_2324_even",
        pdfLink: "books/aicp.pdf"
    },
    {
        name: "Database Management System : 21CSC205P -  DBMS syllabus",
        pdfLink: "books/dbmssys.pdf"
    },
    {
        name: "Database Management System : Course Plan 21CSC206T AI_2324_even",
        pdfLink: "books/dbmscp.pdf"
    },
    {
        name: "Design and Analysis of Algorithms (Theory) : List of Books",
        pdfLink: "books/daabooklist.pdf"
    },
    {
        name: "Design and Analysis of Algorithms (Lab) : List of Lab Experiments",
        pdfLink: "books/list.pdf"
    },
    {
        name: "All Subjects Syllabus 2021",
        pdfLink: "books/ass.pdf"
    },
    {
        name: "B.Tech 2021 regulations",
        pdfLink: "books/btr.pdf"
    },
    {
        name: "CSE Year Wise Curriculum 2021",
        pdfLink: "books/cywc.pdf"
    },
    {
        name: "Engineering and Technology handbook 2023-2024",
        pdfLink: "books/eath.pdf"
    },
    {
        name: "Events and Holidays 2023-2024",
        pdfLink: "books/eah.pdf"
    },
    {
        name: "Time Table - 4th Semester",
        pdfLink: "books/tt.pdf"
    },
    {
        name: "Probability and Queueing Theory : Youtube Playlist Recommendation",
        pdfLink: "books/pqtr.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Youtube Playlist Recommendation",
        pdfLink: "books/daar.pdf"
    },
    {
        name: "Internet of Things : Youtube Playlist Recommendation",
        pdfLink: "books/iotr.pdf"
    },
    {
        name: "Database Management System : Youtube Playlist Recommendation",
        pdfLink: "books/dbmsr.pdf"
    },
    {
        name: "Social Engineering : Youtube Video Recommendation",
        pdfLink: "books/ser.pdf"
    },
    {
        name: "Artificial Intelligence : Youtube Playlist Recommendation",
        pdfLink: "books/air.pdf"
    },
    {
        name: "UHV-II: Universal Human Values – Understanding Harmony and Ethical Human Conduct : Youtube Playlist Recommendation",
        pdfLink: "books/uhvr.pdf"
    },
    {
        name: "Critical and Creative Thinking Skills : Youtube Video Recommendation",
        pdfLink: "books/cctsr.pdf"
    },
    {
        name: "Social Engineering : Last Year Question Paper",
        pdfLink: "books/seques.pdf"
    },
    {
        name: "Probability and Queueing Theory : Unit 1 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/mathsunit12018.pdf"
    },
    {
        name: "Probability and Queueing Theory : Unit 2 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/mathsunit22018.pdf"
    },
    {
        name: "Probability and Queueing Theory : Unit 3 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/mathsunit32018.pdf"
    },
    {
        name: "Probability and Queueing Theory : Unit 4 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/mathsunit42018.pdf"
    },
    {
        name: "Probability and Queueing Theory : Unit 5 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/mathsunit52018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 1 (Part-1) - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit112018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 1 (Part-2) - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit122018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 2 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit22018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 3 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit32018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 4 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit42018.pdf"
    },
    {
        name: "Design and Analysis of Algorithms : Unit 5 - Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/daaunit52018.pdf"
    },
    {
        name: "Social Engineering : Social Engineering Unit-1 (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se12018.pdf"
    },
    {
        name: "Social Engineering : SE unit 1-4 (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se22018.pdf"
    },
    {
        name: "Social Engineering : SE merged 1-20pm (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se32018.pdf"
    },
    {
        name: "Social Engineering : se mcq with answers (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se42018.pdf"
    },
    {
        name: "Social Engineering : 18PDH103T - Social Engineering - 3 SEM (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se52018.pdf"
    },
    {
        name: "Social Engineering : 18PDH103T - 3RD SEM (ACADEMIC REGULATIONS – 2018)",
        pdfLink: "books/se62018.pdf"
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
    { name: 'Probability and Queueing Theory', image: 'images/pqt.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/pqtr.pdf"
        },
        {
            name: "Unit 1 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/mathsunit12018.pdf"
        },
        {
            name: "Unit 2 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/mathsunit22018.pdf"
        },
        {
            name: "Unit 3 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/mathsunit32018.pdf"
        },
        {
            name: "Unit 4 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/mathsunit42018.pdf"
        },
        {
            name: "Unit 5 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/mathsunit52018.pdf"
        },
    ] },
    { name: 'Design and Analysis of Algorithms (Theory)', image: 'images/daa1.jpg', books: [
        {
            name: "List of Books",
            pdfLink: "books/daabooklist.pdf"
        },
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/daar.pdf"
        },
        {
            name: "Unit 1 (Part-1) : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit112018.pdf"
        },
        {
            name: "Unit 1 (Part-2) : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit122018.pdf"
        },
        {
            name: "Unit 2 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit22018.pdf"
        },
        {
            name: "Unit 3 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit32018.pdf"
        },
        {
            name: "Unit 4 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit42018.pdf"
        },
        {
            name: "Unit 5 : Handwritten Notes (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/daaunit52018.pdf"
        },
    ] },
    { name: 'Internet of Things', image: 'images/iot.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/iotr.pdf"
        },
    ] },
    { name: 'Database Management System', image: 'images/dms.jpg', books: [
        {
        name: "Course Plan 21CSC206T AI_2324_even",
        pdfLink: "books/dbmscp.pdf"
        },
        {
            name: "21CSC205P -  DBMS syllabus",
            pdfLink: "books/dbmssys.pdf"
        },
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/dbmsr.pdf"
        },
    ] },
    { name: 'Social Engineering', image: 'images/se.jpg', books: [
        {
            name: "Last Year Question Paper",
            pdfLink: "books/seques.pdf"
        },
        {
            name: "Youtube Video Recommendation",
            pdfLink: "books/ser.pdf"
        },
        {
            name: "Social Engineering Unit-1 (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se12018.pdf"
        },
        {
            name: "SE unit 1-4 (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se22018.pdf"
        },
        {
            name: "SE merged 1-20pm (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se32018.pdf"
        },
        {
            name: "se mcq with answers (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se42018.pdf"
        },
        {
            name: "18PDH103T - Social Engineering - 3 SEM (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se52018.pdf"
        },
        {
            name: "18PDH103T - 3RD SEM (ACADEMIC REGULATIONS – 2018)",
            pdfLink: "books/se62018.pdf"
        },
    ] },
    { name: 'Artificial Intelligence', image: 'images/ai.jpg', books: [
        {
            name: "Text Book 1",
            pdfLink: "books/tb1.pdf"
        },
        {
            name: "Text Book 2",
            pdfLink: "books/tb2.pdf"
        },
        {
            name: "Text Book 3",
            pdfLink: "books/tb3.pdf"
        },
        {
            name: "Syllabus",
            pdfLink: "books/aisys.pdf"
        },
        {
            name: "Course Plan 21CSC206T AI_2324_even",
            pdfLink: "books/aicp.pdf"
        },
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/air.pdf"
        },
    ] },

    { name: 'UHV-II: Universal Human Values – Understanding Harmony and Ethical Human Conduct', image: 'images/uhv.jpg', books: [
        {
            name: "Youtube Playlist Recommendation",
            pdfLink: "books/uhvr.pdf"
        },
    ] },
    { name: 'Design and Analysis of Algorithms (Lab)', image: 'images/daa2.jpg', books: [
        {
            name: "List of Lab Experiments",
            pdfLink: "books/list.pdf"
        },
        {
            name: "Lab 2 - Linear search, Binary search",
            pdfLink: "books/daaexp2.pdf"
        },
    ] },
    { name: 'Critical and Creative Thinking Skills', image: 'images/ccts.jpg', books: [
        {
            name: "Youtube Video Recommendation",
            pdfLink: "books/cctsr.pdf"
        },
    ] },
    { name: 'Course Curriculum', image: 'images/cc.jpg', books: [
        {
            name: "All Subjects Syllabus 2021",
            pdfLink: "books/ass.pdf"
        },
        {
            name: "B.Tech 2021 regulations",
            pdfLink: "books/btr.pdf"
        },
        {
            name: "CSE Year Wise Curriculum 2021",
            pdfLink: "books/cywc.pdf"
        },
        {
            name: "Engineering and Technology handbook 2023-2024",
            pdfLink: "books/eath.pdf"
        },
        {
            name: "Events and Holidays 2023-2024",
            pdfLink: "books/eah.pdf"
        },
    ] },
    { name: 'Youtube Playlists Recommendation', image: 'images/you.jpg', books: [
        {
            name: "Probability and Queueing Theory : Youtube Playlist Recommendation",
            pdfLink: "books/pqtr.pdf"
        },
        {
            name: "Design and Analysis of Algorithms : Youtube Playlist Recommendation",
            pdfLink: "books/daar.pdf"
        },
        {
            name: "Internet of Things : Youtube Playlist Recommendation",
            pdfLink: "books/iotr.pdf"
        },
        {
            name: "Database Management System : Youtube Playlist Recommendation",
            pdfLink: "books/dbmsr.pdf"
        },
        {
            name: "Social Engineering : Youtube Video Recommendation",
            pdfLink: "books/ser.pdf"
        },
        {
            name: "Artificial Intelligence : Youtube Playlist Recommendation",
            pdfLink: "books/air.pdf"
        },
        {
            name: "UHV-II: Universal Human Values – Understanding Harmony and Ethical Human Conduct : Youtube Playlist Recommendation",
            pdfLink: "books/uhvr.pdf"
        },
        {
            name: "Critical and Creative Thinking Skills : Youtube Video Recommendation",
            pdfLink: "books/cctsr.pdf"
        },
    ] },
    { name: 'Time Table', image: 'images/tt.jpg', books: [
        {
            name: "Time Table - 4th Semester",
            pdfLink: "books/tt.pdf"
        },
    ] },
    { name: 'Xtras (Movies and Entertainment)', image: 'images/movie.jpg', books: [
        {
            name: "Join our Telegram Channel for Latest Movie and Series ",
            pdfLink: "books/join.pdf"
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

const semesters = [
    {
        name: "1st Semester",
        image: "images/1semester.jpg",
        websiteLink: "https://bookwise1web.vercel.app/",
    },
    {
        name: "2nd Semester",
        image: "images/2semester.jpg",
        websiteLink: "https://bookwise2web.vercel.app/",
    },
    {
        name: "3rd Semester",
        image: "images/3semester.jpg",
        websiteLink: "https://bookwise3web.vercel.app/",
    },
    {
        name: "5th Semester",
        image: "images/5semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise5.0/",
    },    {
        name: "6th Semester",
        image: "images/6semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise6.0/",
    },
    {
        name: "7th Semester",
        image: "images/7semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise7.0/",
    },    {
        name: "8th Semester",
        image: "images/8semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise8.0/",
    },
];

function createSemesterCards() {
    const semesterCardsContainer = document.querySelector('.semester-cards');

    semesters.forEach((semester) => {
        const card = document.createElement('div');
        card.classList.add('semester-card');
        card.id = semester.name.toLowerCase().replace(/\s/g, '-');

        const image = document.createElement('img');
        image.src = semester.image;
        image.alt = semester.name;
        image.classList.add('semester-image');

        const name = document.createElement('div');
        name.textContent = semester.name;
        name.classList.add('semester-name');

        const websiteLink = document.createElement('a');
        websiteLink.href = semester.websiteLink;
        websiteLink.target = "_blank";
        websiteLink.textContent = "Visit Website";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(websiteLink);

        semesterCardsContainer.appendChild(card);
    });
}

window.addEventListener('load', createSemesterCards);

const projectsData = [
    {
        name: "Morse Code Translator",
        image: "images/project1.jpg",
        website: "https://rohansoni0507.github.io/MorseyCode/",
    },
    {
        name: "Desktop Voice Assistant",
        image: "images/project2.jpg",
        website: "https://rohansoni0507.github.io/AIDesk/",
    },
    {
        name: "Round Robin Web Scheduler",
        image: "images/project3.jpg",
        website: "https://rohansoni0507.github.io/RRSim/",
    },
    {
        name: "Productivity Tracker",
        image: "images/project4.jpg",
        website: "https://rohansoni0507.github.io/ProductivityPro/",
    },
];

function createProjectCards() {
    const projectContainer = document.querySelector(".project-card-container");

    projectsData.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.name;

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectLink = document.createElement("a");
        projectLink.href = project.website;
        projectLink.textContent = "Visit Project";

        card.appendChild(image);
        card.appendChild(projectName);
        card.appendChild(projectLink);

        projectContainer.appendChild(card);
    });
}
createProjectCards();