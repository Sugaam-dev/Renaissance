import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import examData from "../../data/examData";
import "./PricingPage.css";

const PricingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const selectedExam = query.get("exam");

  const exams = Object.keys(examData);

  return (
    <div className="pricing-container">
      <h1>Subscription</h1>

      <div className="pricing-cards">
        {exams.map((examKey) => {
          const exam = examData[examKey];
          const isActive = examKey === selectedExam;

          return (
            <div
              key={examKey}
              className={`pricing-card ${isActive ? "active" : ""}`}
            >
              <h3>{exam.heroTitle}</h3>
              <p>Full Course Access</p>
              <h2>₹999</h2>

              <button>Book now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPage;