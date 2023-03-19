import { useRef } from "react";
import { useState } from "react";
import MyModal from "./MyModal";

const MyProjects = () => {
  const [showChild, setShowChild] = useState(false);

  const handleTouchStart = () => {
    setShowChild(!showChild);
  };
  const handleMouseEnter = () => {
    setShowChild(true);
  };

  const handleMouseLeave = () => {
    setShowChild(false);
  };

  // modal
  const [showModal, setShowModal] = useState(false);
  // setShowModal(); //infinitive loops
  const openOffcanvasRef = useRef(null);
  //
  // const setShowCanvasFN = (e) => {
  const setShowModalFN = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    //
    setShowModal(!showModal);
    console.log(
      "event.target Button Click:",
      e.target,
      "&& e.target.dataset.target:",
      e.target.dataset.target
      // "&& e.target.dataset:",
      // e.target.dataset
      // //results: a DOMStringMap: {target: 'project_1'}
    );
    // redux:
    dispa;
  };

  return (
    <>
      <MyModal receivedShow={showModal} receivedShowSetter={setShowModalFN}>
        <button onClick={() => alert("hlelo world")}>Hello22</button>
      </MyModal>
      <section className="s1">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>MY PROJECTS</h3>
          <div className="post-wrapper">
            <div>
              <div className="post zoom">
                <div
                  // onClick={() => alert("Hey")}
                  className="projectOpenCanvas"
                >
                  <div className="image-wrapper">
                    <img
                      className="thumbnail"
                      src="images/Password Manager.jpg"
                    />
                    <div className="text-overlay">
                      <p className="readMoreImageHover">
                        Read more
                        {/* Optional: */}
                        <span className="spanReadMoreImageHover">
                          (stays on same tab)
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className="post-preview"
                    onClick={() => console.log("div post-preview clicked HoHO")}
                  >
                    <h6
                      className="post-title"
                      onClick={() => console.log("div post-title clicked HoHO")}
                    >
                      Password Manager
                    </h6>
                    <p
                      className="post-intro"
                      onClick={() => console.log("div post-intro clicked HoHO")}
                    >
                      Frontend using ReactJS & Redux, NodeJS & Express for the
                      server and PostgreSQL database.
                      <a
                        style={{ fontSize: "13px" }}
                        className="readMore"
                        onTouchStart={handleTouchStart}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Read More
                        {/* (more...) */}
                        {/* (...) */}
                      </a>
                      {showChild && (
                        <span className="spanReadMoreAnchorHover">
                          (stays on same page)
                        </span>
                      )}
                    </p>
                    {/* <MyModal /> */}
                    {/* <MyModal>
                      <>
                        <h1 style={{ color: "red" }}>Aleksandar TEST</h1>
                        <button onClick={() => alert("button clicked")}>
                          Button ALEK
                        </button>
                      </>
                    </MyModal> */}
                    <button
                      style={{ color: "blue" }}
                      onClick={setShowModalFN}
                      // ref={openOffcanvasRef}
                      data-target="project_1"
                    >
                      OPEN
                    </button>
                    <a
                      style={{ textAlign: "center" }}
                      href="https://alek-password-manager.netlify.app"
                      target="_blank"
                      className="viewsite"
                    >
                      View Website
                    </a>
                    <a
                      className="viewsite"
                      href="https://github.com/Aleksandar15/Password-Manager-frontend"
                      target="_blank"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img
                  className="thumbnail"
                  src="images/KING-Store-Clothes.jpg"
                />
                <div className="post-preview">
                  <h6 className="post-title">KING-Store Clothes</h6>
                  <p className="post-intro">
                    Clothes site created using React and Redux, used Node with
                    Express for server & Firestore database.
                    <br />
                  </p>
                  <a
                    href="https://king-store-clothes-alek.netlify.app"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/king-store-clothes"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                  <MyModal>
                    <h1 style={{ color: "red" }}>2ndAleksandar TEST</h1>
                  </MyModal>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/TaskApp.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">
                    Task-Manager APP with user auth.
                  </h6>
                  <p className="post-intro">
                    Task-Manager made using EJS, Node, Express, MongoDB
                    database, JWT for authentication, SendGrid API.
                    <br />
                  </p>
                  <a
                    href="https://task-manager-app-alek.onrender.com"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/Task-Manager-APP"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                  {/* <MyModal>
                    <h1 style={{ color: "red" }}>3rdAleksandar TEST</h1>
                  </MyModal> */}
                  <button
                    style={{ color: "blue" }}
                    onClick={setShowModalFN}
                    // ref={openOffcanvasRef}
                    data-target="project_3"
                  >
                    OPEN
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/chatapp.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">Chat APP</h6>
                  <p className="post-intro">
                    Chat APP made using Node.js, Express.js and Socket.io
                    library for WebSockets protocol.
                    <br />
                  </p>
                  <a
                    href="https://chat-app-alek.onrender.com"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/Chat-APP"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/weatherApp.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">Weather APP</h6>
                  <p className="post-intro">
                    Weather APP made with Node, Express, Handlebars.js library,
                    Tailwindcss for the frontend.
                    <br />
                  </p>
                  <a
                    href="https://weather-app-alek.onrender.com"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/Weather-App"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/SmartBrain AleK.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">Smart Brain App</h6>
                  <p className="post-intro">
                    Created using React on the frontend, Node.js & Express for
                    the backend, PostgreSQL database.
                  </p>
                  <a
                    href="https://smart-brain-alek.netlify.app"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/smart-brain-alek"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/robo-app.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">Robo-App</h6>
                  <p className="post-intro">
                    I used JavaScript with React+Redux in this project. You can
                    search for a robot by its name.
                    <br />
                  </p>
                  <a
                    href="https://aleksandar15.github.io/robo-app"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/robo-app"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img className="thumbnail" src="images/landingPage.jpg" />
                <div className="post-preview">
                  <h6 className="post-title">Landing Page</h6>
                  <p className="post-intro">
                    Created using JS, HTML5 and CSS3 with Bootstrap 4 framework.
                    Landing page made ready.<br></br>
                  </p>
                  <a
                    style={{ textAlign: "center" }}
                    href="https://aleksandar15.github.io"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/aleksandar15.github.io"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="post zoom">
                <img
                  className="thumbnail"
                  src="images/Password Generator.jpg"
                ></img>
                <div className="post-preview">
                  <h6 className="post-title">Password Generator</h6>
                  <p className="post-intro">
                    I created this project with Javascript. Generate a strong
                    password!
                  </p>
                  <a
                    style={{ textAlign: "center" }}
                    href="https://aleksandar15.github.io/PasswordGenerator"
                    target="_blank"
                    className="viewsite"
                  >
                    View Website
                  </a>
                  <a
                    className="viewsite"
                    href="https://github.com/Aleksandar15/PasswordGenerator"
                    target="_blank"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h5
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "0px",
              marginTop: "5px",
            }}
          >
            Heroku notice:
          </h5>{" "}
          <h6 style={{ textAlign: "center", marginTop: "0px" }}>
            <span style={{ color: "green" }}>All</span> projects re-deployed to
            alternatives to Heroku (<i>which removed free plans</i>).
            <br></br>
            I'm testing all of my apps to make sure everything works like
            before. 😊
          </h6>
        </div>
      </section>
    </>
  );
};
export default MyProjects;
