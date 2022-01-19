import React from 'react';
import './Footer.css';

export default function Footer() {
    
    return (
        <>
            <div className="ft-container">
                <div className="wrapper">
                    <div className="ft-links">
                        <h3>Page Links</h3>
                        <div className="uns1">
                            <a href="#"><i class="fas fa-book"></i> Courses <span className='blinker'>New</span></a>
                            <a href="#"><i class="fas fa-users"></i> Team</a>
                            <a href="#"><i class="fas fa-hand-holding-usd"></i> Funds</a>
                            <a href="#"><i class="fas fa-user-plus"></i> Join us</a>
                        </div>
                    </div>
                    <div className="ft-services">
                        <h3>Services</h3>
                        <div className="uns3">
                            <a href="#"><i class="fas fa-book"></i> Courses</a>
                            <a href="#"><i class="fas fa-archive"></i> Tech Products</a>
                            <a href="#"><i class="fas fa-hands-helping"></i> Hire Developer</a>
                            <a href="#"><i class="fas fa-money-check-alt"></i> StartUp Fund</a>
                        </div>
                    </div>
                    <div className="ft-social">
                        <h3>Social Media Handles</h3>
                        <div className="uns2">
                            <a href="#">Facebook <i class="fab fa-facebook"></i></a>
                            <a href="#">Instagram <i class="fab fa-instagram"></i></a>
                            <a href="#">Twitter <i class="fab fa-twitter"></i></a>
                            <a href="#">YouTube <i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="ft-about">
                        <h3>About Us</h3>
                        <div className="uns4">
                            <a href="#">T & C <i class="far fa-question-circle"></i></a>
                            <a href="#">Our Team <i class="fas fa-users-cog"></i></a>
                            <a href="#">Our Courses <i class="fas fa-book-open"></i></a>
                            <a href="#">Our Product <i class="fas fa-boxes"></i></a>
                        </div>
                    </div>
                </div>
                <form method='POST'>
                    <h2>Contact Form</h2>
                    <div className="form-flex">
                        <div className="sml-inp">
                            <div className="input-box">
                                <label htmlFor="ur_name">Name</label>
                                <input type="text" id='ur_name' name='ur_name' placeholder='Enter Name'/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="ur_email">Email</label>
                                <input type="email" name="ur_email" id="ur_email" placeholder='Enter Email'/>
                            </div>
                        </div>
                        <div className="text-box">
                            <label htmlFor="ur_msg">Comment</label>
                            <textarea name="ur_msg" id="ur_msg" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <button type='submit' id='form_btn' className='btn'>
                        Submit
                    </button>
                </form>
            </div>
            <div className="ft-label">
                <p>All Copyrights reserved at Learnwithmam</p>
            </div>
        </>
    )
}

