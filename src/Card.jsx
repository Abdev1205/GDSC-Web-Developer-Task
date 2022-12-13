import React from 'react'
import Chicago from './images/chicago.mp4'
import Los_Angeles from './images/Los_Angeles.mp4'
import Seol from './images/seol.mp4'
function Card() {
    return (
        <>

        {/* card section */}
        {/* I can use Map function here but I have to render only 3 card so I done bad hard coading  */}

            <div className="card-row">
                <div className="card-1">
                    <div className="card-video">
                        <video autoPlay muted loop>
                            <source src={Chicago} type="video/mp4" />
                        </video>

                        <h1>Chicago</h1>
                        <h2>Owned by Walk_Off</h2>
                        <div className="price-section">
                            <img src="https://i.postimg.cc/9fPN6GvW/ezgif-com-gif-maker-18-removebg-preview.png" alt="" srcset="" />
                            <h1>0.25 WETH</h1>
                            <button>Bid</button>

                        </div>

                    </div>
                    
                </div>
                <div className="card-1">
                    <div className="card-video">
                        <video autoPlay muted loop>
                            <source src={Seol} type="video/mp4" />
                        </video>
                        <h1>Seoul</h1>
                        <h2>Owned by Trey_Ratcliff
                        </h2>
                        <div className="price-section">
                            <img src="https://i.postimg.cc/9fPN6GvW/ezgif-com-gif-maker-18-removebg-preview.png" alt="" srcset="" />
                            <h1>5 ETH</h1>
                            <button>Bid</button>

                        </div>

                    </div>

                </div>
                <div className="card-1">
                    <div className="card-video">
                        <video autoPlay muted loop>
                            <source src={Los_Angeles} type="video/mp4" />
                        </video>
                        <h1>Los Angeles</h1>
                        <h2>Owned by Trey_Ratcliff</h2>
                        <div className="price-section">
                            <img src="https://i.postimg.cc/9fPN6GvW/ezgif-com-gif-maker-18-removebg-preview.png" alt="" srcset="" />
                            <h1>0.25 WETH</h1>
                            <button>Bid</button>

                        </div>

                    </div>

                </div>
            </div>
           

        </>
    )
}

export default Card
