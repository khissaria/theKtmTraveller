import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import religionImg from '../images/religions.jpg';
import cultureImg2 from '../images/culture.jpg';
import cultureImg3 from '../images/culture2.jpg';
import cultureImg from '../images/goddess-kumari.gif';

const cultureNav = () => {

    return (
        <div className="main-wrapper">
            <div className="page-border border-top"></div>
            <div className="page-border border-left"></div>
            <div className="page-border border-right"></div>
            <div className="page-border border-bottom"></div>
            <header className="post-page-header">
                <nav className="header-nav dark">

                    <span className="right">
                        <a href="/" className="more-stuff">CITY</a>


                    </span>
                    
                </nav>
            </header>
            <div className="series-home-header container-header">
                <h1>THE KATHMANDU TRAVELLER</h1>
                <h2>CULTURE</h2>
                <p className="series-synopsis">
                    The crucial differences which distinguish human societies and human beings are not biological.<br /> They are cultural.
            </p>
            </div>
            <div className="series-callout centered-callout right dark" style={{ backgroundColor: `rgb(238, 228, 219)`, backgroundImage: `url(${cultureImg3})` , backgroundSize:`cover` }}>
                <div className="callout-wrapper">
                    <div className="align">
                        <h1 className="hony-name">THE KATHMANDU TRAVELLER</h1>
                        <h2 className="series-title" style={{ color: `rgb(198, 106, 31)` }}>Nepali<br />Culture</h2>
                        <button className="dark"><a href='/blogs/culture'>READ<span></span></a></button>
                    </div>
                </div>
            </div>
            <div className="series-callout centered-callout left dark" style={{ backgroundColor: `rgb(101, 109, 112)`, backgroundImage: `url(${religionImg})`,backgroundSize:`cover` }}>
                <div className="callout-wrapper">
                    <div className="align">
                        <h1 className="hony-name" style={{ color: `#fff` }}>THE KATHMANDU TRAVELLER</h1>
                        <h2 className="series-title" style={{ color: `#fff` }}>Religions</h2>
                        <button className="dark" ><a href='/blogs/religion'>READ<span></span></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cultureNav;