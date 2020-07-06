import React from 'react';
import { projects } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div style={{ height: '125vh' }}>
            <div>
                {projects.map(project => (
                    <div className='main-projects-div' key={project.name} >
                        <section className='project-left'>
                            <h2>{project.name}</h2>
                            <div>{project.subtitle}</div>
                            <section style={{ display: 'flex', height: '55%', padding: '2rem 0rem' }}>
                                <img src={project.photos[0]} className='images image1' />
                                <div className='column-photos'>
                                    <img src={project.photos[1]} className='images' style={{ width: '100%', height: '30%', borderRadius: '.3rem' }} />
                                    <img src={project.photos[2]} className='images' style={{ width: '100%', height: '30%', borderRadius: '.3rem' }} />
                                    <img src={project.photos[3]} className='images' style={{ width: '100%', height: '30%', borderRadius: '.3rem' }} />
                                </div>
                            </section>
                            <section className='tech-section'>
                                <h4 className='techHeading'>Technologies used:</h4>
                                <div style={{ display: 'flex' }}>
                                    {project.tech.map(tech => (<div key={tech} className='tech'>{tech}</div>))}
                                </div>
                            </section>
                        </section>
                        <section className='project-right'>
                            <h2 className='color-div' >
                                <div className='logo' style={{ backgroundColor: '#F4F4F4', width: '10%' }}></div>
                                <div style={{ backgroundColor: project.colors[0], width: '40.9%' }} className='logo'></div>
                                <div style={{ backgroundColor: project.colors[1], width: '14.7%' }} className='logo'></div>
                                <div style={{ backgroundColor: project.colors[2], width: '14.7%' }} className='logo'></div>
                                <div style={{ backgroundColor: project.colors[3], width: '15%' }} className='logo'></div>
                            </h2>
                            <div className='project-description'>Role: {project.role}</div>
                            <p className='project-description1'>{project.description}</p>
                            <div className='button-div'>
                                <div className='vd-button' ><a className='visit directly' style={{ color: '#004DC0', textDecoration: 'none' }} target="_blank" href={project.URL[0]}><FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Directly</a></div>
                                <div className='gh-button' ><a className='visit github' style={{ color: 'white', textDecoration: 'none' }} target="_blank" href={project.URL[1]}><FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Github</a></div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects; 