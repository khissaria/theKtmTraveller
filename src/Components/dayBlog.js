import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import ktm from '../images/ktm.jpg';
import swayambhu from '../images/swayambhu.jpg';
import durbar from '../images/durbar.webp';
import pashupati from '../images/pashupathi.jpg';
import thamel from '../images/thamel.jpg';
import market from '../images/market.jpg';
import krishnarpan from '../images/krishnarpan.jpg';
import irish from '../images/irishpub.webp';

const dayBlog = () => {

    return (
        <div className="main-wrapper">
            <div className="page-border border-top"></div>
            <div className="page-border border-left"></div>
            <div className="page-border border-right"></div>
            <div className="page-border border-bottom"></div>
            <header className="story-header">
                <nav className="header-nav dark">
                <div className="tag"><span style={{float:`left`}}><a href='/' >THE KATHMANDU TRAVELLER</a></span></div>
                    <span className="right"><a href="/" className="more-stuff">CITY</a><span className="spacer"></span><a
                        href="/culture" className="more-stuff">CULTURE</a></span></nav>
                <div className="story-header-container"><svg className="badge-svg">

                </svg>
                    <div className="story-header-text">Ditch the Map <br /> A day in the City</div>
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

                        “The city of Kathmandu is a potpourri of various aspects of urban living. The perfect specimen
                        of a place that has learnt to live with the old and the modern, Kathmandu could be confusing for a
                        traveller to explore in a day. With lots to explore and see, you will feel the need of a perfect
                        Kathmandu itinerary to help you get the best of the city in 24 hours. Start the day with sightseeing
                        (Durbar Square, Swayambhunath Temple and Pashupatinath Temple) before going for mountain flights along
                        the Himalayas. Towards the afternoon, opt for a walk along the alleys of Thamel
                        region of the city and do some shop hopping. You can end the day with a refreshing
                        rendezvous with locals and fellow travellers in Paddy Foley’s Irish Pub.”
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
                        <b>Durbar Square</b> -  “Now a UNESCO World Heritage Site, this medieval square constitutes the core of Kathmandu’s old town.
                        Built between the 12th and the 18th centuries, this is the best place to admire traditional Nepalese
                        architecture. It comprises of three squares, with Hanuman Dhoka or the Old Royal Palace being the major
                         landmark. Dating to the 17th century, the palace encloses a series of residential quarters, temples
                         and a museum built around chowks or courtyards. The Durbar Square is also dotted with a series of
                          temples, statues and other historic buildings; such as Kumari Chowk, the home of Kathmandu’s living
                          goddess; and Kasthamandap, believed to be the oldest building in Kathmandu.”
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
                        <b>Swayambunath Temple</b> -   “Perched on top of a hill, this Buddhist stupa lies on the
                        outskirts of the city. Thanks to the presence of a large number of monkeys, it also known
                         as the monkey temple. The central white stupa is topped by a golden spire that depicts Buddha’s
                         eyes in all the four directions. It is surrounded by beautifully-carved temples, statues of
                          deities, fluttering prayer flags and Buddhist prayer wheels.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${pashupati})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Pashupathinath Temple</b> -  “Situated on the banks of the Bagmati River,
                        the massive Pashupatinath complex is one of the holiest pilgrimage spots in Nepal.
                         It’s best-known for housing a major temple of the Hindu god Shiva,
                         also known as Pashupati. While the present temple was constructed in
                         the 17th century, its history dates back to 400 AD. It has been built in
                          the pagoda style of architecture, with a two-tiered roof rising above the
                          central shrine. Only Hindus are allowed to enter the temple premises.
                          The central point of interest is the black four-headed idol of Pashupati,
                          and a golden statue of his bull, Nandi.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${thamel})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Thamel Walk</b> - “If you are interested in doing some activity in Kathmandu
                        Valley and you are not sure about where to start, then a stroll in the vibrant
                        streets of Thamel is something you should undertake. A happening place in every
                        sense of the term, there are many shops, boutiques and restaurants here along
                        with bright colourful hoarding that will give you ideas about what to do next.
                        The streets of Thamel will offer various activities to traveller of all kinds.
                        Take a walk to the nearby Garden of Dreams and resume reading your favourite book
                        while taking the pleasant sun on your back. Most of all, you can find a pandora’s
                        box of hidden treasures with local flavour and native touches that will tease the
                        traveller in you.”
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${market})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Market Hopping</b> - “Market areas (more popular as bazaars) constitute a
                        significant part of Kathmandu’s day to day life. They are also significant from a
                        traveller’s point of view. The traditional market places in the city are not new
                        establishments; they are rather old and vintage. You will get anything and everything in them,
                        from colorful shawls to the local spices, beautiful Thanka painting and dancing dolls! Main
                        city bazaars like Ason and Mangal bazaar are two of the best places to collect souvenir for your
                         living room. If you have some good bargain skills, shopping on the streets of Kathmandu is a
                          fun as well as deal breaking experience.”
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${krishnarpan})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Krishnarpan</b> - “Housed in one of Kathmandu’s most posh stays, Dwarika’s Hotel,
                        Krishnarpan is a restaurant that serves authentic Nepali cuisines which will take you
                        a step closer to the enthralling terrains and cuisines of Nepal. A fine dining space where
                        you can relish your food at your own pace, Krishnarpan celebrates the ritual feasts enjoyed
                        by Kathmandu valley's Newari people. They have meals ranging from 6 to 22 courses and are
                        prepared with farm fresh vegetables by expert chefs. Enjoy your meal served on traditional
                        brass and earthenware while you relish the mouthwatering delicacies.”
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${irish})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        <b>Paddy Foley's Irish Pub</b> - “In business since 1998, Paddy Foley’s Irish Pub is
                        located in Kathmandu’s most famous commercial centre, Thamel. With a seating capacity
                        of more than 150 patrons, Paddy Foley’s Irish Pub is an amazing place to let your hair
                         loose after a long tiring day of sightseeing and roaming around. Highly popular among
                        the locals and travellers, this place is known for serving some of Kathmandu’s best
                        stored liquors. Apart from international names, one can try out various locally
                        brewed spirits that will give you an idea of the native’s taste buds and beverage
                        preference. One thing that stands out about Paddy Foley’s Irish Pub is its culinary
                        delights; do not miss out on trying their Continental & Irish cuisines.
                        Music lovers must hit this place while vacationing in Kathmandu as this
                        place plays live music very frequently. Thanks to the pool table in its lobby,
                        you can also challenge a friend over a game of pool or snooker!”
                    </p>
                </div>
            </div>


        </div>
    )
}

export default dayBlog;