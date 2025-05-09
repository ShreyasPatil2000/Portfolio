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
    title: "ShoeStack",
    skills: "Next.js, Kinde, Prisma, Neon, Stripe, Tailwind, Shadcn",
    summary: [
      "Built a full-stack E-Commerce shoe store using Next.js 15 with App Router and server components for performance and scalability.",
      "Implemented secure user authentication and role-based access control using Kinde Auth for login, signup, and admin routes.",
      "Integrated Stripe for seamless payment processing, handling checkout sessions, webhooks, and order confirmations.",
      "Managed relational product and user data using Prisma ORM with a Neon Postgres database.",
      "Used Upstash Redis for fast cart state management, product caching, and real-time inventory updates.",
      "Designed a responsive UI with dynamic product pages, filtering, sorting, and search functionality.",
      "Added admin dashboard to manage products, orders, and inventory with CRUD operations.",
    ],
    link: "https://github.com/ShreyasPatil2000/e-commerce",
  },
  {
    title: "ChatMate",
    skills: "React.js, Node.js, Zustand, Tailwind, Shadcn, MongoDB, Socket.IO",
    summary: [
      "Built a feature-rich chat application allowing real-time messaging and communication between users, leveraging Socket.IO for smooth, bi-directional data flow.",
      "Utilized Express.js and Node.js for the backend, creating robust API endpoints to handle user authentication, file transfer, message storage, and real-time chat functionalities.",
      "Ensured real-time updates and message synchronization, allowing users to communicate instantly, storing and retrieving data efficiently.",
    ],
    link: "https://github.com/ShreyasPatil2000/ChatMate",
  },
  {
    title: "Connect Four Game",
    skills: "React.js, Node.js, MongoDB, Socket.IO",
    summary: [
      "Developed a full-stack Connect Four game in React with secure authentication and CRUD(Create, Read, Update, Delete) operations in the database for different functionalities.",
      "Implemented PBKDF2 algorithm with HMAC_SHA256 to enhance security, utilizing unique salt and slow hashing for data protection.",
    ],
    link: "https://github.com/ShreyasPatil2000/Connect4",
  },
  {
    title: "AidenWorld: Amusement Park",
    skills: "Node.js, Express.js, MongoDB",
    summary: [
      "Created a responsive website for an amusement park, featuring a Home Page, Ticket Booking, Merchandise, and Payment.",
      "Implemented a secure login and signup system, seamlessly integrating with MongoDB for efficient data storage and retrieval.",
    ],
    link: "https://github.com/ShreyasPatil2000/AmusementPark",
  },
  {
    title: "Fake News Detection",
    skills: "Python, NLTK, Flask",
    summary: [
      "Developed a robust Flask-based fake news detection model processing a dataset of 70,640 news articles.",
      "Performed data preprocessing, extraction, cleaning, and exploratory data analysis on the news dataset, to ensure reliable results.",
      "Employed various machine learning algorithms, achieving accuracy rates ranging from 87.04% to 83%.",
    ],
    link: "https://github.com/ShreyasPatil2000/Fake-News-Detection",
  },
  {
    title: "Sarcasm Detector Using DynRT",
    skills: "Python, PyTorch",
    summary: [
      "Detected sarcasm in 24,635 texts with images by observing the incongruity between them using BERT and RoBERTa LLMs.",
      "Performed cleaning, preprocessing as well as robustness and multilingual testing with accuracies of 69-73%.",
      "Achieved an accuracy of 93.59% in English and 72-75% accuracy in other languages like Hindi, Spanish, French, and German.",
    ],
    link: "https://github.com/ShreyasPatil2000/Sarcasm_Detector_Using_DynRT",
  },
  {
    title: "Online Music Player",
    skills: "HTML, CSS, JavaScript, PHP, MySQL",
    summary: [
      "Developed a comprehensive music player application enabling users to search, play, and download music in the browser.",
      "Integrated the YouTube API to fetch music data and utilized PHP-cURL for efficient web scraping, ensuring access to a vast library of music content.",
    ],
    link: "https://github.com/ShreyasPatil2000/Music_Player-master",
  },
  {
    title: "Basic Banking System",
    skills: "HTML, CSS, JavaScript, PHP, MySQL",
    summary: [
      "Established an application to transfer money between users in the database using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Designed and implemented user-friendly activities, including Home, Transfer Money, and Transaction History, enhancing the application's functionality and usability.",
    ],
    link: "https://github.com/ShreyasPatil2000/The-Basic-Banking-System",
  },
];

export const TIMELINE = [
  {
    title: "Experience",
    details: [
      {
        id: 1,
        name: "Front-End Developer (Volunteer)",
        company: "Dream Studio",
        link: "https://dreamstudio.com/home/",
        location: "Atlanta, Georgia (Remote)",
        description: [
          "Developed responsive and user-friendly websites by adding new features and refining existing code to ensure a seamless experience across all devices.",
          "Improved SEO performance by applying best practices and enhancing accessibility, leading to a 10% increase in site speed.",
          "Collaborated with designers and backend developers to transform complex business requirements into intuitive user interfaces, contributing to 4+ repositories.",
          "Utilized React.js, SASS, HTML, CSS, and JavaScript to build visually appealing web solutions, using Git for version control and collaboration with 5+ team members.",
        ],
        date: "August 2024 - Present",
      },
      {
        id: 2,
        name: "AI Trainer",
        company: "DataAnnotation",
        link: "https://www.dataannotation.tech/",
        location: "Fairfax, Virginia (Remote)",
        description: [
          "Leveraged Reinforcement Learning from Human Feedback to train machine learning models while ensuring adherence to legal and ethical standards.",
          "Labeled and annotated 500+ data samples across multiple formats: code, text, images, videos, and audio. ",
          "Conducted front-end code reviews focusing on UI/UX design, ensuring responsiveness and adherence to best practices.",
          "Reviewed Github commits and trained AI models to execute API calls effectively.",
        ],
        date: "December 2024 - Present",
      },
      {
        id: 3,
        name: "Barista",
        company: "Starbucks",
        link: "https://www.google.com/maps/place/Starbucks/@38.8337115,-77.3071381,89m/data=!3m2!1e3!5s0x89b64e8a81ee4365:0x69bab77b2aa32c46!4m6!3m5!1s0x89b64ef569cc06e5:0x3340294b75936dc0!8m2!3d38.833767!4d-77.306958!16s%2Fg%2F1tfbp6hk?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
        location: "Fairfax, Virginia",
        description: [
          "Delivered exceptional customer service by preparing high-quality beverages and ensuring a welcoming environment for customers.",
          "Managed multiple orders efficiently during peak hours, demonstrating strong time management and multitasking skills.",
          "Maintained cleanliness and organization of the workspace, adhering to health and safety standards.",
          "Collaborated with team members to ensure smooth operations and a positive customer experience.",
          "Developed strong interpersonal and communication skills while interacting with a diverse clientele.",
        ],
        date: "August 2023 - May 2024",
      },
      {
        id: 4,
        name: "Web Developer Intern",
        company: "The Sparks Foundation",
        link: "https://thesparksfoundationsingapore.org/",
        location: "Thane, India (Remote)",
        description: [
          "Created wireframes and prototypes using Figma, translating business requirements into user-friendly interfaces. ",
          "Utilized PHP and MySQL to handle user registration, login, webpage design, and database management.",
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
        score: "GPA: 3.61",
        location: "Mumbai, India",
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
    details:
      "I like to watch anime and read their respective manga issues such as One Piece, Blue Lock and heartwarming Studio Ghibli films, or thought-provoking anime series like Attack on Titan or Death Note.",
  },
];
