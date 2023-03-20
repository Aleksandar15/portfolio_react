import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProjectsArray } from "../assets/MyProjectsArray";
import { openModal, selectOpenModal } from "../redux/slices/openModalSlice";
import { setProjectIdentifier } from "../redux/slices/projectInfoSlice";
import MyModal from "./MyModal";

const MyProjects = () => {
  // const [showChild, setShowChild] = useState(false);
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector(selectOpenModal);
  // console.log('MYPROJECTS isModalOpen:"', isModalOpen);

  // // For phones & desktop react-way
  // // to implement extra text
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

  // modal
  const setShowModalFN = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    //
    // setShowModal(!showModal);
    console.log(
      "event.target Button Click:",
      e.target,
      "&& e.target.dataset.target:",
      e.target.dataset.target
    );
    dispatch(openModal({ isModalOpen: !isModalOpen }));
    dispatch(
      setProjectIdentifier({ projectIdentifier: e.target.dataset.target })
    );
  };

  console.log("myProjectsArray", myProjectsArray);

  return (
    <>
      <MyModal />

      <section className="s1">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>MY PROJECTS</h3>
          <div className="post-wrapper">
            {myProjectsArray.map((project) => {
              return (
                <div key={project.id}>
                  {console.log("project:", project)}
                  <div className="post zoom">
                    <div className="image-wrapper">
                      <img
                        className="thumbnail"
                        // src="images/KING-Store-Clothes.jpg"
                        src={project.SRCimage}
                      />
                      <div className="text-overlay">
                        <p
                          className="readMoreImageHover"
                          onClick={setShowModalFN}
                          data-target={project.projectIdentifier}
                        >
                          Read more
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
                          {/* <span className="spanReadMoreAnchorHover">
                            (stays on same page)
                          </span> */}
                        </p>
                        <a
                          // href="https://king-store-clothes-alek.netlify.app"
                          href={project.viewWebsiteHREF}
                          target="_blank"
                          className="viewsite"
                        >
                          View Website
                        </a>
                        <a
                          className="viewsite"
                          // href="https://github.com/Aleksandar15/king-store-clothes"
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
