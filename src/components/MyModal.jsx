import { useEffect, useState } from "react";

// const MyOffcanvasBootstrap = ({ show, children }) => {
const MyOffcanvasBootstrap = ({
  receivedShow,
  receivedShowSetter,
  children,
}) => {
  const [show, setShow] = useState(false);
  // const [showz, setShow] = useState(show);
  // console.log("showz", showz);
  console.log("show By MyOffCanvasBootstrap", show);

  const toggleOffcanvas = () => {
    setShow(!show);
    console.log("triggered toggleOffCanvas()");
  };
  // const toggleOffcanvas = (e) => {
  //   setShow(!show);
  //   e.stopPropagation(); //nothing
  // };
  // const toggleOffcanvas = () => {
  //   setShow(!show);
  //   document.body.classList.toggle("offcanvas-open");
  // };

  useEffect(() => {
    // Make page unscrollable
    // when the offcanvas is opened
    // set the 'overflow' property of the 'body' element to 'hidden'
    // if (show) {
    if (receivedShow) {
      console.log("triggered if(receiveShow)");
      // remove scrollbar when modal is open
      document.body.style.overflow = "hidden";

      // below would work but makes even the modal unclickable
      // so my new solution is div wrapper :)
      // document.body.style.pointerEvents = "none";
    } else {
      console.log("triggered else(receiveShow)");
      document.body.style.overflow = "auto";
    }
    console.log("BEFORE cleanUP");

    // return a cleanup function to set the overflow style
    // back to 'auto' when the component unmounts.
    return () => {
      console.log("cleanUP");
      document.body.style.overflow = "auto";
      // also
      document.body.style.pointerEvents = "auto";
      // ^ this works, there was a mistake that bootstrap v4
      // had a mistake, and screen was unscrollable
      // once their modal's/offcanvas's closed.
    };
    // }, [show]);
  }, [receivedShow]);
  // }, []);

  // console.log("show:", show);

  // children to be rendered:
  // const childComponents = {
  //   1:
  // }
  const projectInfos = {
    project_1: {
      // title: "PASSWORD MANAGER",
      title: "Password Manager",
      description:
        // "Span inside P tag description for Password Manager LONg long long long long long long long",
        // 2
        // "Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long",
        // 3
        // "Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long",
        // 4
        "Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long",
    },
    project_3: {
      title: "Task Manager APP user auth",
      description: "Span inside P tag description for Task Manager APP",
    },
  };

  return (
    <>
      {/* <button onClick={toggleOffcanvas}>Open Offcanvas</button> */}
      {/* <button onClick={receivedShowSetter}>Open Offcanvas</button> */}
      {/* {show && ( */}
      {receivedShow && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            alignItems: "center",
            justifyContent: "center",
            display: "flex", //original
          }}
          // onClick={toggleOffcanvas}
          onClick={receivedShowSetter}
        >
          <div
            style={{
              // backgroundColor: "white", //this should be inside DarkMode & lightMode.css
              padding: "20px",
              width: "80%",
              // maxWidth: "600px",
              // borderRadius: "5px",
              zIndex: 1000,
              overflow: "hidden", //nothing
              maxWidth: "700px",
              // minHeight: "700px", //almost full page
              minHeight: "300px",
              textAlign: "justify",
            }}
            // By calling stopPropagtion() helps with
            // clicking on buttons inside {children},
            // keeps the offcanvas opened
            onClick={(e) => e.stopPropagation()}
            // className="offcanvas-open"
            className="mymodal-wrapper"
          >
            {/* MODAL BODY: */}
            {/* TITLE: */}
            <h3 className="h3ModalProjectTitle">
              Title:{" "}
              <span className="spanModalProjectTitle">
                {projectInfos["project_1"]?.title}
              </span>
            </h3>
            {/* Description: */}
            <p className="pTagModalDescription">
              Description:{" "}
              <span className="spanModalProjectDescription">
                {projectInfos["project_1"]?.description}
              </span>
            </p>
            <span className="spanModalClickOutside">
              (click outside to close)
            </span>
            <button
              className="close-button"
              // onClick={toggleOffcanvas}
              onClick={receivedShowSetter}
              style={{ color: "red", fontSize: "77px", marginRight: "20px" }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOffcanvasBootstrap;
