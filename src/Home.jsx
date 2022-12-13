import React from 'react'
import Wave from './images/wave.svg'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Connect from './Connect'
function Home() {
    return (

        // This is home section 


        <div id="home">

        {/* I can use good method and technique to implement wave background insted of these */}
            <div className="home-1">
            <Navbar/>
            <Hero/>
            </div>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0f1014" fill-opacity="1" d="M0,32L720,160L1440,32L1440,0L720,0L0,0Z"></path>
                </svg>
            </div>
            <Card/>
            <Connect/>
            
            

        </div>
    )
}

export default Home
