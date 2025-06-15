import { FaCode, FaTools, FaDatabase, FaProjectDiagram, FaGamepad, FaBook, FaTheaterMasks } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";

export const SKILLS = [
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { skill: "JavaScript(ES6+)", image: "icons/javascript-svgrepo-com.svg" },
      { skill: "TypeScript", image: "icons/typescript-official-svgrepo-com.svg" },
      { skill: "Java", image: "icons/java-svgrepo-com.svg" },
      { skill: "Python", image: "icons/python-svgrepo-com.svg" },
      { skill: "PHP", image: "icons/php-svgrepo-com.svg" },
    ],
  },
  {
    title: "Frontend",
    icon: FaProjectDiagram,
    skills: [
      { skill: "HTML5", image: "icons/html-5-svgrepo-com.svg" },
      { skill: "CSS3(SASS and SCSS)", image: "icons/css-3-svgrepo-com.svg" },
      { skill: "React and React Native", image: "icons/react-svgrepo-com.svg" },
      { skill: "Angular", image: "icons/angular-svgrepo-com.svg" },
      { skill: "Next.js", image: "icons/nextjs-icon-svgrepo-com.svg" },
      { skill: "BootStrap", image: "icons/bootstrap-svgrepo-com.svg" },
      { skill: "Tailwind", image: "icons/tailwind-svgrepo-com.svg" },
      { skill: "Shadcn UI", image: "icons/shadcn-ui-seeklogo.svg" },
      { skill: "WordPress", image: "icons/wordpress-svgrepo-com.svg" },
    ],
  },
  {
    title: "Backend",
    icon: FaDatabase,
    skills: [
      { skill: "Node.js", image: "icons/nodejs-icon-svgrepo-com.svg" },
      { skill: "Express.js", image: "icons/express-svgrepo-com.svg" },
      { skill: "Flask", image: "icons/flask-svgrepo-com.svg" },
      { skill: "MySQL", image: "icons/mysql-svgrepo-com.svg" },
      { skill: "PostgreSQL", image: "icons/postgresql-svgrepo-com.svg" },
      { skill: "MongoDB", image: "icons/mongodb-svgrepo-com.svg" },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { skill: "Git", image: "icons/git-svgrepo-com.svg" },
      { skill: "Figma", image: "icons/figma-svgrepo-com.svg" },
      { skill: "AWS", image: "icons/aws-svgrepo-com.svg" },
      { skill: "Vercel", image: "icons/vercel-icon-svgrepo-com.svg" },
      { skill: "Docker", image: "icons/docker-svgrepo-com.svg" },
      { skill: "Postman", image: "icons/postman-icon-svgrepo-com.svg" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "ShoeStack",
    skills: "Next.js, Prisma, Neon, Tailwind, Shadcn",
    summary: [
      "Developed a Full-Stack E-Commerce application using Next.js 15 with App Router and server components.",
      "Implemented secure user authentication and role-based access control using Kinde Auth.",
      "Managed relational product and user data using Prisma ORM with Neon PostgreSQL database.",
      "Added admin dashboard to manage products, orders, and inventory with CRUD operations.",
      "Utilized Upstash Redis for cart state management, product caching, and real-time inventory updates.",
      "Integrated Stripe for payment processing, handling checkout sessions, webhooks, and order confirmations.",
      "Deployed using Vercel for seamless CI/CD and global performance.",
    ],
    link: "https://github.com/ShreyasPatil2000/e-commerce",
    live: "https://shoestack-nu.vercel.app/",
  },
  {
    title: "ChatMate",
    skills: "React, Node.js, Zustand, Tailwind, Shadcn, MongoDB",
    summary: [
      "Engineered a real-time chat platform supporting multiple users via Socket.io, enabling persistent message history.",
      "Developed REST API with Node.js and Express for user authentication via Google OAuth2, and file uploads up to 100 MB.",
      "Maintained global state management with Zustand for user session persistence and chat history synchronization across sessions.",
    ],
    link: "https://github.com/ShreyasPatil2000/ChatMate",
  },
  {
    title: "Connect Four Game",
    skills: "React, Node.js, MongoDB, Socket.IO",
    summary: [
      "Developed a full-stack Connect Four game in React with secure authentication and CRUD(Create, Read, Update, Delete) operations in the database for different functionalities.",
      "Implemented PBKDF2 algorithm with HMAC_SHA256 to enhance security, utilizing unique salt and slow hashing for data protection.",
    ],
    link: "https://github.com/ShreyasPatil2000/Connect4",
  },
  {
    title: "AidenWorld: Amusement Park",
    skills: "EJS, Node.js, Express, MongoDB",
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
      "Built a machine learning model to detect fake news using a dataset of 70640 articles, deployed via Flask.",
      "Preprocessed text data through tokenization, stop-word removal, and TF-IDF vectorization for feature extraction.",
      "Evaluated Logistic Regression, SVM, Random Forest, and other algorithms, achieving 94% accuracy with Logistic Regression.",
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
        location: "Fairfax, Virginia (Remote)",
        description: [
          "Designed a custom feed player integrating multiple APIs (NASA, Github, SeeClickFix) for videos and images with advanced features including playlist management, volume controls, playback speed controls, and thumbnail generation.",
          "Optimized responsive, cross-browser informational sites using React, HTML/CSS, SASS, and Vanilla JS, with a 95% Lighthouse performance score on mobile and desktop.",
          "Created a reusable React component library (forms, navigation, modals, sliders) deployed across 4 applications, reducing development time by 30% and ensuring UI consistency.",
          "Boosted site performance and accessibility by applying technical SEO and best practices, resulting in a 10% faster load time.",
          "Collaborated in a 4-member Agile team to deliver features through weekly sprints, daily stand-ups, and communication, ensuring timely and coordinated releases.",
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
          "Reviewed 300+ React/Angular code samples for AI model training, focusing on correctness, instruction following, and adherence to UI/UX principles (aesthetic, consistency, efficiency, usefulness, responsiveness).",
          "Delivered human feedback for AI code generation models across Java, C++, Python, and JavaScript, evaluating 200+ code samples weekly for correctness, efficiency, and best practices. ",
          "Annotated 5000+ data samples across multiple formats for machine learning training datasets, maintaining a 99% accuracy rate based on internal quality audits.",
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
