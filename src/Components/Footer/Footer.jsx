import React from "react";
import footerCSS from './Footer.module.css';

function Footer(){
    return (
        <div className={`${footerCSS.Footer_wrapper} section`}>
            <div className={footerCSS.top_container}>
                <div className={footerCSS.logo}>
                    <a href="#">Travelia</a>
                </div>
                <div className={footerCSS.social}>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-line"></i>
                    <i className="ri-youtube-line"></i>
                </div>
            </div>
            <div className={footerCSS.bottom_container}>
                <div className={footerCSS.footerLinks}>
                    <h3>About Travelia</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">our History</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Destinations</h3>
                    <ul>
                        <li><a href="#">USA</a></li>
                        <li><a href="#">Latin America</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">Africa</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Request a Quote</a></li>
                        <li><a href="#">Booking Conditions</a></li>
                        <li><a href="#">Recommendation</a></li>
                    </ul>
                </div>
                <div className={footerCSS.footerLinks}>
                    <h3>our NewaLetter</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                   <div className={footerCSS.inputwrapper}>
                    <input type="email" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;