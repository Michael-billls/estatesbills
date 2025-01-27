import React from "react";
import "./contact.css";
import Footer from "../../component/Footer/Footer"
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
    return (
        <>
            <div className="c-wrapper">
                <div className="paddings innerWidth flexCenter c-container">
                    <div className="flexColStart c-left">
                        <span className="orangeText">Our Contact</span>
                        <span className="primaryText">Easy to Contact Us</span>
                        <span className="secondaryText">
                            We always ready to help by providing the best <br />services
                            believe a good blace to live can make <br />your life better{" "}
                        </span>

                        <div className="flexColStart contactModes">
                            <div className="flexStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Call</span>
                                            <span className="secondaryText">020 294 0512</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Chat</span>
                                            <span className="secondaryText">020 294 0512</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Chat Now</div>
                                </div>
                            </div>

                            <div className="flexStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Video Call</span>
                                            <span className="secondaryText">020 294 0512</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Video Call Now</div>
                                </div>
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Message</span>
                                            <span className="secondaryText">020 294 0512</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Message Now</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="c-right">
                        <div className="image-container">
                            <img src="./contact.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
