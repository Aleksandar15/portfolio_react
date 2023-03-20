import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProjectsArray } from "../assets/MyProjectsArray";
import { openModal, selectOpenModal } from "../redux/slices/openModalSlice";
import { setProjectIdentifier } from "../redux/slices/projectInfoSlice";
import MyModalProjects from "./MyModalProjects";

const MyProjects = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector(selectOpenModal);

  // const [showChild, setShowChild] = useState(false);

  // // For phones & desktop react-way
  // // to render extra elements on 'hover'
  // // except it'd require a unique ID
  // // otherwise hovering 1 element shows child components
  // // of all the 'project-boxes'
  // const handleTouchStart = () => {
  //   setShowChild(!showChild);
  // };
  // const handleMouseEnter = () => {
  //   setShowChild(true);
  // };
  // const handleMouseLeave = () => {
  //   setShowChild(false);
  // };

  // Modal
  const setShowModalFN = (e) => {
    dispatch(openModal({ isModalOpen: !isModalOpen }));
    dispatch(
      setProjectIdentifier({
        projectIdentifier: e.target.dataset.target,
      })
    );
  };

  return (
    <>
      <MyModalProjects />
      <section className="s1">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>MY PROJECTS</h3>
          <div className="post-wrapper">
            {myProjectsArray.map((project) => {
              return (
                <div key={project.id}>
                  <div className="post zoom">
                    <div className="image-wrapper">
                      <img className="thumbnail" src={project.SRCimage} />
                      <div className="text-overlay">
                        <p
                          className="readMoreImageHover"
                          onClick={setShowModalFN}
                          data-target={project.projectIdentifier}
                        >
                          READ MORE
                        </p>
                        {/* Optional: */}
                        <span className="spanReadMoreImageHover">
                          (stays on same tab)
                        </span>
                      </div>
                    </div>
                    <div className="projectOpenModal">
                      <div className="post-preview">
                        <h6 className="post-title">{project.projectTitle}</h6>
                        <p className="post-intro">
                          {project.projectIntro}
                          <a
                            style={{ fontSize: "13px" }}
                            className="readMore"
                            // onTouchStart={handleTouchStart}
                            // onMouseEnter={handleMouseEnter}
                            // onMouseLeave={handleMouseLeave}
                            onClick={setShowModalFN}
                            data-target={project.projectIdentifier}
                          >
                            Read More
                            {/* (more...) */}
                            {/* (...) */}
                            <span className="spanReadMoreAnchorHover">
                              (stays on same page)
                            </span>
                          </a>
                          {/* {showChild && (
                          <span className="spanReadMoreAnchorHover">
                            (stays on same page)
                          </span>
                          )} */}
                        </p>
                        <a
                          href={project.viewWebsiteHREF}
                          target="_blank"
                          className="viewsite"
                        >
                          View Website
                        </a>
                        <a
                          className="viewsite"
                          href={project.viewSourceCodeHREF}
                          target="_blank"
                        >
                          View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
