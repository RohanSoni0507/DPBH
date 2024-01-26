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
    name: "Tips for Safe Online Shopping - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/tfsos1.pdf",
  },
  {
    name: "Tips for Safe Online Shopping - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/tfsos2.pdf",
  },
  {
    name: "Interactive Quizzes and Scenarios - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/iqas1.pdf",
  },
  {
    name: "Interactive Quizzes and Scenarios - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/iqas2.pdf",
  },
  {
    name: "Video Tutorials - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/vt1.pdf",
  },
  {
    name: "Video Tutorials - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/vt2.pdf",
  },
  {
    name: "Updates on Emerging Patterns - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/uoep1.pdf",
  },
  {
    name: "Updates on Emerging Patterns - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/uoep2.pdf",
  },
  {
    name: "FAQs and Troubleshooting - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/fat1.pdf",
  },
  {
    name: "FAQs and Troubleshooting - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
    pdfLink: "books/fat2.pdf",
  },
  {
    name: "User Testimonials and Experiences - Unmasking Deception : Case Studies on Notorious Instances of Dark Patterns",
    pdfLink: "books/utae1.pdf",
  },
  {
    name: "User Testimonials and Experiences - Unveiling Dark Patterns : Analyzing Impact and Exposures in Notorious Case Studies",
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
            name: "Impact on User Behavior - The Puppetry of Deception : Understanding the Impact of Dark Patterns on User Behavior and Decision-Making",
            pdfLink: "books/ioub1.pdf",
          },
          {
            name: "Impact on User Behavior - Decoding Dark Patterns : Understanding the Psychology Behind Manipulative Design Strategies",
            pdfLink: "books/ioub2.pdf",
          },
    ],
  },
  {
    name: "Legal Aspects and Consumer Rights",
    image: "images/lacr.jpg",
    books: [
        {
            name: "Legal Aspects and Consumer Rights - Empowering Consumers : Understanding Legal Aspects and Rights in the Realm of Dark Patterns",
            pdfLink: "books/lacr1.pdf",
          },
          {
            name: "Legal Aspects and Consumer Rights - Identifying Dark Patterns : Understanding Violations of Consumer Protection Laws",
            pdfLink: "books/lacr2.pdf",
          },
    ],
  },

  {
    name: "Tips for Safe Online Shopping",
    image: "images/tfsos.jpg",
    books: [
      {
        name: "Youtube Playlist Recommendation",
        pdfLink: "books/uhvr.pdf",
      },
    ],
  },
  {
    name: "Interactive Quizzes and Scenarios",
    image: "images/iqas.jpg",
    books: [
      {
        name: "List of Lab Experiments",
        pdfLink: "books/list.pdf",
      },
    ],
  },
  {
    name: "Video Tutorials",
    image: "images/vt.jpg",
    books: [
      {
        name: "Youtube Video Recommendation",
        pdfLink: "books/cctsr.pdf",
      },
    ],
  },
  {
    name: "Updates on Emerging Patterns",
    image: "images/uoep.jpg",
    books: [
      {
        name: "All Subjects Syllabus 2021",
        pdfLink: "books/ass.pdf",
      },
    ],
  },
  {
    name: "FAQs and Troubleshooting",
    image: "images/fat.jpg",
    books: [
      {
        name: "Probability and Queueing Theory : Youtube Playlist Recommendation",
        pdfLink: "books/pqtr.pdf",
      },
    ],
  },
  {
    name: "User Testimonials and Experiences",
    image: "images/utae.jpg",
    books: [
      {
        name: "Time Table - 4th Semester",
        pdfLink: "books/tt.pdf",
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
