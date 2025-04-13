import React from "react";
import aboutCSS from './About.module.css';
import aboutImg from './../../assets/about-bg.png';

function About(){
    return (
    <div className={`${aboutCSS.about_wrapper} section`}>
        <div className={aboutCSS.about_image}>
            <img src={aboutImg} alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>
            <h2>Discover Organized <br /> Advantures the , <br /> Ultimate Travel Hack</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate beatae alias vitae sint dolores. Ratione eos quibusdam rerum beatae repellendus minima! Ea placeat molestiae recusandae exercitationem cumque ratione repellendus unde.</p>

            <div className={aboutCSS.about}>
                <p><i className="ri-building-4-line"></i> Accommodation</p>
                <p><i className="ri-car-line"></i> Transpotation allowance</p>
                <p><i className="ri-magic-line"></i> Exclusive Experiences</p>
                <p><i className="ri-instance-line"></i> local recommendation</p>
                <p><i className="ri-pin-dist-line"></i> personalized trip crafting</p>
                <p><i className="ri-phone-line"></i> 27/7 Support</p>
            </div>
        </div>
    </div>
    )
}

export default About;