import React from 'react';
import './Courses.css';

export default function Courses() {
  const cr_Head = {
    title: "Courses We Provide",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nihil!"
  }
  const cr_Card = {
    Web : {
      cr_react : {
        title : "React Dev",
        img : "fas fa-laptop-code",
        text : "This is a React Development course"
      }
    },
    Eth_Hack : {
      title: "Penitration Testing",
      img: "fas fa-laptop-code",
      text: "This is an Ethical Hacking course"
    },

  }
  return (
      <>
        <section className="courses">
            <div className="cr-container">
              <h2>{cr_Head.title}</h2>
              <p>{cr_Head.text}</p>
              <div className="cr-wrapper">
                {/* Web */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                {/* Penitration Testing */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                {/* Card-3 */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                
              </div>
              <div className="cr-wrapper">
                {/* Card-4 */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                {/* Card-5 */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                {/* Card-6 */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.cr_react.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.cr_react.title}</h2>
                    <p>{cr_Card.Web.cr_react.text}</p>
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

