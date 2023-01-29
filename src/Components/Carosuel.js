import React from 'react'
import { BsFacebook, BsSkype } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsSnapchat } from 'react-icons/bs'
import sun3 from './images/sun3.webp'
import sun4 from './images/sun4.jpg'
import sun5 from './images/sun5.jpg'
// import { img } from './images/img.jpg'

const Carosuel = () => {
    return (
        <div className='positon-relative z-0 tribute'>

            <div className="heading position-absolute z-1  text-white fw-bold" style={{ left: "33%", top: "70%" }} >
                <h1 className='fw-bold text-uppercase' style={{ marginLeft: "20px" }}>Sundar Pichai</h1>
                <h4 className='text-uppercase' >The Man who is CEO of Google</h4>
            </div>
            <div id="carouselExampleControls" className="carousel slide     " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: "100vh" }}>
                        <img src={sun3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: "100vh" }}>
                        <img src={sun4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: "100vh" }}>
                        <img src={sun5} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-5 card p-3 text-white shadow-lg" style={{ background: "#4a424263" }}>
                <h2 className='mx-3 mb-3'>About Sundar Pichai</h2>
                <ul className='w-70' style={{ fontSize: "20px" }}>
                    <li>Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai, is an Indian-American business executive.</li>
                    <li>He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.</li>
                    <li> Pichai joined Google in 2004, where he led the product management and innovation efforts for a 
                        suite of Google's client software products, including Google Chrome and ChromeOS, as well as being largely responsible for Google Drive.</li>
                    <li>Pichai had been suggested as a contender for Microsoft's CEO in 2014, a position that was eventually given to Satya Nadella.</li>
                    <li>In December 2019, Pichai became the CEO of Alphabet Inc.</li>
                    <li>In December 2020, Pichai delivered a speech virtually at the Singapore FinTech Festival emphasizing inclusive digital economy.</li>
                </ul>
                <h3>Why is Sundar Pichai so successfull?</h3>
                <div style={{ fontSize: "20px" }}>
                    <h5>College life</h5>
                    <p>He studied at IIT Kharagpur and then Stanford University in America, both with the help of his father's income and the scholarship he earned. Sundar Pichai topped his batch in the Metallurgy department, his name is on the IIT Kharagpur Metallurgy honours board to this day.
                         He changed the way the world functioned when he launched Google Chrome in 2008. This was one of the highest achievements in his career that put him on the global map.</p>
                    <h5>Awards and recognition</h5>
                    <div>
                        <p>In 2022, Pichai received the Padma Bhushan from the Government of India, its third-highest civilian award. On 3rd Dec 2022, Taranjit Singh Sandhu (India's Ambassador to the US) handed over the Padma Bhushan Award to Google and Alphabet CEO Sundar Pichai in San Francisco.</p>
                    </div>
                    <h5>Personal life</h5>
                    <div>
                        <p>Pichai is married to Anjali Pichai and has two children. His recreational interests include cricket and football.</p>
                    </div>
                  
                  
                </div>
            </div>
            <div className="container my-5 card p-3  shadow-lg" style={{ background: "transparent" }}>
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"> <BsFacebook style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <BsInstagram style={{ fontSize: "34px", margin: "20px" }} /></a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"> <BsWhatsapp style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                    <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer"> <BsSnapchat style={{ fontSize: "34px", margin: "20px" }} />
                    </a>

                    <a href="https://www.skype.com/en/" rel="noreferrer" target="_blank"> <BsSkype style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Carosuel