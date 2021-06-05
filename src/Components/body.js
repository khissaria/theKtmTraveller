import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ktm from '../images/ktm.jpg';
import ktm2 from '../images/ktm.webp';
import '../styles/bodyCSS.css';

const Body = () => {
    return (
        <div className="mb-0" id="body">
            <div className="dark-bg-gradient1">

                <div className="data-cards-holder" id="body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-white" style={{marginLeft:`1rem`}}>City</h2>
                            </div>
                            <div className="col-xl-6">
                                <p className="text-white mb-30" style={{marginLeft:`1rem`}}>Not just staying ahead, but redrawing the curve itself. Unifying all the things you can experience in the city at a single place. Driving a more synergistic engine.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="hr-data-cards dark-view">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="hr-data-media">
                                                <img className="img-fluid" src={`${ktm}`} alt="new-hr-media-2" />
                                            </div>
                                        </div>
                                        <div className="col-2 d-flex align-items-xl-center">
                                            <div className="hr-data-content">
                                                <div className="hr-label-holder"></div>
                                                <h4>Ditch the Map:<br/> A Day in the city</h4>
                                                <a className="common-link-dark" href="/blogs/day">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="hr-data-cards dark-view">
                                    <div className="row">
                                        <div className="col-2 order-sm-1">
                                            <div className="hr-data-media">
                                                <img className="img-fluid" src={`${ktm2}`} alt="new-hr-media-1" />

                                            </div>
                                        </div>
                                        <div className="col-2 d-flex align-items-xl-center">
                                            <div className="hr-data-content">
                                                <div className="hr-label-holder"></div>
                                                <h4>Around the City
                                          </h4>
                                                <a className="common-link-dark" href="/blogs/ktm">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Body;