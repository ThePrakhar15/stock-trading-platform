import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5' >
                <h1 className='fs-2 text-center'>To create a ticket , select a relevant topic</h1>

                <div className='col-4 p-5 mt-5 mb-5 '>
                    <h4 className=''>
                        <i class="fas fa-plus-circle"></i> User Account
                    </h4>
                     <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Online Account Opening</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}> Offline Account Opening </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Comany , partnership adn HUF Account </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Opening</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>NRI Account Opening</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Charges ar Zerodha </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Zerodh IDFC First Bank 3-in-1 Account</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Getting </a><br />
                </div>



                  <div className='col-4 p-5 mt-5 mb-5 '>
                    <h4 className=''>
                    <i class="fas fa-user"></i>Account Opening
                    </h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Your Profile</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}> Account modification </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Comany , partnership adn HUF Account </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Nomination</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Transfer and conversion of securities</a><br />
                </div>

                 <div className='col-4 p-5 mt-5 mb-5 '>
                    <h4 className=''>
                        <i class="fas fa-plus-circle"></i> 
                        Kite
                    </h4>
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>IPO</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}> Trading FAQs </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Margin Trading Facility and Margins </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Charts and order </a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>Alerts and Nudges</a><br />
                    <a href='' style={{ textDecoration: 'none', lineHeight: '2.5' }}>General </a><br />
                
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;