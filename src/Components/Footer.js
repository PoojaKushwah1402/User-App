import React from 'react';

import logo from './images/brand.png';
import logo2 from './images/footer.png';
import './index.css'

const Footer = () => {

    return(
        <div className='footer' >
                <img src={logo} className='footer-logo' alt='info-detail logo' />
        </div>
    )

}

export default Footer;