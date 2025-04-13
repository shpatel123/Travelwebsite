import React from "react";
import searchCSS from './Search.module.css';

function Search(){
    return(
        <div className={`${searchCSS.search_wrapper} section`}>
            <h2>Popular Searches</h2>

            <div className={searchCSS.Cards}>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Domestic Trips <span>See America In a New Light</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3> Vacations in 14 Days<span>Limited Avaliabilty and Seling Fast</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3> offer for Traveling Groups <span>Save When you 9+ Guests</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3> Past Guests Benifits <span>Saving With Global Tour Rewards</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3> Tours Under $2000 <span>Browse Our Value Vacations</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3> Past Guests Benifits <span>Saving With Global Tour Rewards</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Search;