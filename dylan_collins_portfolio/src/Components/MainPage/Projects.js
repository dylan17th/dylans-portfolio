import React, { useState } from 'react';
import Modal from 'react-modal';
import { styled } from '@material-ui/core/styles';
import { projects } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faTimesCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: "85vh",
        width: "80vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column"
    }
};

const Exit = styled(Button)({
    width: "5vw"
});


const Pros = ({ setIsOpen, modalIsOpen }) => {
    const [myProjects, setProjects] = useState(projects);
    const [currentIndex, setCurrentIndex] = useState(0);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div style={{ color: "#51595F" }}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}

            >
                <div className='exit-button'>
                    <Exit color="secondary" style={{}} onClick={closeModal}><FontAwesomeIcon className="fas fa-camera fa-2x" icon={faTimesCircle} /></Exit>
                </div>
                <div className="main-project-div">
                    <section style={{ padding: "1rem" }}>
                        <div style={{ fontWeight: "bold", paddingBottom: ".5rem", color: "#51595F" }}>{myProjects[currentIndex].name}</div>
                        <div style={{ paddingBottom: ".7rem", color: "#51595F" }}>{myProjects[currentIndex].subtitle}</div>
                        <img className="project-image" src={myProjects[currentIndex].photos[0]} />
                        <section className='tech-section'>
                            <h4 className='techHeading'>Technologies used:</h4>
                            <div style={{ display: 'flex' }}>
                                {projects[currentIndex].tech.map(tech => (<div key={tech} style={{ color: "#51595F" }} className='tech'>{tech}</div>))}
                            </div>
                        </section>
                    </section>
                    <section style={{ padding: "1rem" }}>
                        <div className='color-div' >
                            <div className='logo'></div>
                            <div style={{ backgroundColor: myProjects[currentIndex].colors[0], width: '40.9%' }} className='logo'></div>
                            <div style={{ backgroundColor: myProjects[currentIndex].colors[1], width: '14.7%' }} className='logo'></div>
                            <div style={{ backgroundColor: myProjects[currentIndex].colors[2], width: '14.7%' }} className='logo'></div>
                            <div style={{ backgroundColor: myProjects[currentIndex].colors[3], width: '15%' }} className='logo'></div>
                        </div>
                        <div style={{ height: "70%", display: "flex", flexDirection: "column", paddingTop: ".5rem" }}>
                            <div className='project-description' >Role: {myProjects[currentIndex].role}</div>
                            <div className='project-description1'>{myProjects[currentIndex].description}</div>
                            <div className='button-div'>
                                <Button variant="outlined" color="primary"><a className='visit directly' style={{ color: '#004DC0', textDecoration: 'none' }} target="_blank" href={myProjects[currentIndex].URL[0]}><FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Directly</a></Button>
                                <Button variant="outlined" color="primary"><a className='visit github' style={{ color: '#004DC0', textDecoration: 'none' }} target="_blank" href={myProjects[currentIndex].URL[1]}><FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Github</a></Button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="switcher">
                    <Button disabled={currentIndex === 0 ? true : false} onClick={() => setCurrentIndex(currentIndex - 1)}><FontAwesomeIcon className="fas fa-camera fa-3x" icon={faArrowCircleLeft} /></Button>
                    <div>{currentIndex + 1} of {myProjects.length}</div>
                    <Button disabled={currentIndex === 1 ? true : false} onClick={() => setCurrentIndex(currentIndex + 1)}><FontAwesomeIcon className="fas fa-camera fa-3x" icon={faArrowCircleRight} /></Button>
                </div>
            </Modal>
        </div>
    );
}

export default Pros;