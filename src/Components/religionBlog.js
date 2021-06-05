import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import religion1 from '../images/religion1.jpg';
import religion2 from '../images/religion2.jpg';
import religion3 from '../images/religion3.jpg';
import religion4 from '../images/religion4.jpg';
import religion5 from '../images/religion5.jpg';
import religion6 from '../images/religion6.jpg';
import religion7 from '../images/religion7.jpg';



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
                    <div className="story-header-text">Religions in Nepal <br /> “Secular and Liberated”</div>
                    <div className="story-header-location">May 2021: Kathmandu, Nepal</div>
                </div>
            </header>
            <div className="story-post">
                <div className="story-post-image">
                    <div className="actual-image" style={{ backgroundImage: `url(${religion1})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>

                        “Nestled on the foothills of the mighty Himalayas,
                        Nepal is home to nearly 29,000,000 people adhering to their own ethnic groups and
                        religious beliefs. Although officially avowed a Hindu nation up until 2007,
                        people with varied religious beliefs have co-existed in harmony in Nepal for centuries.
                        As considered a cultural and religious melting pot, Nepal has seen an influx of many
                        other religions over time other than the predominant Hinduism. And yet, there hasn’t
                        been any known records of violence in terms of religion and Nepalese are rather proud of
                        that fact. Nepal has also been officially declared a secular country, is tolerant and
                        respectful towards all the existing religions. Religions practiced in Nepal are Hinduism,
                        Buddhism, Islam, Christianity, Sikhism, Kiratism, and many others”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion2})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p>
                        “Hinduism dominates the Nepalese demography. With almost 80% of the people adhering to the religion,
                        Nepal is unofficially proclaimed as a Hindu nation. Under the regime of the Malla dynasty, who ruled
                        over Nepal around 10th to 18th century, imposed a nationwide uniform religion to be Hinduism and it
                        reflects on the nation’s governance to peoples’ way of life to date. This is evident from
                        many temples and shrines dedicated to Hindu gods and deities throughout the country.
                        Referring to the legends, a sage named Ne Muni introduced Hinduism in Nepal in prehistoric times.
                        It is said that the first-ever king of Nepal- Bhuktaman was nominated by the sage and helped laid
                        the foundation for the Gopala Dynasty. It is also believed the nation is named after Ne Muni and
                        the Nepalese triangular flag has been handed to the people of Nepal by the Hindu god Vishnu himself.”
                    </p>
                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion3})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “A predominant religion in Asia and many other parts of the world, roots back to a small city of Lumbini in Nepal
                    being the birthplace of the Lord Buddha. As the archaeological finding suggests Siddhartha Gautama,
                    crown prince of the Shakya Dynasty resided in his palace in Lumbini before venturing elsewhere in-order
                    to seek enlightenment and later become Lord Buddha. The Shakyas and his immediate disciples are believed
                    to be the source of initial dissemination of the religion and flourished in the regime of Emperor Ashoka.
                    After the uniformity of Hinduism by the Mallas, there was a gradual decline and most of its practices
                    were dwarfed by Hinduism. According to the 2011 census, it is estimated that 9% of people follow Buddhism,
                    a decline from 10.7% estimated in the 2001 census. It’s followers consisting mainly of
                    Tibeto-Burman-speaking ethnics, the Newars.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion4})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “Islam comes third with 4.4% of the total people adhering to religion.
                    The first Muslims to arrive in Nepal were Kashmiris, Persians, Afghans,
                    and Arabians who were traders, courtiers, ammunition manufacturers and
                    some also worked as musicians for the kings of Nepal.
                    The present-day Muslims are the direct descendant of these people and some were
                    Kashmiri merchants who arrived as late as the 1970s and Tibetian Muslims who arrived
                    in the country post-1959 after the communist takeover in China.
                    The most concentration of Muslims can be found in the Terai region of Nepal
                    sharing cultural similarities with North-Indian Muslims.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion5})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “Kiratism is an ancient religion assumed to have been originated in Nepal.
                    With 3% of the total population practicing Kiratism, its major followers are the
                    indigenous Himalayan tribes- Limbu, Rai, Sunwar, and Yakkha. Each tribe has its
                    own distinctive religious texts (Kirat Mundhum), rituals, traditions, and beliefs.
                    Their festivals include Udhauli and Ubhauli marking the onset of winter and summer.
                    This religion mainly worships their ancestors (Kul Devtas)and the nature and Gods
                    like Sumnina-Paruhang and Tegra Ningwaphumang, a shapeless entity.
                    Kiratism combines the beliefs of Tibetan Buddhism, Shaivism, and animism.
                    Kiratism also has direct roots in Hinduism and there is a clear mention and
                    acknowledgment in the religious Hindu texts and scriptures.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion6})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “Christianity is the fastest-growing religion in present-day Nepal.
                    Although only 1.4% of people adhere to religion, the numbers are increasing.
                    Most Christians in Nepal are Evangelic Protestants and few Catholics and Mormons.
                    Christianity was banned for almost two centuries in Nepal up until 1951.
                    The first church in Nepal- The Ram Ghat Church was built in Pokhara in 1952.
                    Nepal has encountered influx of missionaries who built hospitals and made efforts
                    in education in the rural parts of Nepal. However, the conversion and influencing
                    people to alter religion remained illegal. With the introduction of a multi-party
                    democratic system, the situation has improved immensely.”
                    </p>

                </div>
            </div>
            <div className="story-post">
                <div className="story-post-image smaller">
                    <div className="actual-image"
                        style={{ backgroundImage: `url(${religion7})` }}>
                    </div>
                </div>
                <div className="story-post-text">
                    <p> “Despite having a significant number of followers (aside from the major ones), they still fail to show up in statistics. The remaining 0.9% of the Nepalese populations are made up of Sikhs, Jains, Bahais, and Jews.
                    The Bon religion can be found in the villages of Upper Dolpo and Mustang. It originated from Tibet and is derived from Buddhism. Approximately, 13000 people reside in the Himalayan region of Nepal.”
                    </p>
                    <p> “Nepal being secular embraces every religion with the up-most respect and people from all over the world with any religious affiliation are welcome here. There is no law imposing regularities when it comes to religion and
                    Nepal itself being a melting pot of religions, acknowledges liberty in religious practices.”
                    </p>
                </div>
            </div>


        </div>
    )

}

export default cultureBlog;