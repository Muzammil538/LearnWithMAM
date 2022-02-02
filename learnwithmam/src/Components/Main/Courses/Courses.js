import React from 'react';
import './Courses.css';

export default function Courses() {
  return (
      <>
        <section className="courses">
            <div className="cr-container">
              <h2>Courses We Provide</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nihil!</p>
              <div className="cr-wrapper">
                <div className="cr-card">
                  <div className="cr-card-img">

                  </div>
                  <div className="cr-card-body">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda?</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </>
  );
}

