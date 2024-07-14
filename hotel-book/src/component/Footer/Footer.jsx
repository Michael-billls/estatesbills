import React from 'react'
import './footer.scss';
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-box'>
                <h2 data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-once="true">
                    BillsEstates
                </h2>
                <p data-aos="fade-right"
                    data-aos-duration="1000" data-aos-once="true">Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Sit, brnostrum perspiciatis. <br />Facilis laborum adipisci qui, harum error aliquid <br />commodi fugiat minima libero asperiores optio <br />pariatur sit distinctio porro eligendi provident!</p>
                <div data-aos="fade-right"
                    data-aos-duration="1200" data-aos-once="true" className='social'>

                    <BsTwitterX />
                    <LuInstagram />
                    <IoLogoFacebook />
                    <IoLogoTiktok />
                </div>
            </div>
            <div className='footer-box2'>
                <h3 data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-once="true">
                    support
                </h3>
                <a data-aos="fade-right" data-aos-duration="900" data-aos-once="true" href="#">Product</a>
                <a data-aos="fade-right" data-aos-duration="900" data-aos-once="true" href="#">Help &  Policy</a>
                <a data-aos="fade-right" data-aos-duration="900" data-aos-once="true" href="#">Return Policy</a>
                <a data-aos="fade-right" data-aos-duration="900" data-aos-once="true" href="#">Terms of Use</a>
                <a data-aos="fade-right" data-aos-duration="900" data-aos-once="true" href="#">FAQ</a>

            </div>
            <div className='footer-box3'>
                <h3 data-aos="fade-right" data-aos-duration="930" data-aos-once="true">
                    Our Branches
                </h3 >
                <a data-aos="fade-right" data-aos-duration="960" data-aos-once="true" href="#">Ghana</a>
                <a data-aos="fade-right" data-aos-duration="960" data-aos-once="true" href="#">England</a>
                <a data-aos="fade-right" data-aos-duration="960" data-aos-once="true" href="#">Germany</a>
                <a data-aos="fade-right" data-aos-duration="960" data-aos-once="true" href="#">Canada</a>
                <a data-aos="fade-right" data-aos-duration="960" data-aos-once="true" href="#">United states</a>
            </div>
            <div className='footer-box'>
                <h3 data-aos="fade-right" data-aos-duration="970" data-aos-once="true">
                    Payment Method
                </h3>
                <div data-aos="fade-right" data-aos-duration="980" data-aos-once="true" className='payment'>
                    <img src="/visa.jpg" alt="" />
                    <img src="/PayPal.jpg" alt="" />
                    <img src="/Mastercard-01.jpg" alt="" />
                    <img src="/American-Express-02.jpg" alt="" />
                </div>
            </div>
            <div className='copyright'>
                <p>&#169; MichaelBills All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Footer
