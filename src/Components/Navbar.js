import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';
import '../styles/style.css';
import ktmImage from '../images/pashupathinath.jpg'
import ktmImage2 from '../images/street2.jpg'
import ktmImage3 from '../images/streetktm.jpg'
import ktmImage4 from '../images/swoyambhunath.jpg'
import cult1 from '../images/cult1.jpg'
import cult2 from '../images/cult2.jpg'
import cult3 from '../images/cult3.jpg'
import cult4 from '../images/cult5.jpg'


const Navbar = () => {


    const [isCountry, setIsCountry] = useState(0);
    const hoverChange = (val) => {
        if (val === 0) {
            setIsCountry(0);
        }
        else if (val === 1) {
            setIsCountry(1);
        }

    }
    let images;
    if (isCountry === 1) {
        images = <div className="home-background home">
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${cult1})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${cult2})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage:`url(${cult3})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${cult4})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
        </div>
    }
    else {
        images = <div className="home-background home">
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${ktmImage2})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${ktmImage})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${ktmImage3})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
            <div className="split">
                <div className="background-item type-home" style={{ backgroundImage: `url(${ktmImage4})`, filter: `grayscale(100%)` }} >
                </div>
            </div>
        </div>
    }

    return (
        <div className="main-wrapper">
            <div className="page-border border-top"></div>
            <div className="page-border border-left"></div>
            <div className="page-border border-right"></div>
            <div className="page-border border-bottom"></div>
            <div className="home-header">
                {images}
                <header>THE KATHMANDU TRAVELLER</header>
                <nav className="header-nav">
                    <Link to="body" spy={true} smooth={true} >
                        <a href="/" className="stories-header"  >City<span></span>
                        </a>
                    </Link>
                    <span className="nav-spacer"></span><a className="countries-header" href="/culture" onMouseLeave={() => hoverChange(0)} onMouseOver={() => hoverChange(1)} >Culture<span></span></a>

                </nav>
                <div className="nav-description">
                    <p style={{ transform: `opacity: 1; transform: translateY(0px)` }}>Keeping you upto date with the latest happenings from the city of Kathmandu.</p>
                    <div className="arrow" style={{ display: `block` }}  >
                        <Link to="body" spy={true} smooth={true} >
                            <svg x="0px" y="0px" viewBox="0 0 500 500">
                                <path
                                    d="M111,187.4c-7.6,6.6-7.6,17.3,0,23.9l116.2,101.2c7.6,6.6,19.8,6.6,27.4,0l116.2-101.2 c3.8-3.3,5.7-7.6,5.7-11.9c0-4.3-1.9-8.6-5.7-11.9c-7.6-6.6-19.8-6.6-27.4,0l-102.5,89.3l-102.5-89.3 C130.8,180.9,118.6,180.9,111,187.4z">
                                </path>

                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;