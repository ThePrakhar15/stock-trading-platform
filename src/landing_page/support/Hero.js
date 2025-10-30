import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id = 'supporthero'>   
            <div className=' p-5 ' id='supportWrapper'>
                <h4 >Support Portal</h4>
                <a href=" ">
                    Track ticket
                </a>
            </div>
            <div className='row p-3 mx-5  ' >
                <div className='col-6 p-5  '>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder ="Eg. how do I activate m"/><br/>
                    <a href=''>Track account opening</a>
                    <a href=''>Track segement activation </a>
                    <a href=''>Intraday margins</a>
                    <a href=''>Kite user manual</a>
                    </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=' '>Current Takeovers and Delisting - January </a></li>
                        <li> <a href=''>
                        Latest Intraday leverages- MIS&CO
                    </a></li>
                    </ol>
      
                </div>
              
            </div>
        </section>
    );
}

export default Hero;