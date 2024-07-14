import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const user = false;
    return (
        <nav>
            <div className="left">
                <a
                    href="/"
                    className="logo
                "
                >
                    <img
                        data-aos="fade-left"
                        data-aos-once="true"
                        src="/logo3.png"
                        alt=""
                    />
                    <span
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        data-aos-once="true"
                    >
                        BillsEstate
                    </span>
                </a>

                <a
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                    href="/"
                >
                    Home
                </a>
                <a
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                    href="/list"
                >
                    Apartments
                </a>
                <a
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                    href="#"
                >
                    About
                </a>
                <a
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                    href="#"
                >
                    Contact
                </a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s"
                            alt=""
                        />
                        <span>Michael Bills</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="#">Sign in</a>
                        <a href="#" className="register">
                            Sign Up
                        </a>{" "}
                    </>
                )}
                <div className="menuicon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/list">Apartments</a>
                    <a href="/:id">Locations</a>
                    <a href="/contact">Contact</a>
                    <a href="/profile">Sign in</a>
                    <a href="#">Sign up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
