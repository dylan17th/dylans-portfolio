import newwer from '../Images/new.png';
import whole_page from '../Images/whole_page.png';


export const projects = [
    {
        "name": "MySchool",
        "subtitle": "Academic portfolio building tool",
        "photos": [newwer],
        "description": "MySchool is a portfolio-building app for parents and students participating in homeschooling activities. We make it quick and easy to add schoolwork examples or activity information to a printable PDF.",
        "URL": [
            "https://www.myschool-v1.com/",
            "https://github.com/dylan17th/My-School-FE"
        ],
        "colors": [
            "#2A4365",
            "#FFBB00",
            "#FB6542",
            "#375E97"
        ],
        "role": "Full Stack Web Developer",
        "tech": [
            "Node",
            "React",
            "Redux",
            "Express",
            "Cloudinary",
            "AWS",
            "Postgres",
            "Chakra"
        ]
    },
    {
        "name": "Conway's Game of Life",
        "subtitle": "0 player game",
        "photos": [whole_page],
        "description": "Conway’s Game of Life is a cellular automated zero player game. The progression of the game is determined by the initial state, which is set by the user. All cells have two possible states, alive or dead.",
        "URL": ["https://conway-game-of-life.dylan17th.vercel.app/", "https://github.com/dylan17th/Conway_game_of_life"],
        "colors": [
            "#383838",
            "#0059b3",
            "lightGrey",
            "#383838"
        ],
        "role": "Front-end Developer",
        "tech": [
            "React",
            "CSS",
            "Vercel",
            "Git",
            "Github"
        ]
    }
]
