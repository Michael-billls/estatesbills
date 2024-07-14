import React from "react";
import "./filter.scss";

const Filter = () => {
    return (
        <div className="filter">
            <h1>
                Search results for <b>Ghana</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City location"
                    />
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Types</label>
                    <select name="type" id="type">
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                        <option value="">Any</option>
                    </select>
                </div>{" "}
                <div className="item">
                    <label htmlFor="Property">Property</label>
                    <select name="property" id="property">
                        <option value="apartment">House</option>
                        <option value="house">Apartment</option>
                        <option value="">Any</option>
                        <option value="land">land</option>
                        <option value="hostel">hostel</option>
                    </select>
                </div>{" "}
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="miniPrice"
                        placeholder="any"
                    />
                </div>{" "}
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                    />
                </div>{" "}
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="any" />
                </div>
            </div>
        </div>
    );
};

export default Filter;
