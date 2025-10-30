import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/largestBroker.svg' />
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order voulumes in India daily by trading and investion in </p>

                    <div className='row mb-5' >
                        <div className='col-6 p-5'>  <ul>
                            <li>
                                <p>Futures and Option</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>
                                    Currency derivatives
                                </p>
                            </li>
                        </ul></div>
                        <div className='col-6 p-5'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>
                                        Bonds and Govt. Securites
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src='\Media\pressLogos.png' style={{width: '90%'}} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Awards;