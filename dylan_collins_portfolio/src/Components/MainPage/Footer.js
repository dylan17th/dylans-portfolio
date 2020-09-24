import React from 'react';
import Resume from '../../PDF/Dylan_M_Collins_Resume.pdf'

const Footer = () => {
    return (
        <div className='footer'>
            <section className='footer-left'>
                <h3 className='footer-name' style={{ paddingBottom: '1rem' }}><a style={{ color: 'white', textDecoration: 'none' }} href="mailto:dcollins5590@students.mc3.edu">dcollins5590@students.mc3.edu</a></h3>
                <div className='blue-line'></div>
                <p className='p-tag'>Copyright {'\u00a9'} 2020 Dylan Collins. All rights reserved.</p>
                <p className='p-tag2' style={{ fontSize: '.8rem', color: '#BEBEBE' }}>Coded by Dylan Collins, designed by Dylan Collins {"&"} <a style={{ color: '#35858A', textDecoration: 'underline' }} target="_blank" href='http://www.mdandoy.me/'>Marc Dandoy</a></p>
            </section>
            <div className='right-footer'>
                <section style={{ width: '50%' }}>
                    <h5 className='follow'>Follow</h5>
                    <div className='follow-div'>
                        <a className='link links2 links3 github' target="_blank" href='https://github.com/dylan17th'>Github</a>
                        <a className='link links2 linkedIn' target="_blank" href='https://www.linkedin.com/in/dylan-collins-bb226ba6/'>LinkedIn</a>
                    </div>
                </section>
                <section className='div-more' style={{ width: '50%' }}>
                    <h5 className='more'>More</h5>
                    <div>
                        <a className='link pro-link' target="_blank" href={Resume}>Resume (PDF)</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;