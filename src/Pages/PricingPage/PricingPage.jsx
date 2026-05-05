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
import { useNavigate } from "react-router-dom";
import "./PricingPage.css";

const PricingPage = () => {
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [couponState, setCouponState] = useState({});
  const navigate = useNavigate();

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

  const getCouponInfo = (packageId) => {
    return couponState[packageId] || {
      inputCode: "",
      couponCode: "",
      discountAmount: 0,
      finalPrice: null,
      isCouponApplied: false,
      message: "",
      isError: false,
      isValidating: false,
    };
  };

  const handleCouponChange = (packageId, value) => {
    const info = getCouponInfo(packageId);
    setCouponState((prev) => ({
      ...prev,
      [packageId]: {
        ...info,
        inputCode: value,
        message: "",
        isError: false,
      },
    }));
  };

  const handleApplyCoupon = async (packageId, price) => {
    const info = getCouponInfo(packageId);
    const couponCode = info.inputCode?.trim();

    if (!couponCode) {
      setCouponState((prev) => ({
        ...prev,
        [packageId]: {
          ...info,
          message: "Please enter a coupon code.",
          isError: true,
        },
      }));
      return;
    }

    if (info.isCouponApplied && info.couponCode === couponCode) {
      return;
    }

    setCouponState((prev) => ({
      ...prev,
      [packageId]: {
        ...info,
        isValidating: true,
        message: "Validating coupon...",
        isError: false,
      },
    }));

    try {
      console.log("Validating coupon", { couponCode, packageId });
      const validateUrl = new URL("https://api.sugaam.in/api/payments/validate-coupon");
      validateUrl.searchParams.set("code", couponCode);
      validateUrl.searchParams.set("packageId", packageId);
      validateUrl.searchParams.set("currentPrice", price);

      const res = await fetch(validateUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          code: couponCode,
          packageId,
        }),
      });

      const responseText = await res.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { message: responseText };
      }

      console.log("Coupon validation response", res.status, data);

      if (!res.ok || !data.valid) {
        throw new Error(data.message || "Coupon is not valid for this package.");
      }

      setCouponState((prev) => ({
        ...prev,
        [packageId]: {
          ...info,
          couponCode,
          discountAmount: data.discountAmount || 0,
          finalPrice: data.finalPrice ?? null,
          isCouponApplied: true,
          message: data.message || "Coupon applied successfully.",
          isError: false,
          isValidating: false,
        },
      }));
    } catch (err) {
      setCouponState((prev) => ({
        ...prev,
        [packageId]: {
          ...info,
          couponCode: "",
          discountAmount: 0,
          finalPrice: null,
          isCouponApplied: false,
          message: err.message,
          isError: true,
          isValidating: false,
        },
      }));
    }
  };

  const handlePayment = async (packageId, categoryId) => {
    try {
      const isLoaded = await loadRazorpay();
      if (!isLoaded) return alert("Razorpay failed to load");

      const couponCode = getCouponInfo(packageId).couponCode || "";

      const res = await fetch(
        "https://api.sugaam.in/api/payments/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            packageId,
            couponCode,
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

          navigate(`/materials?categoryId=${categoryId}&openResources=true`);
        },
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
          const couponInfo = getCouponInfo(pkg.uuid);

          return (
            <div key={pkg.uuid} className="pricing-card">
              <h3>{category?.displayName || pkg.name}</h3>
              <p>{category?.description}</p>

              <div className="price-row">
                <span>Original Price</span>
                <strong>₹{pkg.priceAmount}</strong>
              </div>

              {couponInfo.isCouponApplied && (
                <>
                  <div className="price-summary">
                    <span>Discount</span>
                    <strong>₹{couponInfo.discountAmount}</strong>
                  </div>
                  <div className="price-summary final-price">
                    <span>Final Price</span>
                    <strong>₹{couponInfo.finalPrice}</strong>
                  </div>
                </>
              )}

              <div className="coupon-row">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInfo.inputCode}
                  onChange={(event) => handleCouponChange(pkg.uuid, event.target.value)}
                  disabled={couponInfo.isCouponApplied}
                />
                <button
                  type="button"
                  onClick={() => handleApplyCoupon(pkg.uuid, pkg.priceAmount)}
                  disabled={couponInfo.isCouponApplied || couponInfo.isValidating}
                >
                  {couponInfo.isCouponApplied ? "Coupon Applied" : "Apply Coupon"}
                </button>
              </div>

              {couponInfo.message && (
                <p className={`coupon-message ${couponInfo.isError ? "error" : "success"}`}>
                  {couponInfo.message}
                </p>
              )}

              {!subscribed ? (
                <button onClick={() => handlePayment(pkg.uuid, category?.id)}>
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