import React from 'react';
import dylan from '../../Images/Dylan.png'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='photo-div'style={{ width: '25vw', textAlign: 'right', paddingRight: '5rem'}}>
                <img className='photo' src={dylan} />
            </div>
            <section className='intro-para'style={{ width: '75vw', textAlign: 'left', height: '20vh', padding: '0rem, 20rem', lineHeight: '2rem'}}>
                <div>Educated entry level full-stack software developer seeking to gain employment as a front-end or back-end developer, where I can provide immediate value to a team and grow as an employee.</div>
            </section>
        </div>
    )
}

export default Intro;