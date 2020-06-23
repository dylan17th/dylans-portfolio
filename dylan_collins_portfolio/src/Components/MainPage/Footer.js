import React from 'react';
import Resume from '../../PDF/Dylan_M_Collins_Resume.pdf'

const Footer = () => {
    return (
        <div className='footer'>
            <section className='footer-left'>
                <h3 className='footer-name' style={{ paddingBottom: '1rem' }}>Dylan Collins</h3>
                <div className='blue-line'></div>
                <p className='p-tag'>Copyright {'\u00a9'} 2020 Dylan Collins. All rights reserved.</p>
                <p className='p-tag2' style={{ fontSize: '.8rem', color: '#BEBEBE' }}>Coded by Dylan Collins, designed by <a style={{ color: '#004DC0', textDecoration: 'underline' }} target="_blank" href='http://www.mdandoy.me/'>Marc Dandoy</a></p>
            </section>
            <div className='right-footer'>
                <section style={{ width: '50%' }}>
                    <h5 className='follow'>Follow</h5>
                    <div className='follow-div'>
                        <a className='link links2 links3' target="_blank" href='https://github.com/dylan17th'>Github</a>
                        <a className='link links2' target="_blank" href='https://www.linkedin.com/in/dylan-collins-bb226ba6/'>LinkedIn</a>
                    </div>
                </section>
                <section classname='div-more' style={{ width: '50%' }}>
                    <h5 className='more'>More</h5>
                    <div>
                        <a className='link' target="_blank" href={Resume}>Resume (PDF)</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;