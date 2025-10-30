import React from 'react';
function Universe() {
    return (
        <div className="container mt-5">
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4  p-3 mt-5'>
                    <img src="Media/smallcaseLogo.png" />
                    <p className="text-small  text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className='col-4  p-3 mt-5'>
                    <img src= "Media/streakLogo.png"  style={{width: '130px'}} className="mb-2"/>
                    <p className="text-small  text-muted">Algo & strategy </p>
                </div>
                <div className='col-4 p-3 mt-5 '>
                    <img src="Media/sensibullLogo.svg" style={{width: '130px'}} className="pb-3"/>
                    <p className="text-small  text-muted">Options trading Platform</p>
                </div>
               
                <div className='col-4  p-3 mt-5'>
                    <img src= "Media/zerodhaFundHouse.png" style={{width: '130px'}} className="mb-2" />
                    <p className="text-small  text-muted">Asset management</p>
                </div>
                 <div className='col-4  p-3 mt-5'>
                    <img src="Media/goldenpiLogo.png" />
                    <p className="text-small  text-muted">Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="Media/dittoLogo.png" style={{width: '130px'}} className="mb-2"/>
                    <p className="text-small  text-muted">Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5' style={ { width:"20%" , margin:" 0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;