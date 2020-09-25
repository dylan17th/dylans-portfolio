import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faTasks } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../PDF/Dylan_M_Collins_Resume.pdf';
import Projects from "./Projects";


const LandingPage = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div className='mainPage'>
            <h1 className='name'>Dylan Collins</h1>
            <h4>Full Stack Web Developer</h4>
            <nav className='nav'>
                <a target="_blank" href='https://www.linkedin.com/in/dylan-collins-bb226ba6/'><FontAwesomeIcon className='top-links' icon={faLinkedin} /></a>
                <a target="_blank" href='https://github.com/dylan17th'><FontAwesomeIcon className='top-links' icon={faGithub} /></a>
                <a><FontAwesomeIcon onClick={() => setIsOpen(true)} className='top-links2 project-link' icon={faTasks} /></a>
            </nav>
            <Projects setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
            <div className='div-resume'>
                <a className='resume' target="_blank" href={Resume}>Resume <FontAwesomeIcon color='white' icon={faFilePdf} /></a>
            </div>
        </ div>
    )
}

export default LandingPage; 