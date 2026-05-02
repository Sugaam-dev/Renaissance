// import "./PaymentPage.css";
// import { useState } from "react";
// import { FaCreditCard, FaMobileAlt, FaLock } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const handlePayment = async () => {
//     console.log("🔥 HANDLE PAYMENT TRIGGERED");
//   try {
//     const packageId = "6312b781-f61c-405a-b0df-56c2f260f1cd"; // later dynamic

//     const res = await fetch(
//       "https://api.sugaam.in/api/payments/create-order",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // VERY IMPORTANT
//         body: JSON.stringify({
//           packageId,
//           couponCode: "",
//         }),
//       }
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Order failed");
//     }

//     console.log("ORDER DATA:", data);

//     const options = {
//       key: data.keyId,
//       amount: data.amount,
//       currency: data.currency,
//       name: data.businessName,
//       description: "Course Payment",
//       order_id: data.razorpayOrderId,

//       handler: async function (response) {
//         console.log("PAYMENT SUCCESS:", response);

//         // STEP 5 → VERIFY PAYMENT
//         await fetch(
//           "https://api.sugaam.in/api/payments/verify-payment",
//           {
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
//           }
//         );

//         alert("Payment successful 🎉");
//       },

//       theme: {
//         color: "#f5c84c",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();

//   } catch (err) {
//     console.error("PAYMENT ERROR:", err);
//     alert(err.message);
//   }
// };

//   return (
//     <div className="payment-container">

//       {/* LEFT */}
//       <div className="payment-left">
//         <h2>Configure your plan</h2>

//         {/* Payment toggle */}
//         <div className="payment-methods">
//           <button
//             className={paymentMethod === "card" ? "active" : ""}
//             onClick={() => setPaymentMethod("card")}
//           >
//             <FaCreditCard /> Card
//           </button>

//           <button
//             className={paymentMethod === "upi" ? "active" : ""}
//             onClick={() => setPaymentMethod("upi")}
//           >
//             <FaMobileAlt /> UPI
//           </button>
//         </div>

//         {/* CARD FORM */}
//         {paymentMethod === "card" && (
//           <>
//             <div className="input-icon">
//               <input placeholder="Card number" />
//               <div className="card-logos">
//                 <img src="https://img.icons8.com/color/48/visa.png" />
//                 <img src="https://img.icons8.com/color/48/mastercard.png" />
//                 <img src="https://img.icons8.com/color/48/amex.png" />
//               </div>
//             </div>

//             <div className="row">
//               <input placeholder="Expiration date" />
//               <div className="input-icon">
//                 <input placeholder="Security code" />
//                 <FaLock className="icon" />
//               </div>
//             </div>
//           </>
//         )}

//         {/* UPI FORM */}
//         {paymentMethod === "upi" && (
//           <div className="upi-box">
//             <input placeholder="Enter UPI ID (e.g. name@upi)" />
//             <p className="upi-note">
//               You will receive a payment request on your UPI app
//             </p>
//           </div>
//         )}

//         {/* Billing */}
//         <h3>Billing address</h3>

//         <input placeholder="Street address" />

//         <div className="row">
//           <div className="input-icon">
//             <input placeholder="City" />
//             <MdLocationOn className="icon" />
//           </div>
//           <input placeholder="State" />
//         </div>

//         <div className="row">
//           <input placeholder="Postal code" />
//           <input placeholder="Country" />
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="payment-right">
//         <h2>Plus plan</h2>

//         <ul className="features">
//           <li>⚡ Smarter, faster responses</li>
//           <li>📎 More messages & uploads</li>
//           <li>🎨 Better image generation</li>
//           <li>🧠 Extra memory & context</li>
//         </ul>

//         <div className="price">
//           <div className="price-row">
//             <span>Monthly subscription</span>
//             <span>₹999</span>
//           </div>

//           <div className="price-row discount">
//             <span>Discount (10%)</span>
//             <span>-₹100</span>
//           </div>

//           <div className="price-row">
//             <span>Estimated tax</span>
//             <span>₹0</span>
//           </div>

//           <hr />

//           <div className="price-row total">
//             <span>Due today</span>
//             <span>₹899</span>
//           </div>
//         </div>

//         <button className="subscribe-btn" onClick={handlePayment}>
//           Subscribe
//         </button>
//       </div>

//     </div>
//   );
// };

// export default PaymentPage;