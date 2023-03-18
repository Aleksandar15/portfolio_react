import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <div>
      <h1 style={{ color: "red", marginLeft: "20px" }}>404 Page Not Found</h1>
      <p style={{ marginLeft: "50px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          fontSize: "25px",
          margin: "10px 35px 0px 250px",
          color: "red",
          backgroundColor: "whitesmoke",
          // border: "none",
          borderRadius: "20px",
          border: "double",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
