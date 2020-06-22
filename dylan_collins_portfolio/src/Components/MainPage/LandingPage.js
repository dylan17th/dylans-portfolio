import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../PDF/Dylan_M_Collins_Resume.pdf';


const LandingPage = () => {
    return (
        <div className='mainPage'>
            <h1 className='name'>Dylan Collins</h1>
            <h4>Full Stack Web Developer</h4>
            <nav className='nav'>
                <a style={{ paddingRight: '1rem' }} target="_blank" href='https://www.linkedin.com/in/dylan-collins-bb226ba6/'><FontAwesomeIcon color='white' className='top-links' icon={faLinkedin} /></a>
                <a style={{ paddingLeft: '1rem' }} target="_blank" href='https://github.com/dylan17th'><FontAwesomeIcon color='white' className='top-links2' icon={faGithub} /></a>
            </nav>
            <div className='div-resume'>
                <a className='resume' target="_blank" href={Resume}>Resume <FontAwesomeIcon color='white' icon={faFilePdf} /></a>
            </div>
        </ div>
    )
}

export default LandingPage; 