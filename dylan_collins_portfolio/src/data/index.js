import activity from '../Images/activities.png'
import signup from '../Images/signup.png';
import settings from '../Images/newsettings.png';
import dashboard from '../Images/newdashboard.png';
import whole_page from '../Images/whole_page.png';
import rules from '../Images/rules.png';
import grid from '../Images/grid.png';
import presets from '../Images/presets.png';

export const projects = [
    {
        "name": "MySchool",
        "subtitle": "Academic portfolio building tool",
        "photos": [
            dashboard,
            activity,
            signup,
            settings,
        ],
        "description": "MySchool is a portfolio-building app for parents and students participating in homeschooling activities. We make it quick and easy to add schoolwork examples or activity information to a printable PDF. Based on the Maryland state requirements for homeschoolers, MySchool keeps materials organized for a successful submission to educational authorities.",
        "toppart": "image.png",
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
        "photos": [
            whole_page,
            grid,
            presets,
            rules,
        ],
        "description": "Conway’s Game of Life is a cellular automated zero player game. The progression of the game is determined by the initial state, which is set by the user. All cells have two possible states, alive or dead. Visit the website to see the algorithm's rules and play. ",
        "toppart": "image.png",
        "URL": ["https://conway-game-of-life.dylan17th.vercel.app/", "https://github.com/dylan17th/Conway_game_of_life"],
        "colors": [
            "#383838",
            "#0059b3",
            "lightGrey",
            "#383838"
        ],
        "role": "Front-end Developer",
        "tech": [
            "React"
        ]
    }
]