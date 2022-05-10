import { Link } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
        <div className="home-link-container">
          <Link to="/">
            <FaHome size={23} color="#ff6a95" className="home-icon"/> Back to Home
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AboutPage;
