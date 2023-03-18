import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import Loading from "../components/LoadingComponent";
import Header from "../components/Header";
import AboutMeSection from "../components/AboutMeSection";
import MyProjects from "../components/MyProjects";
import ContactMe from "../components/ContactMe";

const Home = () => {
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
        <Loading />
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
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <AboutMeSection />
          <MyProjects />
          <ContactMe />
        </>
      )}
    </div>
  );
};
export default Home;
