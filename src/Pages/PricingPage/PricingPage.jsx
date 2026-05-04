// import { useLocation } from "react-router-dom";
// import examData from "../../data/examData";
// import "./PricingPage.css";

// const PricingPage = () => {
//   const location = useLocation();

//   const query = new URLSearchParams(location.search);
//   const selectedExam = query.get("exam");

//   const exams = Object.keys(examData);

//   const handlePayment = async (examKey) => {
//     try {
//       const packageId = "6312b781-f61c-405a-b0df-56c2f260f1cd";

//       const res = await fetch("https://api.sugaam.in/api/payments/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           packageId,
//           couponCode: "",
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Order failed");
//       }

//       if (!window.Razorpay) {
//         throw new Error("Payment gateway is not loaded.");
//       }

//       const options = {
//         key: data.keyId,
//         amount: data.amount,
//         currency: data.currency,
//         name: data.businessName,
//         description: "Course Payment",
//         order_id: data.razorpayOrderId,
//         handler: async function (response) {
//           await fetch("https://api.sugaam.in/api/payments/verify-payment", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             credentials: "include",
//             body: JSON.stringify({
//               razorpayOrderId: response.razorpay_order_id,
//               razorpayPaymentId: response.razorpay_payment_id,
//               razorpaySignature: response.razorpay_signature,
//             }),
//           });

//           alert("Payment successful 🎉");
//         },
//         theme: {
//           color: "#f5c84c",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error("PAYMENT ERROR:", err);
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="pricing-container">
//       <h1>Subscription</h1>

//       <div className="pricing-cards">
//         {exams.map((examKey) => {
//           const exam = examData[examKey];
//           const isActive = examKey === selectedExam;

//           return (
//             <div
//               key={examKey}
//               className={`pricing-card ${isActive ? "active" : ""}`}
//             >
//               <h3>{exam.heroTitle}</h3>
//               <p>Full Course Access</p>
//               <h2>₹999</h2>

//               <button onClick={() => handlePayment(examKey)}>Subscribe</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PricingPage;

import { useEffect, useState } from "react";
import "./PricingPage.css";

const PricingPage = () => {
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Load Razorpay
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // 🔹 Fetch BOTH packages + categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pkgRes, catRes] = await Promise.all([
          fetch("https://api.sugaam.in/api/catalog/packages", {
            credentials: "include",
          }),
          fetch("https://api.sugaam.in/api/catalog/categories", {
            credentials: "include",
          }),
        ]);

        const pkgData = await pkgRes.json();
        const catData = await catRes.json();

        setPackages(pkgData);
        setCategories(catData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 Get subscription status
  const isSubscribed = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.subscribed;
  };

  // 🔹 Payment handler
  const handlePayment = async (packageId) => {
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) return alert("Razorpay failed to load");

      const res = await fetch(
        "https://api.sugaam.in/api/payments/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            packageId,
            couponCode: "",
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Order failed");
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: data.businessName,
        order_id: data.razorpayOrderId,

        handler: async function (response) {
          await fetch(
            "https://api.sugaam.in/api/payments/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            }
          );

          alert("Payment successful 🎉");

          // 🔥 refresh UI
          window.location.reload();
        },

        theme: { color: "#f5c84c" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("PAYMENT ERROR:", err);
      alert(err.message);
    }
  };

  // 🔹 UI
  if (loading) return <p>Loading subscriptions...</p>;

  return (
    <div className="pricing-container">
      <h1>Subscription</h1>

      <div className="pricing-cards">
        {packages.map((pkg) => {
          const category = pkg.accessibleCategories?.[0];
          const subscribed = isSubscribed(category?.id);

          return (
            <div key={pkg.uuid} className="pricing-card">
              <h3>{category?.displayName || pkg.name}</h3>
              <p>{category?.description}</p>

              <h2>₹{pkg.priceAmount}</h2>

              {!subscribed ? (
                <button onClick={() => handlePayment(pkg.uuid)}>
                  Subscribe
                </button>
              ) : (
                <button disabled style={{ background: "#ccc" }}>
                  Already Subscribed
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPage;