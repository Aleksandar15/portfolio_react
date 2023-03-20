import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ScrollToTop from "react-scroll-to-top";
import { openModal, selectOpenModal } from "../redux/slices/openModalSlice";
import { selectProjectIdentifier } from "../redux/slices/projectInfoSlice";
import LoadingComponent from "./LoadingComponent";

const MyModal = () => {
  const { isModalOpen } = useSelector(selectOpenModal);
  const dispatch = useDispatch();
  const { projectIdentifier } = useSelector(selectProjectIdentifier);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";

      // below would work but makes even the modal unclickable
      // so my new solution is div wrapper :)
      // document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "auto";
    }

    // return a cleanup function to set the overflow style
    // back to 'auto' when the component unmounts.
    return () => {
      document.body.style.overflow = "auto";
      // also
      document.body.style.pointerEvents = "auto";
      // ^ there was a mistake that even bootstrap v4
      // had a bug: screen was unscrollable
      // once their modal's closed.
    };
  }, [isModalOpen]);

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
      // 5
      // "Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long Span inside P tag description for Password Manager LONg long long long long long long long",
      // // // its not yet scrollable if its TOO long top & bottom arent seen
    },
    project_3: {
      title: "Task Manager APP user auth",
      description: "Span inside P tag description for Task Manager APP",
    },
  };

  const setShowModalFN = () => {
    dispatch(openModal({ isModalOpen: !isModalOpen }));
  };

  return (
    <>
      {isModalOpen && (
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
            display: "flex",
          }}
          onClick={setShowModalFN}
        >
          <div
            style={{
              padding: "20px",
              width: "80%",
              // maxWidth: "600px",
              zIndex: 1000,
              overflow: "hidden",
              // maxWidth: "700px",
              maxWidth: "750px",
              minHeight: "300px",
              textAlign: "justify",
              // for when/if text gets too long:
              maxHeight: "500px",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
            className="mymodal-wrapper"
          >
            {/* MODAL BODY: */}
            {projectIdentifier === "loading" ? (
              <LoadingComponent />
            ) : (
              <>
                {/* Scroll component isn't scoped to this div
                but rather to the whole body */}
                {/* <ScrollToTop /> */}

                {/* TITLE: */}
                <h3 className="h3ModalProjectTitle">
                  Title:{" "}
                  <span className="spanModalProjectTitle">
                    {projectInfos[projectIdentifier]?.title}
                  </span>
                </h3>
                {/* Description: */}
                <p className="pTagModalDescription">
                  Description:{" "}
                  {projectInfos[projectIdentifier] === undefined ||
                  projectInfos[projectIdentifier] === "" ? (
                    <span className="spanModalProjectDescription">
                      {/* Not yet provided. */}
                      Description not yet provided.
                    </span>
                  ) : (
                    <span className="spanModalProjectDescription">
                      {projectInfos[projectIdentifier]?.description}
                    </span>
                  )}
                </p>
                {/* Technologies: */}
                <p className="pTagModalTechnologies">
                  Technologies:{" "}
                  {projectInfos[projectIdentifier] === undefined ||
                  projectInfos[projectIdentifier] === "" ? (
                    <span className="spanModalProjectTechnologies">
                      Technologies not yet provided.
                    </span>
                  ) : (
                    <span className="spanModalProjectTechnologies">
                      {projectInfos[projectIdentifier]?.description}
                    </span>
                  )}
                </p>

                <span className="spanModalClickOutside">
                  (click outside to close)
                </span>
                <button
                  className="close-button"
                  onClick={setShowModalFN}
                  style={{
                    color: "red",
                    fontSize: "77px",
                    marginRight: "20px",
                  }}
                >
                  &times;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyModal;
