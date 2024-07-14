
import Navbar from '../../component/navbar/Navbar';
import SearchBar from '../../component/navbar/searchBar/SearchBar';
import './homePage.scss'

import Contact from '../../component/contact/Contact';
import Footer from '../../component/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="homePage">
                <div className="textContainer">
                    <div className='wrapper'>
                        <h1 data-aos="slide-right" data-aos-delay="100" data-aos-duration="1500" data-aos-once="true" className='title'>Let's find the best <br /> place for your <br />vacation</h1>
                        <p data-aos="zoom-in" data-aos-delay="800" data-aos-once="true">
                            Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Dignissimos repellat tempora quasi aspernatur harum minus eaque <br /> eos molestias atque sunt quis magni porro illum recusandae, <br />vero laboriosam ducimus perspiciatis voluptates?
                        </p>
                        <SearchBar />
                        <div className="boxes">
                            <div className="box">
                                <h1>16+</h1>
                                <h2>Years of Experience</h2>
                            </div>
                            <div className="box">
                                <h1>200</h1>
                                <h2>Awards Gained</h2>
                            </div>
                            <div className="box">
                                <h1>2000+</h1>
                                <h2>Properties Ready</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </>

    );
};

export default HomePage;
