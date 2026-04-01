import { useLocation } from "react-router-dom";
import examData from "../../data/examData";
import "./PricingPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedExam = query.get("exam");
  const token = localStorage.getItem("token");
    if (!token) navigate("/auth");

  const exams = Object.keys(examData);

  const navigate = useNavigate();

useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    navigate("/auth");
  }
}, []);

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