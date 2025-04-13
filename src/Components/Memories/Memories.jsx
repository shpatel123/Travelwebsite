import React from "react";
import memoriesCSS from './Memories.module.css';

import memoriesImg1 from './../../assets/travelport1.jpg'
import memoriesImg2 from './../../assets/travelport2.jpg'
import memoriesImg3 from './../../assets/travelport4.jpg'
import memoriesImg4 from './../../assets/travelport3.jpg'
import memoriesImg5 from './../../assets/travelport5.jpg'
import memoriesImg6 from './../../assets/travelport6.jpg'
import memoriesImg7 from './../../assets/travelport7.jpg'

function Memories(){
    return (
        <div className={`${ memoriesCSS.Memories_wrapper } section`}>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg1} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Small Groups Depurtures</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg2} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg3} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Undiscovers Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg4} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Let Our Experts Pan <br /> Your 2024 Journey</h3>
                    <button>View Tours</button>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg5} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Religious Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg6} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Solo Travel</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={memoriesImg7} alt="Memories-img" />

                <div className={memoriesCSS.content}>
                    <h3>Pravite Touring</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
        </div>
    )
}
export default Memories