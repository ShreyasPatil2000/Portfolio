import { FaCode, FaTools, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

export const SKILLS = [
    {
        title: "Languages", 
        icon: FaCode,
        skills: [
            {skill: "HTML5", percentage:"100%"},
            {skill: "CSS3(SASS and SCSS)", percentage:"90%"}, 
            {skill: "JavaScript(ES6+)", percentage:"85%"},
            {skill: "C", percentage:"90%"},
            {skill: "Java", percentage:"90%"},
            {skill: "Python", percentage:"95%"},
            {skill: "PHP", percentage:"70%"},
        ],
    },
    {
        title: "Frameworks",
        icon: FaProjectDiagram,
        skills: [
            {skill: "React.js", percentage:"80%"},
            {skill: "Node.js", percentage:"85%"}, 
            {skill: "Express.js", percentage:"80%"},
            {skill: "Flask", percentage:"75%"},
        ],
    },
    {
        title: "Libraries & Databases",
        icon: FaDatabase,
        skills: [
            {skill: "BootStrap", percentage:"95%"},
            {skill: "Pandas", percentage:"100%"},
            {skill: "Scikit-learn", percentage:"85%"},
            {skill: "SQL(MySQL and PostgreSOL", percentage:"95%"},
            {skill: "NoSQL(MongoDB)", percentage:"80%"},
        ],
    },
    {
        title: "Tools",
        icon: FaTools,
        skills: [
            {skill: "Git and Github", percentage:"95%"},
            {skill: "FIGMA", percentage:"75%"}, 
            {skill: "Visual Studio Code", percentage:"100%"},
            {skill: "Postman", percentage:"100%"},
            {skill: "XAMPP", percentage:"100%"},
        ],
    },
];

export const PROJECTS = [
    {
        title: "Multiplayer Connect Four",
        skills: "React.js, Node.js, MongoDB, Socket.IO",
        summary: [
            "Developed a full-stack Connect Four game in React with secure authentication and CRUD(Create, Read, Update, Delete) operations in the database for different functionalities.",
            "Implemented PBKDF2 algorithm with HMAC_SHA256 to enhance security, utilizing unique salt and slow hashing for data protection.",
            "Integrated real-time gameplay features using WebSockets, ensuring smooth and interactive multiplayer experiences.",
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