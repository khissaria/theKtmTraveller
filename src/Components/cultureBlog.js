import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import cultureImg2 from '../images/culture.jpg';
import cultureImg from '../images/goddess-kumari.gif';
import temple from '../images/temple.jpg';

const cultureBlog = () => {

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
                    <div className="story-header-text">Nepalese Cultural Diversity <br /> “The lifestyle of the local people”</div>
                    <div className="story-header-location">May 2021: Kathmandu, Nepal</div>
                </div>
            </header>
            <div className="story-post">
                <div className="story-post-image">
                    <div className="actual-image" style={{ backgroundImage: `url(${cultureImg})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>

                        “The Federal Democratic Republic of Nepal (former Kingdom of Nepal) is a rich country
                        in term of cultural heritage. Nepalese culture represents a fusion of Indo-Aryan and
                        Tibeto-Mongolian influences, the result of a long history of migration, conquest, and
                        trade. The Nepalese culture has many symbols from Hindu and Buddhist sources.
                        This multi-dimensional cultural heritage encompasses within itself the cultural
                        diversities of various ethnic, tribal, and social groups inhabiting different
                        altitudes, and it manifests in various forms: music and dance; art and craft;
                        folklores and folktales; languages and literature; philosophy and religion;
                        festivals and celebrations; and foods and drinks. Important among symbols for
                        the nation as a whole are the national flower and bird, the rhododendron and Danfe
                        (Lophophorous); the flag; and the crossed Kukhris (curved knives) of the Gurkhas.
                        In nationalistic rhetoric the metaphor of a garland with hundreds of flowers is used
                        to symbolize national unity amid cultural diversity. In Nepal they believe that
                        ‘unity in diversity’ and it is the Nepalese speciality.”

                <br />
                    </p>
                    <p>

                        “Home to some cultures and religions that have shaped the philosophical outlook of the
                        civilized world for the thousands of years, Nepal is not only a paradise for adventurers
                        but a scenic revelation, cultural inheritance, and an educational in it to all visitors.
                        Nepal is blessed with a unique diversity of natural beauty and cultural varieties that
                        occupies special places in both Hindu and Buddhist traditions.
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${temple})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        “According to Hindu mythology, the Himalayas are the abode of the gods,
                        and are specifically associated with lord Shiva, one of the three principal
                        Hindu deities. Pashupatinath, a large Shiva temple in Kathmandu, is among the
                        holiest sites in Nepal and attracts Hindu pilgrims from all over South Asia.
                        In the Kathmandu Valley alone, there are hundreds of such shrines, large and small,
                        in which the major gods and goddesses of the Hindu pantheon, as well as local and
                        minor divinities, are worshiped. Many of these shrines are constructed near by the
                        rivers or at the base of Pipal trees, which are considered sacred.
                        Beside this, Manakamana temple, DakshinKali, Muktinath, Gosainkunda, Khaptad,
                        and other more Hindu holy sites are popular for the cultural tour in Nepal.”
                        <br /><br /></p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${cultureImg2})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “For Buddhists, Nepal is significant as the birthplace of Lord Buddha,
                    the apostle of peace. It is also home to a number of important Buddhist
                    monasteries and stupas, including Bouddhanath and Swayambhu, whose dome
                    shaped architecture and painted all-seeing eyes have become symbols of the
                    Kathamandu Valley. Lumbini, the birthplace of Buddha,
                    is another major destination for Buddhist pilgrims and cultural tourism in Nepal.”
                    </p>
                    <p>
                        “The capital city of Kathmandu set in a wide valley ringed by forested hills and
                        snow-capped peaks is a fascinating city and an ideal base for cultural tourism in
                        Nepal. Together with another two ancient cities of Lalitpur (Patan) & Bhaktapur
                        (Bhadgaon), the three cities of the Kathmandu valley form the historical and cultural
                        heart of Nepal with number of unique templates, stupas, squares, places, and museums.
                        Places like Pokhara, Gorkha, Tansen, and Chitwan can provide a good projection into
                        Nepal's variegated attractions. Pokhara, with its lakes, Himalayan views and mellow
                        climate, is one of the most delightful place in the country and located 200 KMs away
                        from Kathmandu. Gorkha, the historical town, is a good take off points for short as
                        well as long haul treks. Chitwan National Park is easily accessible from all of the
                        major cities of Nepal is another good destination to understand the culture of
                        Tharu who are the ethnic people of low land, Terai.”
                    </p>
                </div>
            </div>


        </div>
    )

}

export default cultureBlog;