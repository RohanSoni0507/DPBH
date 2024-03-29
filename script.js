function openSlideInMenu() {
  const slideInMenu = document.querySelector(".slide-in-menu");
  slideInMenu.style.left = "0";
}

function closeSlideInMenu() {
  const slideInMenu = document.querySelector(".slide-in-menu");
  slideInMenu.style.left = "-300px";
}

const menuToggle = document.querySelector(".menu-toggle");
const closeMenuButton = document.querySelector("#close-menu");

menuToggle.addEventListener("click", openSlideInMenu);
closeMenuButton.addEventListener("click", closeSlideInMenu);

const books = [
  {
    name: "Introduction to Dark Patterns - Understanding Deceptive Design in the Digital Realm",
    pdfLink: "books/itdp1.pdf",
  },
  {
    name: "Introduction to Dark Patterns - Unveiling Deception : Exploring Dark Patterns through Illustrative Examples",
    pdfLink: "books/itdp2.pdf",
  },
  {
    name: "Types of Dark Patterns - Dismantling the Deceptive Tapestry : A Comprehensive Exploration of Dark Pattern Categories",
    pdfLink: "books/todp1.pdf",
  },
  {
    name: "Types of Dark Patterns - Visualizing the Deceptive Landscape : A Visual Exploration of Dark Pattern Types with Real-World Examples",
    pdfLink: "books/todp2.pdf",
  },
  {
    name: "Recognizing Manipulative Design - Decoding the Web of Deception : A Comprehensive Guide to Recognizing Manipulative Design on E-Commerce Websites",
    pdfLink: "books/rmd1.pdf",
  },
  {
    name: "Recognizing Manipulative Design - Demystifying Manipulative Design : An In-Depth Examination of Deceptive Elements on E-Commerce Platforms",
    pdfLink: "books/rmd2.pdf",
  },
  {
    name: "Case Studies - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/cs1.pdf",
  },
  {
    name: "Case Studies - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/cs2.pdf",
  },
  {
    name: "Impact on User Behavior - The Puppetry of Deception : Understanding the Impact of Dark Patterns on User Behavior and Decision-Making",
    pdfLink: "books/ioub1.pdf",
  },
  {
    name: "Impact on User Behavior - Decoding Dark Patterns : Understanding the Psychology Behind Manipulative Design Strategies",
    pdfLink: "books/ioub2.pdf",
  },
  {
    name: "Legal Aspects and Consumer Rights - Empowering Consumers : Understanding Legal Aspects and Rights in the Realm of Dark Patterns",
    pdfLink: "books/lacr1.pdf",
  },
  {
    name: "Legal Aspects and Consumer Rights - Identifying Dark Patterns : Understanding Violations of Consumer Protection Laws",
    pdfLink: "books/lacr2.pdf",
  },
  {
    name: "Tips for Safe Online Shopping - Smart Shopper's Guide : Tips for Safe Online Shopping",
    pdfLink: "books/tfsos1.pdf",
  },
  {
    name: "Tips for Safe Online Shopping - Navigating Online Shopping Safely : Your Guide to Smart Consumer Choices",
    pdfLink: "books/tfsos2.pdf",
  },
  {
    name: "Interactive Quizzes and Scenarios - Test your knowledge in a practical context",
    pdfLink: "books/iqas1.pdf",
  },
  {
    name: "Interactive Quizzes and Scenarios -  Feedback and explanations for correct and incorrect responses",
    pdfLink: "books/iqas2.pdf",
  },
  {
    name: "Video Tutorials - Deceptive Design and Dark Patterns: What are they? What do they do? How do we stop them?",
    pdfLink: "books/vt1.pdf",
  },
  {
    name: "Video Tutorials - Dark Patterns: Hidden Tactics & Unlawful Practices",
    pdfLink: "books/vt2.pdf",
  },
  {
    name: "Updates on Emerging Patterns - Dynamic Insights : Stay Informed on Emerging Dark Patterns",
    pdfLink: "books/uoep1.pdf",
  },
  {
    name: "Updates on Emerging Patterns - Dark Patterns Watch : Your Guide to the Latest Tactics in Digital Manipulation",
    pdfLink: "books/uoep2.pdf",
  },
  {
    name: "FAQs and Troubleshooting - Your Guide to Smooth Navigation",
    pdfLink: "books/fat1.pdf",
  },
  {
    name: "FAQs and Troubleshooting - Your Guide to Smart Navigation",
    pdfLink: "books/fat2.pdf",
  },
  {
    name: "User Testimonials and Experiences -  User Testimonials: Navigating the Digital Maze with Confidence",
    pdfLink: "books/utae1.pdf",
  },
  {
    name: "User Testimonials and Experiences - User Stories: Illuminating the Path Through the Digital Wilderness",
    pdfLink: "books/utae2.pdf",
  },
];

function listBooks(books) {
  const table = document.querySelector("#book-list");
  table.innerHTML = "";

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

window.addEventListener("load", () => {
  const showBooksPage = document.querySelector("#show-book-list");

  if (showBooksPage) {
    listBooks(books);
  }
  const sortBooksPage = document.querySelector("#sort-book-list");

  if (sortBooksPage) {
    sortBooks();
  }
});

const subjects = [
  {
    name: "Introduction to Dark Patterns",
    image: "images/itdp.jpg",
    books: [
      {
        name: "Understanding Deceptive Design in the Digital Realm",
        pdfLink: "books/itdp1.pdf",
      },
      {
        name: "Unveiling Deception : Exploring Dark Patterns through Illustrative Examples",
        pdfLink: "books/itdp2.pdf",
      },
    ],
  },
  {
    name: "Types of Dark Patterns",
    image: "images/todp.jpg",
    books: [
      {
        name: "Dismantling the Deceptive Tapestry : A Comprehensive Exploration of Dark Pattern Categories",
        pdfLink: "books/todp1.pdf",
      },
      {
        name: "Visualizing the Deceptive Landscape : A Visual Exploration of Dark Pattern Types with Real-World Examples",
        pdfLink: "books/todp2.pdf",
      },
    ],
  },
  {
    name: "Recognizing Manipulative Design",
    image: "images/rmd.jpg",
    books: [
          {
            name: "Decoding the Web of Deception : A Comprehensive Guide to Recognizing Manipulative Design on E-Commerce Websites",
            pdfLink: "books/rmd1.pdf",
          },
          {
            name: "Demystifying Manipulative Design : An In-Depth Examination of Deceptive Elements on E-Commerce Platforms",
            pdfLink: "books/rmd2.pdf",
          },
    ],
  },
  {
    name: "Case Studies",
    image: "images/cs.jpg",
    books: [
        {
            name: "Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
            pdfLink: "books/cs1.pdf",
          },
          {
            name: "Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
            pdfLink: "books/cs2.pdf",
          },
    ],
  },
  {
    name: "Impact on User Behavior",
    image: "images/ioub.jpg",
    books: [
        {
            name: "The Puppetry of Deception : Understanding the Impact of Dark Patterns on User Behavior and Decision-Making",
            pdfLink: "books/ioub1.pdf",
          },
          {
            name: "Decoding Dark Patterns : Understanding the Psychology Behind Manipulative Design Strategies",
            pdfLink: "books/ioub2.pdf",
          },
    ],
  },
  {
    name: "Legal Aspects and Consumer Rights",
    image: "images/lacr.jpg",
    books: [
        {
            name: "Empowering Consumers : Understanding Legal Aspects and Rights in the Realm of Dark Patterns",
            pdfLink: "books/lacr1.pdf",
          },
          {
            name: "Identifying Dark Patterns : Understanding Violations of Consumer Protection Laws",
            pdfLink: "books/lacr2.pdf",
          },
    ],
  },

  {
    name: "Tips for Safe Online Shopping",
    image: "images/tfsos.jpg",
    books: [
        {
            name: "Smart Shopper's Guide : Tips for Safe Online Shopping",
            pdfLink: "books/tfsos1.pdf",
          },
          {
            name: "Navigating Online Shopping Safely : Your Guide to Smart Consumer Choices",
            pdfLink: "books/tfsos2.pdf",
          },
    ],
  },
  {
    name: "Interactive Quizzes and Scenarios",
    image: "images/iqas.jpg",
    books: [
        {
            name: "Test your knowledge in a practical context",
            pdfLink: "books/iqas1.pdf",
          },
          {
            name: "Feedback and explanations for correct and incorrect responses",
            pdfLink: "books/iqas2.pdf",
          },
    ],
  },
  {
    name: "Video Tutorials",
    image: "images/vt.jpg",
    books: [
        {
            name: "Deceptive Design and Dark Patterns: What are they? What do they do? How do we stop them?",
            pdfLink: "books/vt1.pdf",
          },
          {
            name: "Dark Patterns: Hidden Tactics & Unlawful Practices",
            pdfLink: "books/vt2.pdf",
          },
    ],
  },
  {
    name: "Updates on Emerging Patterns",
    image: "images/uoep.jpg",
    books: [
        {
            name: "Dynamic Insights : Stay Informed on Emerging Dark Patterns",
            pdfLink: "books/uoep1.pdf",
          },
          {
            name: "Dark Patterns Watch : Your Guide to the Latest Tactics in Digital Manipulation",
            pdfLink: "books/uoep2.pdf",
          },
    ],
  },
  {
    name: "FAQs and Troubleshooting",
    image: "images/fat.jpg",
    books: [
        {
            name: "Your Guide to Smooth Navigation",
            pdfLink: "books/fat1.pdf",
          },
          {
            name: "Your Guide to Smart Navigation",
            pdfLink: "books/fat2.pdf",
          },
    ],
  },
  {
    name: "User Testimonials and Experiences",
    image: "images/utae.jpg",
    books: [
        {
            name: "User Testimonials: Navigating the Digital Maze with Confidence",
            pdfLink: "books/utae1.pdf",
          },
          {
            name: "User Stories: Illuminating the Path Through the Digital Wilderness",
            pdfLink: "books/utae2.pdf",
          },
    ],
  },
];
function createSubjectCards() {
  const subjectCardsContainer = document.querySelector(".subject-cards");

  subjects.forEach((subject) => {
    const card = document.createElement("div");
    card.classList.add("subject-card");

    const image = document.createElement("img");
    image.src = subject.image;
    image.alt = subject.name;
    image.classList.add("subject-image");

    const name = document.createElement("div");
    name.textContent = subject.name;
    name.classList.add("subject-name");

    card.appendChild(image);
    card.appendChild(name);
    card.addEventListener("click", () => displayBooks(subject.books));

    subjectCardsContainer.appendChild(card);
  });
}

function displayBooks(books) {
  const booksList = document.querySelector(".books-list");
  booksList.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("book-table");

  const headerRow = table.insertRow();
  const nameHeader = headerRow.insertCell(0);
  const linkHeader = headerRow.insertCell(1);
  nameHeader.textContent = "Book Name";
  linkHeader.textContent = "Link";

  books.forEach((book) => {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const linkCell = row.insertCell(1);

    nameCell.textContent = book.name;
    linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download</a>`;
  });

  booksList.appendChild(table);
}

window.addEventListener("load", createSubjectCards);
