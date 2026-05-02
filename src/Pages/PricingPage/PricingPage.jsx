import { useLocation } from "react-router-dom";
import examData from "../../data/examData";
import "./PricingPage.css";

const PricingPage = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const selectedExam = query.get("exam");

  const exams = Object.keys(examData);

  const handlePayment = async (examKey) => {
    try {
      const packageId = "6312b781-f61c-405a-b0df-56c2f260f1cd";

      const res = await fetch("https://api.sugaam.in/api/payments/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          packageId,
          couponCode: "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Order failed");
      }

      if (!window.Razorpay) {
        throw new Error("Payment gateway is not loaded.");
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: data.businessName,
        description: "Course Payment",
        order_id: data.razorpayOrderId,
        handler: async function (response) {
          await fetch("https://api.sugaam.in/api/payments/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          alert("Payment successful 🎉");
        },
        theme: {
          color: "#f5c84c",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("PAYMENT ERROR:", err);
      alert(err.message);
    }
  };

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

              <button onClick={() => handlePayment(examKey)}>Subscribe</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPage;