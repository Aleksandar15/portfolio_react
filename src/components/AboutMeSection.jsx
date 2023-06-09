const AboutMeSection = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>

            <p>
              I like to build websites that provide safe and reliable experience
              for the users.
            </p>

            <p>
              When projects are challenging it motivates me to keep improving
              myself. I want to be part of a team with like-minded people where
              we help each other grow.
            </p>

            <hr />

            <h4>MY SKILLS</h4>

            <p id="skill-name">A Full-Stack Web Developer experienced with </p>

            <div id="skills">
              <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>

              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>WebSockets</li>
                <li>Git & Github</li>
                <li>MongoDB</li>
                <li>NPM</li>
                <li>Heroku</li>
              </ul>
            </div>

            {/* <!-- <p id="skill-name">&nbsp &nbsp Medium skills</p> -->
<!-- <div id="skill-name"> --> */}
            <p id="medium-skill-name">Medium skills:</p>
            <div id="medium-skills">
              <ul>
                <li>TypeScript</li>
                <li>Redis</li>
                <li>Docker</li>
              </ul>
              {/* <!-- </div> --> */}
            </div>
          </div>

          <div className="social-links">
            {/* <h3>
              <a
                target="_blank"
                href="Aleksandar15.pdf"
                className="anchorTagOverrideBootstrap viewResume"
              >
                Read more about me
              </a>
            </h3> */}
            <img
              id="social_img"
              src="images/Logo hand-drawn-web-developers.jpg"
            />
            <h3>
              <a target="_blank" href="Aleksandar15.pdf" className="viewResume">
                View Resume
                <span className="alertOpensInNewTab">(opens in new tab)</span>
              </a>
            </h3>
            {/* <br /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
