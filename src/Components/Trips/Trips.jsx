import React from "react";
import TripCSS from './Trips.module.css';

import trip01 from './../../assets/Trips01.jpg'
import trip02 from './../../assets/Trips02.jpg'
import trip03 from './../../assets/Trips03.jpg'
import trip04 from './../../assets/Trips04.jpg'
import trip05 from './../../assets/Trips05.jpg'
import trip06 from './../../assets/Trips06.jpg'
import trip07 from './../../assets/Trips07.jpg'
import trip08 from './../../assets/Trips08.jpg'

function Trips(){
    return (
        <div className={`${TripCSS.trips_wrapper} section`}>
            <h2>Popular Trips</h2>

            <div className={TripCSS.cards}>
                <div className={TripCSS.card}>
                    <img src={trip01} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>Australia Panorma</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>7 Days</span>
                            <span><i className="ri-map-pin-line"></i>5 places</span>
                            <span><i className="ri-flag-line"></i>Australia</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$1,200</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip02} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>Best of Spain</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>5 Days</span>
                            <span><i className="ri-map-pin-line"></i>15 places</span>
                            <span><i className="ri-flag-line"></i>Spain</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$1,600</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip03} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                            <i className="ri-star-line"></i>
                            <i className="ri-star-line"></i>
                        </div>

                        <h3>Best of Italy</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>15 Days</span>
                            <span><i className="ri-map-pin-line"></i>8 places</span>
                            <span><i className="ri-flag-line"></i>Italy</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$1,860</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip04} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>

                        <h3>Canyonlands</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>5 Days</span>
                            <span><i className="ri-map-pin-line"></i>8 places</span>
                            <span><i className="ri-flag-line"></i>Canyonlands</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$1,560</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip05} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <h3>India</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>10 Days</span>
                            <span><i className="ri-map-pin-line"></i>25 places</span>
                            <span><i className="ri-flag-line"></i>India</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$3,200</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip06} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>France Discovery</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>7 Days</span>
                            <span><i className="ri-map-pin-line"></i>5 places</span>
                            <span><i className="ri-flag-line"></i>France</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$900</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip07} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>Japan In Work</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>7 Days</span>
                            <span><i className="ri-map-pin-line"></i>4 places</span>
                            <span><i className="ri-flag-line"></i>Japan</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$2,200</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className={TripCSS.card}>
                    <img src={trip08} alt="" />
                    <div className={TripCSS.TripContent}>
                        <div className={TripCSS.rating}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-fill"></i>
                        </div>

                        <h3>Explore Bali 10-Day Tour</h3>

                        <div className={TripCSS.TripDetails}>
                            <span><i className="ri-calendar-line"></i>10 Days</span>
                            <span><i className="ri-map-pin-line"></i>25 places</span>
                            <span><i className="ri-flag-line"></i>Bali</span>
                        </div>

                        <div className={TripCSS.Pricing}>
                            <span className={TripCSS.price}>$2800</span>
                            <button className={TripCSS.book}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trips;