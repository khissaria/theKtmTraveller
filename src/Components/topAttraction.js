import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import ktm from '../images/ktm.webp';
import swayambhu from '../images/swayambhu.jpg';
import durbar from '../images/durbar.webp';
import boudha from '../images/boudha.webp';
import patan from '../images/patan.webp';

import skydive from '../images/skydive.webp';
import mountain from '../images/mountain.jpg';


const topAttraction = () => {

    return (
        <div className="main-wrapper">
            <div className="page-border border-top"></div>
            <div className="page-border border-left"></div>
            <div className="page-border border-right"></div>
            <div className="page-border border-bottom"></div>
            <header className="story-header">
                <nav className="header-nav dark">
                    <div className="tag"><span style={{ float: `left` }}><a href='/' >THE KATHMANDU TRAVELLER</a></span></div>

                    <span className="right"><a href="/" className="more-stuff">CITY</a><span className="spacer"></span><a
                        href="/culture" className="more-stuff">CULTURE</a></span></nav>
                <div className="story-header-container"><svg className="badge-svg">

                </svg>
                    <div className="story-header-text">Religions in Nepal <br /> “Secular and Liberated”</div>
                    <div className="story-header-location">May 2021: Kathmandu, Nepal</div>
                </div>
            </header>
            <div className="story-post">
                <div className="story-post-image">
                    <div className="actual-image" style={{ backgroundImage: `url(${ktm})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>

                        “Nestled in the Kathmandu Valley,
                        Nepal’s capital has long been a favourite with backpackers and a base camp
                        for adventurers heading to the Himalayas. Part of a UNESCO World Heritage Site,
                        Kathmandu also abounds in artistic and cultural wealth. Whether it’s the peaceful
                        Buddhist stupas, the bustling temples or the historic monuments, Kathmandu offers
                        a multitude of experiences.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${mountain})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Mountain Flights</b> - “The world's highest peak Mount Everest is also Nepal's central attraction. Don't be disheartened if you
                        can't make the arduous trek-there are several convenient flights that offer close-up views of Everest and
                        surrounding peaks such as Shisha Pangma, Gauri Shankar and Melungtse.
                        Most local airlines offer daily hour-long flights from Kathmandu in small aircrafts,
                        with all passengers getting window seats. Clearer weather guarantees better views, and the best season
                        for flying is between February and March, and October to November.”
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${skydive})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Everest Skydive</b> - “The Everest Skydive in Nepal is guaranteed to give you an adventurous high.
                         Divers are taken aboard an aircraft, and then allowed to jump from 29,500 feet (higher than Everest)
                         for a free-fall past the world’s tallest peak. An attached parachute ensures a smooth descent and
                         soft landing. Both solo and guided skydives can be arranged.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${boudha})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Boudhanath Stupa</b> -  “Situated on the north-eastern edge of Kathmandu, this large white stupa
                        is a major centre of Tibetan Buddhism. It lies on an ancient trade route between Lhasa and Kathmandu,
                        and was an important stop for Tibetan traders travelling to the higher reaches of the Himalayas.
                        Believed to house Buddha’s relics, it is also among the largest stupas in Asia. The best times
                        to visit are early morning and dusk, when you can observe monks chanting their prayers and butter
                        lamps being lit.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${patan})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Patan Darbar Square</b> -   “The former capital of an independent kingdom, Kathmandu’s neighbouring town Patan lies across the Bagmati River. Situated in the heart of Patan,
                    this Durbar Square is worth visiting for its beautiful Newari architecture. It is dominated by the
                    medieval Royal Palace, as well as numerous old religious structures such as the Krishna Temple,
                    Bhimsen Temple and the Golden Temple of Hiranya Varma. Constructed in the second half of the 17th
                    century, the Royal Palace consists of three beautifully-decorated wings. It also houses the
                    well-maintained Patan Museum, which has a good collection of wood carvings, old photographs,
                    bronze and stone sculptures, and other artefacts.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${durbar})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Durbar Square</b> -  “Now a UNESCO World Heritage Site, this medieval square
                        constitutes the core of Kathmandu’s old town. Built between the 12th and the 18th
                        centuries, this is the best place to admire traditional Nepalese architecture.
                        It comprises of three squares, with Hanuman Dhoka or the Old Royal Palace being
                        the major landmark. Dating to the 17th century, the palace encloses a series of
                        residential quarters, temples and a museum built around chowks or courtyards.
                        The Durbar Square is also dotted with a series of temples, statues and other historic
                        buildings; such as Kumari Chowk, the home of Kathmandu’s living goddess; and Kasthamandap,
                         believed to be the oldest building in Kathmandu.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${swayambhu})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Swayambhunath Temple</b> - “Perched on top of a hill, this Buddhist stupa lies on the
                     outskirts of the city. Thanks to the presence of a large number of monkeys, it also known
                     as the monkey temple. The central white stupa is topped by a golden spire that depicts
                     Buddha’s eyes in all the four directions. It is surrounded by beautifully-carved temples,
                     statues of deities, fluttering prayer flags and Buddhist prayer wheels.”
                    </p>
                </div>
            </div>


        </div>
    )
}

export default topAttraction;