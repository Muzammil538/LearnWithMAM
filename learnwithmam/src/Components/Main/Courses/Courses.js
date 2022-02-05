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
        img : "fab fa-react",
        text : "This is a React Development course"
      },
      Bootstrap:{
        title : "Bootstrap",
        img : "fab fa-bootstrap",
        text : "This is a Bootstrap course"
      },
      DataBase : {
        title : "Database ",
        img : "fas fa-server",
        text : "This is a Database Manaagement course"
      }
    },
    Eth_Hack : {
      PenTest: {
        title: "Penitration Testing",
        img: "fas fa-syringe",
        text: "This is an Ethical Hacking course"
      }
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
                    <i className={cr_Card.Eth_Hack.PenTest.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Eth_Hack.PenTest.title}</h2>
                    <p>{cr_Card.Eth_Hack.PenTest.text}</p>
                  </div>
                  <div className="cr-card-btn">
                    <button>
                      <a href="#">View More</a>
                    </button>
                  </div>
                </div>
                {/* Bootstrap */}
                <div className="cr-card">
                  <div className="cr-card-img">
                    <i className={cr_Card.Web.Bootstrap.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.Bootstrap.title}</h2>
                    <p>{cr_Card.Web.Bootstrap.text}</p>
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
                    <i className={cr_Card.Web.DataBase.img}></i>
                  </div>
                  <div className="cr-card-body">
                    <h2>{cr_Card.Web.DataBase.title}</h2>
                    <p>{cr_Card.Web.DataBase.text}</p>
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

