import React from "react";
import "./singlePage.scss";
import Slider from "../../component/slider/Slider";
import { singlePostData } from "../../library/dummydata";
import { useData } from "../../library/dummydata";
import BasicMap from "../../component/map/BasicMap";
import Navbar from "../../component/navbar/Navbar";
const SinglePage = () => {
    return (
        <>
            <Navbar />
            <div className="singlePage">
                <div className="details">
                    <div className="wrapper">
                        <Slider images={singlePostData.images} />
                        <div className="info">
                            <div className="top">
                                <div className="post">
                                    <h1>{singlePostData.title}</h1>
                                    <div className="address">
                                        <img src="/pin.png" alt="" />
                                        <span>{singlePostData.address}</span>
                                    </div>
                                    <div className="price">${singlePostData.price}</div>
                                </div>
                                <div className="user">
                                    <img src={useData.img} alt="" />
                                    <span>{useData.name}</span>
                                </div>
                            </div>
                            <div className="bottom">{singlePostData.descriptiion}</div>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="wrapper">
                        <p className="title">General</p>
                        <div className="listVertical">
                            <div className="feature">
                                <img src="/utility.png" alt="" />
                                <div className="featureText">
                                    <span>Utilities</span>
                                    <p>Rentor is responsible</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/pet.png" alt="" />
                                <div className="featureText">
                                    <span>Pet Policy</span>
                                    <p>Pet is Allowed</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/fee.png" alt="" />
                                <div className="featureText">
                                    <span>Property Fees</span>
                                    <p>Must have 3x the rent in total household income</p>
                                </div>
                            </div>
                        </div>
                        <p className="title">Sizes</p>
                        <div className="sizes">
                            <div className="size">
                                <img src="/size.png" alt="" />
                                <span>80sqft</span>
                            </div>
                            <div className="size">
                                <img src="/bed.png" alt="" />
                                <span>beds</span>
                            </div>
                            <div className="size">
                                <img src="/bath.png" alt="" />
                                <span>bathroom</span>
                            </div>
                        </div>
                        <p className="title">Nearby Places</p>
                        <div className="listHorizontal">
                            <div className="feature">
                                <img src="/school.png" alt="" />
                                <div className="featureText">
                                    <span>School</span>
                                    <p>250m away</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/bus.png" alt="" />
                                <div className="featureText">
                                    <span>Bus Stop</span>
                                    <p>100m away</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/restaurant.png" alt="" />
                                <div className="featureText">
                                    <span>Restaurant</span>
                                    <p>200m away</p>
                                </div>
                            </div>
                        </div>


                        <p className="title">Location</p>
                        <div className="mapContainer">
                            <BasicMap items={[singlePostData]} />
                        </div>
                        <div className="buttom">
                            <button>
                                <img src="/chat.png" alt="" />
                                Send a message
                            </button>
                            <button>
                                <img src="/save.png" alt="" />
                                Save the place
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePage;
