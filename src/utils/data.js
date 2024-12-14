import { FaCode, FaTools, FaDatabase, FaProjectDiagram, FaGamepad, FaBook, FaTheaterMasks } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";

export const SKILLS = [
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { skill: "HTML5", percentage: "100%" },
      { skill: "CSS3(SASS and SCSS)", percentage: "90%" },
      { skill: "JavaScript(ES6+)", percentage: "85%" },
      { skill: "C", percentage: "90%" },
      { skill: "Java", percentage: "90%" },
      { skill: "Python", percentage: "95%" },
      { skill: "PHP", percentage: "70%" },
    ],
  },
  {
    title: "Frameworks",
    icon: FaProjectDiagram,
    skills: [
      { skill: "React.js", percentage: "80%" },
      { skill: "Node.js", percentage: "85%" },
      { skill: "Express.js", percentage: "80%" },
      { skill: "Flask", percentage: "75%" },
      { skill: "Next.js", percentage: "70%" },
    ],
  },
  {
    title: "Libraries & Databases",
    icon: FaDatabase,
    skills: [
      { skill: "BootStrap", percentage: "95%" },
      { skill: "Pandas", percentage: "100%" },
      { skill: "Scikit-learn", percentage: "85%" },
      { skill: "SQL(MySQL and PostgreSOL", percentage: "95%" },
      { skill: "NoSQL(MongoDB)", percentage: "80%" },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { skill: "Git and Github", percentage: "95%" },
      { skill: "FIGMA", percentage: "75%" },
      { skill: "Visual Studio Code", percentage: "100%" },
      { skill: "Postman", percentage: "100%" },
      { skill: "JIRA", percentage: "100%" },
      { skill: "XAMPP", percentage: "100%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "ChatMate",
    skills: "React.js, Node.js, Zustand, Tailwind, Shadcn, MongoDB, Socket.IO",
    summary: [
      "Built a feature-rich chat application allowing real-time messaging and communication between users, leveraging Socket.IO for smooth, bi-directional data flow.",
      "Utilized Express.js and Node.js for the backend, creating robust API endpoints to handle user authentication, file transfer, message storage, and real-time chat functionalities.",
      "Ensured real-time updates and message synchronization, allowing users to communicate instantly, storing and retrieving data efficiently.",
    ],
    link: "https://github.com/RaydenDarkus/ChatMate",
  },
  {
    title: "Connect Four Game",
    skills: "React.js, Node.js, MongoDB, Socket.IO",
    summary: [
      "Developed a full-stack Connect Four game in React with secure authentication and CRUD(Create, Read, Update, Delete) operations in the database for different functionalities.",
      "Implemented PBKDF2 algorithm with HMAC_SHA256 to enhance security, utilizing unique salt and slow hashing for data protection.",
    ],
    link: "https://github.com/RaydenDarkus/Connect4",
  },
  {
    title: "AidenWorld: Amusement Park",
    skills: "Node.js, Express.js, MongoDB",
    summary: [
      "Created a responsive website for an amusement park, featuring a Home Page, Ticket Booking, Merchandise, and Payment.",
      "Implemented a secure login and signup system, seamlessly integrating with MongoDB for efficient data storage and retrieval.",
    ],
    link: "https://github.com/RaydenDarkus/AmusementPark",
  },
  {
    title: "Fake News Detection",
    skills: "Python, NLTK, Flask",
    summary: [
      "Developed a robust Flask-based fake news detection model processing a dataset of 70,640 news articles.",
      "Performed data preprocessing, extraction, cleaning, and exploratory data analysis on the news dataset, to ensure reliable results.",
      "Employed various machine learning algorithms, achieving accuracy rates ranging from 87.04% to 83%.",
    ],
    link: "https://github.com/RaydenDarkus/Fake-News-Detection",
  },
  {
    title: "Sarcasm Detector Using DynRT",
    skills: "Python, PyTorch",
    summary: [
      "Detected sarcasm in 24,635 texts with images by observing the incongruity between them using BERT and RoBERTa LLMs.",
      "Performed cleaning, preprocessing as well as robustness and multilingual testing with accuracies of 69-73%.",
      "Achieved an accuracy of 93.59% in English and 72-75% accuracy in other languages like Hindi, Spanish, French, and German.",
    ],
    link: "https://github.com/RaydenDarkus/Sarcasm_Detector_Using_DynRT",
  },
  {
    title: "Online Music Player",
    skills: "HTML, CSS, JavaScript, PHP, MySQL",
    summary: [
      "Developed a comprehensive music player application enabling users to search, play, and download music in the browser.",
      "Integrated the YouTube API to fetch music data and utilized PHP-cURL for efficient web scraping, ensuring access to a vast library of music content.",
    ],
    link: "https://github.com/RaydenDarkus/Music_Player-master",
  },
  {
    title: "Basic Banking System",
    skills: "HTML, CSS, JavaScript, PHP, MySQL",
    summary: [
      "Established an application to transfer money between users in the database using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Designed and implemented user-friendly activities, including Home, Transfer Money, and Transaction History, enhancing the application's functionality and usability.",
    ],
    link: "https://github.com/RaydenDarkus/The-Basic-Banking-System",
  },
];

export const TIMELINE = [
  {
    title: "Experience",
    details: [
      {
        id: 1,
        name: "Front-End Developer",
        company: "Dream Studio",
        link: "https://dreamstudio.com/home/",
        location: "Atlanta, Georgia (Remote)",
        description: [
          "I am collaborating with cross-functional teams with designers and backend developers to facilitate user-friendly and responsive websites across multiple projects",
          "I have mostly used React.js, Swiper.js, SASS, HTML, JavaScript, and handled version control using Git and Github.",
        ],
        date: "August 2024 - Present",
      },
      {
        id: 2,
        name: "Web Developer Intern",
        company: "The Sparks Foundation",
        link: "https://thesparksfoundationsingapore.org/",
        location: "Thane, India (Remote)",
        description: [
          "I created low and high fidelity wireframes using Figma and utilized PHP and MySQL to handle user authentication, webpage design, and database management. ",
          "I also optimized database performance by refining SQL queries, and reducing server response times.",
        ],
        date: "July 2021 - August 2021",
      },
    ],
  },
  {
    title: "Education",
    details: [
      {
        id: 1,
        name: "George Mason University",
        education: "Master's in Computer Science",
        link: "https://www.gmu.edu/",
        score: "GPA: 3.53",
        location: "Fairfax, Virginia",
        description: [
          "Relevant Courses: Secure Software Design, User Interface Design, Analysis of Algorithms, Introduction to Artificial Intelligence, Machine Learning.",
        ],
        date: "August 2022 - May 2024",
      },
      {
        id: 2,
        name: "University of Mumbai - RAIT",
        education: "Bachelor's in Computer Engineering",
        link: "https://dypatil.edu/schools/ramrao-adik-institute-of-technology",
        score: "CGPA: 9.02",
        location: "Navi Mumbai, India",
        description: [
          "Relevant Courses: Object Oriented Programming, Database Management Systems, Machine Learning, Web Design, Data Mining",
        ],
        date: "August 2018 - May 2022",
      },
      {
        id: 3,
        name: "Smt Sulochanadevi Singhania School",
        education: "High School - 12th",
        link: "https://singhaniaschool.org/",
        score: "Percentage: 83.2%",
        location: "Thane, India",
        description: [
          "I started coding in 11th grade where I leart Object Oriented Programming and Data Structures using Java as part of my coursework",
        ],
        date: "June 2016 - February 2018",
      },
    ],
  },
];

export const HOBBIES = [
  {
    id: 1,
    title: "Travelling",
    icon: MdTravelExplore,
    details:
      "I enjoy traveling to new places and exploring museums, natural wonders of the world, and locations of significant cultural importance. Recently, I visited the National Firearms Museum, which showcases a fascinating collection of historical and modern firearms, the breathtaking Niagara Falls with its majestic cascades, and the tranquil Botanical Gardens in Washington, known for their stunning array of plants and serene atmosphere.",
  },
  {
    id: 2,
    title: "Gaming",
    icon: FaGamepad,
    details:
      "I enjoy playing video games such as Warframe, Call of Duty, and Star Wars: The Old Republic. While I appreciate the fast-paced action and strategy of FPS games, I have a stronger preference for RPGs. RPGs offer a deeper connection through their rich lore, intricate storytelling, and expansive open-world exploration, allowing me to immerse myself in their worlds and uncover their mysteries at my own pace.",
  },
  {
    id: 3,
    title: "Movies",
    icon: BiCameraMovie,
    details:
      "I love watching movies that transport me to imaginative worlds and tell captivating stories. Whether it’s the action-packed Marvel Cinematic Universe, Mission Impossible Series, or Lord of the Rings Fandom, I enjoy exploring diverse genres and narratives. These experiences often inspire me with their creativity and storytelling depth.",
  },
  {
    id: 4,
    title: "Cricket",
    icon: GiCricketBat,
    details:
      "Cricket has been a sport close to my heart for years. I enjoy watching international matches and cheering for Team India, as well as playing friendly games with friends. The combination of strategy, teamwork, and skill in cricket makes it an exhilarating sport, and I admire the dedication and sportsmanship displayed by professional players.",
  },
  {
    id: 5,
    title: "Fanfiction",
    icon: FaBook,
    details:
      "Reading fanfiction is a creative outlet for me that allows me to expand upon the universes of my favorite books, movies, and TV shows. I enjoy exploring 'what-if' scenarios, imagining alternate endings, or delving deeper into the lives of characters I love. It's a way to engage with stories on a personal level and connect with a community of like-minded fans. I have read fanfiction about ASOIAF, Naruto, Harry Potter, Black Clover and more.",
  },
  {
    id: 6,
    title: "Anime & Manga",
    icon: FaTheaterMasks,
    details: "I like to watch anime and read their respective manga issues such as One Piece, Blue Lock and heartwarming Studio Ghibli films, or thought-provoking anime series like Attack on Titan or Death Note.",
  }
];
