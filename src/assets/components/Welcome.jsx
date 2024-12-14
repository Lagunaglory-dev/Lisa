import Lisa from "../img/lisa.jpeg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h2 style={{ marginTop: "30px", fontFamily: "Arial", fontSize: "18px" }}>
        Bienvenue sur mon site
      </h2>
      <p style={{ fontFamily: "Arial" }}>
        Clique sur ma photo pour aller voir ma galerie photo
      </p>
      <Link to="/gallery">
        <img className="tof " alt="Photo de profil Lisa" src={Lisa} />
      </Link>
    </div>
  );
};

export default Welcome;
