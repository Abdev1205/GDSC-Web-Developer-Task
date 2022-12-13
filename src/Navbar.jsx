import React from 'react'
import { useState } from 'react';
function Navbar() {
    const menuIcon='https://i.postimg.cc/4NkJ6vGw/Frame-12-1-removebg-preview.png';
    const menuCloseIcon='https://i.postimg.cc/Vv608j73/Frame-22-1-removebg-preview.png';

    const [menuOn,setMenuOn]=useState(false)
    const [navListDisplay,setNavListDisplay]=useState()

    // Sorry for using these cheap technique

    const Toggle = ()=>{
        setMenuOn(!menuOn)
        setNavListDisplay("flex")
        
    }
    const menuClose = ()=>{
        setNavListDisplay(!navListDisplay)
    }
    return (
        <>
            <div className='nav'>
                <div className="nav-header">
                    
                    <img src="https://i.postimg.cc/sxGfz9nt/ezgif-com-gif-maker-8-removebg-preview.png" alt="" srcset="" />
                </div>

                
                
                <div style={{
                    display:navListDisplay
                }} className="nav-list">
                    <div className="nav-links-left">
                        <div  className="cancel-icon">
                            <img onClick={menuClose} src={menuCloseIcon} alt="" srcset="" />
                        </div>
                        <li className="nav-link">
                            <img className='nav-link-icon1' src="https://i.postimg.cc/c4RMwrNN/ezgif-com-gif-maker-9-removebg-preview.png" alt="" srcset="" />
                            <span>
                                Marketplace
                            </span> </li>
                        <li className="nav-link">
                            <img className='nav-link-icon2' src="https://i.postimg.cc/kXJcWzx5/ezgif-com-gif-maker-10-removebg-preview.png" alt="" srcset="" />
                            <span>
                                Stats
                            </span>
                        </li>
                        <li className="nav-link">
                            <img className='nav-link-icon3' src="https://i.postimg.cc/6qkCzFN1/ezgif-com-gif-maker-12-removebg-preview.png" alt="" srcset="" />
                            <span>
                                Resource
                            </span>
                        </li>
                        <li className="nav-link">
                            <img className='nav-link-icon4' src="https://i.postimg.cc/X7MBBh6G/ezgif-com-gif-maker-13-removebg-preview.png" alt="" srcset="" />
                            <span>
                                Create
                            </span>
                        </li>
                    </div>
                    <div className="nav-links-right">

                        <img className='nav-icons1' src="https://i.postimg.cc/cLNYcFkr/ezgif-com-gif-maker-15-removebg-preview.png" alt="" srcset="" />

                        <img className='nav-icons2' src="https://i.postimg.cc/tRPBW3PJ/ezgif-com-gif-maker-16-removebg-preview.png" alt="" srcset="" />
                        <h1> <img className='nav-icons3' src="https://i.postimg.cc/hjqBGn6M/ezgif-com-gif-maker-17-removebg-preview.png" alt="" srcset="" /> $100</h1>
                        <button>Contact</button>
                    </div>
                    
                </div>
                <div className="menu-icon">
                        <img onClick={Toggle} src={menuIcon} alt="" srcset="" />
                        
                    </div>
            </div>
        </>
    )
}

export default Navbar
