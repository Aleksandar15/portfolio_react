import { useEffect } from "react";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import "./LightMode.css";
import "./DarkMode.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // check if localStorage "darkMode" is false or true
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Based on localStorage
    // switch the `.dark` class from darkmode.css
    localStorage.setItem("darkMode", darkMode);
    const { body } = document;
    const { classList } = body;

    // setLoading(false);
    // if setLoading is here but add/remove runs on slower CPU's
    // then effect woouldn't be as expected
    // having them after add/remove calls is a better choice

    if (darkMode) {
      classList.add("dark");
      setLoading(false);
    } else {
      classList.remove("dark");
      setLoading(false);
    }
  }, [darkMode]);

  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <h1 style={{ color: "red", marginLeft: "33%" }}>Loading...</h1>
      ) : (
        <>
          {/* ScrollToTop component can be placed anywhere */}
          <ScrollToTop
            // topPosition={800}
            color="cyan"
            // size="2rem"
            smooth
            className="scrollToTopComponent"
            style={{ borderRadius: "15px 8px" }}
          />

          <section className="s1">
            <div className="s1_header">
              <div className="main-container">
                <div className="greeting-wrapper">
                  <h1>Hi, I'm Aleksandar Angelov</h1>
                </div>

                <div className="intro-wrapper">
                  <div className="nav-wrapper">
                    <a href="/">
                      <div className="dots-wrapper">
                        <div id="dot-1" className="browser-dot"></div>
                        <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                      </div>
                    </a>

                    <ul id="navigation">
                      <li>
                        <a
                          className="fa fa-github"
                          style={{ fontSize: "30px", color: "red" }}
                          href="https://github.com/Aleksandar15"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          style={{ fontSize: "30px", color: "green" }}
                          href="HTTPS://instagram.com/aleksandarr15"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          style={{
                            fontSize: "30px",
                            color: "rgba(0, 0, 255, 0.777)",
                          }}
                          href="https://www.linkedin.com/in/aleksandar15"
                          target="_blank"
                          rel="noreferrer"
                        ></a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                        {/* <a href="#contact" style={{marginLeft:"10px"}}>About</a> */}
                      </li>
                    </ul>
                  </div>

                  <div className="left-column">
                    <img
                      id="profile_pic"
                      src="images/Aleksandar.jpg"
                      alt="Aleksandar"
                    />
                    <h5 className="darkmode" onClick={toggleDarkMode}>
                      Dark Mode
                    </h5>

                    <div id="theme-options-wrapper">
                      <div>
                        {/* <input type="checkbox" className="checkbox" id="chk" onChange={toggleDarkMode} checked={isDarkMode} /> */}
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="switchDark"
                          onChange={toggleDarkMode}
                          checked={darkMode}
                        />
                        <label className="label" htmlFor="switchDark">
                          <i className="fa fa-sun-o"></i>
                          <i className="fa fa-moon-o"></i>
                          <div className="ball"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="right-column">
                    <div id="preview-shadow">
                      <div id="preview">
                        <div id="corner-tl" className="corner"></div>
                        <div id="corner-tr" className="corner"></div>
                        <h3>What I Do</h3>
                        <p>
                          I am a Full-Stack Web Developer. <br />I would be glad
                          to work with your team!
                        </p>
                        <div id="corner-br" className="corner"></div>
                        <div id="corner-bl" className="corner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="s2">
            <div className="main-container">
              <div className="about-wrapper">
                <div className="about-me">
                  <h4>More about me</h4>

                  <p>
                    I like to build websites that provide safe and reliable
                    experience for the users.
                  </p>

                  <p>
                    When projects are challenging it motivates me to keep
                    improving myself. I want to be part of a team with
                    like-minded people where we help each other grow.
                  </p>

                  <hr />

                  <h4>MY SKILLS</h4>

                  <p id="skill-name">
                    A Full-Stack Web Developer experienced with{" "}
                  </p>

                  <div id="skills">
                    <ul>
                      <li>JavaScript</li>
                      <li>React & Redux</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>PostgreSQL</li>
                      <li>MySQL</li>
                      <li>NPM</li>
                    </ul>

                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>WebSockets</li>
                      <li>Git & Github</li>
                      <li>Redis</li>
                      <li>MongoDB</li>
                      <li>Heroku</li>
                    </ul>
                  </div>

                  {/* <!-- <p id="skill-name">&nbsp &nbsp Medium skills</p> -->
          <!-- <div id="skill-name"> --> */}
                  <p id="medium-skill-name">Medium skills:</p>
                  <div id="medium-skills">
                    <ul>
                      <li>TypeScript</li>
                      <li>AWS</li>
                      <li>GraphQL</li>
                      <li>Docker</li>
                    </ul>
                    {/* <!-- </div> --> */}
                  </div>
                </div>

                <div className="social-links">
                  <img
                    id="social_img"
                    src="images/Logo hand-drawn-web-developers.jpg"
                  />
                  <h3>
                    <a target="_blank" href="Aleksandar15.pdf">
                      View Resume
                    </a>
                  </h3>
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section className="s1">
            <div className="main-container">
              <h3 style={{ textAlign: "center" }}>MY PROJECTS</h3>
              <div className="post-wrapper">
                <div>
                  <div className="post zoom">
                    <img
                      className="thumbnail"
                      src="images/Password Manager.jpg"
                    />
                    <div className="post-preview">
                      <h6 className="post-title">Password Manager</h6>
                      <p className="post-intro">
                        Frontend using ReactJS & Redux, NodeJS & Express for the
                        server and PostgreSQL database.
                      </p>
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

                <div>
                  <div className="post zoom">
                    <img
                      className="thumbnail"
                      src="images/KING-Store-Clothes.jpg"
                    />
                    <div className="post-preview">
                      <h6 className="post-title">KING-Store Clothes</h6>
                      <p className="post-intro">
                        Clothes site created using React and Redux, used Node
                        with Express for server & Firestore database.
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
                        Weather APP made with Node, Express, Handlebars.js
                        library, Tailwindcss for the frontend.
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
                    <img
                      className="thumbnail"
                      src="images/SmartBrain AleK.jpg"
                    />
                    <div className="post-preview">
                      <h6 className="post-title">Smart Brain App</h6>
                      <p className="post-intro">
                        Created using React on the frontend, Node.js & Express
                        for the backend, PostgreSQL database.
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
                        I used JavaScript with React+Redux in this project. You
                        can search for a robot by its name.
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
                        Created using JS, HTML5 and CSS3 with Bootstrap 4
                        framework. Landing page made ready.<br></br>
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
                        I created this project with Javascript. Generate a
                        strong password!
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
                <span style={{ color: "green" }}>All</span> projects re-deployed
                to alternatives to Heroku (<i>which removed free plans</i>).
                <br></br>
                I'm testing all of my apps to make sure everything works like
                before. 😊
              </h6>
            </div>
          </section>

          <section className="s2">
            <div className="main-container">
              <a href=""></a>
              <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

              <form
                id="contact-form"
                action="https://formsubmit.co/54f11a2809d7c331325a8bb414cb2f98"
                method="POST"
              >
                <a name="contact"></a>

                <label>Name</label>
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  placeholder="Name (optional)"
                />

                <label>Subject</label>
                <input
                  className="input-field"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                <label>Email</label>
                <input
                  className="input-field"
                  type="text"
                  name="email"
                  placeholder="your@email.com"
                  required
                />

                <label>Message</label>
                <textarea
                  className="input-field"
                  name="message"
                  placeholder="Write your message here"
                  required
                ></textarea>

                <input id="submit-btn" type="submit" value="Send" />

                <input type="hidden" name="_captcha" value="false" />
              </form>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
