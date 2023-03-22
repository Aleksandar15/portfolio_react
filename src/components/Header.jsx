import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, setDarkMode } from "../redux/slices/darkModeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(selectDarkMode);

  const toggleDarkMode = () => {
    dispatch(setDarkMode({ darkModeState: { darkMode: !darkMode } }));
  };

  return (
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
                    className="fa fa-github anchorTagOverrideBootstrap"
                    style={{ fontSize: "30px", color: "red" }}
                    href="https://github.com/Aleksandar15"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-instagram anchorTagOverrideBootstrap"
                    style={{ fontSize: "30px", color: "green" }}
                    href="HTTPS://instagram.com/aleksandarr15"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-linkedin anchorTagOverrideBootstrap"
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
                  <a href="#contact" className="anchorTagOverrideBootstrap">
                    Contact
                  </a>
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
                    I am a Full-Stack Web Developer. <br />I would be glad to
                    work with your team!
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
  );
};
export default Header;
