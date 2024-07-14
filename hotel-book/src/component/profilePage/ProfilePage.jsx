import React from 'react'
import List from '../list/List'
import './profilePage.scss';
import Navbar from '../navbar/Navbar';

const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <div className='profilePage'>
                <div className="details">
                    <div className="wrapper">
                        <div className="title">
                            <h1>User information</h1>
                            <button>Update Profile</button>
                        </div>
                        <div className="info">
                            <span>Avatar: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s" alt="" /></span>
                            <span>Username: <b>Michael Bills</b></span>
                            <span>Email: <b>Michael@gmail.com</b></span>

                        </div>
                        <div className="title">
                            <h1>My List</h1>
                            <button>Create New Post</button>
                        </div>
                        <List />
                        <div className="title">
                            <h1>Saved List</h1>
                        </div>
                        <List />
                    </div>
                </div>
                <div className="chatContainer">
                    <div className="wrapper">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage