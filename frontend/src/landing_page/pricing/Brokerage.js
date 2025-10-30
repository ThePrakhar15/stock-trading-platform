import React from 'react';
function Brokerage() {
    return (
        <div className='container' >
            <div className='row p-4 mt-5 text-center border-top'>
                <div className='col-8 p-5'>
                    <a href=" " style={{ textDecoration: 'none' }}>
                        <h3 className='fs-5'>Brokerage calculator</h3>
                    </a>

                </div>
                <div className='col-4 p-5'>
                    <a href='' style={{ textDecoration: 'none' }}>
                        <h3 className='fs-5'>List of charges</h3>
                    </a>
                </div>

                <ul className='text-muted' style={{textAlign:'left' , lineHeight:'2.5' , fontSize:'12px'}}>
                    <li>Online account</li>
                    <li>Offline account</li>
                    <li>NRI account (offline only)</li>
                    <li>Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
                </ul>
            </div>
        </div >
    );
}

export default Brokerage;