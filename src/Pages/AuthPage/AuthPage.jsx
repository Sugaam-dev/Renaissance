// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./AuthPage.css";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showForgot, setShowForgot] = useState(false);
//   const [toast, setToast] = useState({ message: "", type: "" });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const query = new URLSearchParams(location.search);
//   const exam = query.get("exam");

//   // handle input
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // validation
//   const validate = () => {
//     const { name, email, password } = formData;

//     if (!email.includes("@")) return "Enter valid email";
//     if (password.length < 6) return "Password must be at least 6 characters";

//     if (!isLogin && name.trim() === "")
//       return "Name is required";

//     return "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationError = validate();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setError("");

//     // REGISTER
//     if (!isLogin) {
//       localStorage.setItem("user", JSON.stringify(formData));

//       setToast({ message: "Registered successfully!", type: "success" });

// setTimeout(() => {
//   setToast({ message: "", type: "" });
//   setIsLogin(true);
// }, 2000);

//       setIsLogin(true); // go back to login
//       setFormData({ name: "", email: "", password: "" });
//       return;
//     }

//     // LOGIN
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       !storedUser ||
//       storedUser.email !== formData.email ||
//       storedUser.password !== formData.password
//     ) {
//       setError("Invalid email or password");
//       return;
//     }

//     // success login
//    setToast({ message: "Login successful!", type: "success" });

// setTimeout(() => {
//   navigate(`/pricing?exam=${exam}`);
// }, 1500);

//   };

//   return (
//     <div className="auth-container">

//       <div className="auth-box">

//         <h2>{isLogin ? "Login" : "Register"}</h2>

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           {error && <p className="error">{error}</p>}

//           <button type="submit">
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         {/* Forgot Password */}
//         {isLogin && (
//           <button
//             type="button"
//             className="forgot-btn"
//             onClick={() => setShowForgot(true)}
//           >
//             Forgot Password
//           </button>
//         )}

//         {/* Toggle */}
//         <p className="toggle">
//           {isLogin ? (
//             <>
//               Don't have an account{" "}
//               <span onClick={() => setIsLogin(false)}>Register</span>
//             </>
//           ) : (
//             <>
//               Already have an account{" "}
//               <span onClick={() => setIsLogin(true)}>Login</span>
//             </>
//           )}
//         </p>

//       </div>

//       {/* MODAL */}
//       {showForgot && (
//         <div className="forgot-modal">
//           <div className="forgot-box">
//             <h3>Reset Password</h3>

//             <input placeholder="Enter your email" />

//             <button
//               onClick={() => {
//                 alert("Reset link sent");
//                 setShowForgot(false);
//               }}
//             >
//               Send Reset Link
//             </button>

//             <button
//               className="cancel-btn"
//               onClick={() => setShowForgot(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//       {toast.message && (
//   <div className={`toast ${toast.type}`}>
//     {toast.message}
//   </div>
// )}

//     </div>
//   );
// };

// export default AuthPage;
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthPage.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../authSlice";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [forgotStep, setForgotStep] = useState("email"); // email → otp
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const exam = query.get("exam");

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const validate = () => {
    const { firstName, lastName, email, password, phoneNumber } = formData;

    if (!email.includes("@")) return "Enter valid email";

    if (!isLogin) {
      if (!firstName.trim()) return "First name is required";
      if (!lastName.trim()) return "Last name is required";
      if (!phoneNumber.trim()) return "Phone number is required";

      if (!/^\d{10}$/.test(phoneNumber))
        return "Enter valid 10-digit phone number";
    }

    if (password.length < 8)
      return "Password must be at least 8 characters";

    return "";
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (!isLogin) {
        // 🔵 REGISTER
        const res = await fetch(
          "https://api.sugaam.in/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              password: formData.password,
              phoneNumber: formData.phoneNumber,
            }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          console.log("REGISTER ERROR:", data);
          throw new Error(data.message || "Registration failed");
        }

        setToast({ message: "Registered successfully!", type: "success" });

        setTimeout(() => {
          setToast({ message: "", type: "" });
          setShowOtp(true);;
        }, 2000);
      } else {
        // 🔵 LOGIN
        const res = await fetch(
          "https://api.sugaam.in/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          console.log("LOGIN ERROR:", data);
          throw new Error(data.message || "Login failed");
        }
        console.log("LOGIN RESPONSE:", data);
        

        // save token
        // localStorage.setItem("token", data.token);

        localStorage.setItem("user", JSON.stringify(data));

        dispatch(setUser(data));

        setToast({ message: "Login successful!", type: "success" });

        setTimeout(() => {
          navigate(`/pricing?exam=${exam}`);
        }, 1500);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
  try {
    const res = await fetch(
      "https://api.sugaam.in/api/auth/verify-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "OTP failed");

    setToast({ message: "Account verified!", type: "success" });

    setTimeout(() => {
      setShowOtp(false);
      setIsLogin(true);
    }, 1500);

  } catch (err) {
    setError(err.message);
  }
};

  const handleForgotPassword = async () => {
  try {
    const res = await fetch(
      "https://api.sugaam.in/api/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed");

    setToast({ message: "OTP sent to your email", type: "success" });

    setForgotStep("otp"); // move to next step
  } catch (err) {
    setError(err.message);
  }
};

  const handleResetPassword = async () => {
  if (newPassword.length < 8) {
    setError("Password must be at least 8 characters");
    return;
  }

  try {
    const res = await fetch(
      "https://api.sugaam.in/api/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: forgotEmail,
          otp: otp,
          newPassword: newPassword,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Reset failed");

    setToast({ message: "Password reset successful!", type: "success" });

    setTimeout(() => {
      setShowForgot(false);
      setForgotStep("email");
      setOtp("");
      setNewPassword("");
      setIsLogin(true);
    }, 1500);

  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>

          {/* REGISTER FIELDS */}
          {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </>
          )}

          {/* COMMON FIELDS */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        {/* FORGOT PASSWORD */}
        {isLogin && (
          <button
            type="button"
            className="forgot-btn"
            onClick={() => setShowForgot(true)}
          >
            Forgot Password
          </button>
        )}

        {/* TOGGLE */}
        <p className="toggle">
          {isLogin ? (
            <>
              Don't have an account{" "}
              <span onClick={() => setIsLogin(false)}>Register</span>
            </>
          ) : (
            <>
              Already have an account{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>

      </div>

      {/* TOAST */}
      {toast.message && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* FORGOT PASSWORD MODAL */}
      {showForgot && (
  <div className="forgot-modal">
    <div className="forgot-box">

      {forgotStep === "email" ? (
        <>
          <h3>Forgot Password</h3>

          <input
            type="email"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
          />

          <button onClick={handleForgotPassword}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h3>Reset Password</h3>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button onClick={handleResetPassword}>
            Reset Password
          </button>
        </>
      )}

      <button
        className="cancel-btn"
        onClick={() => {
          setShowForgot(false);
          setForgotStep("email");
        }}
      >
        Cancel
      </button>

    </div>
  </div>
)}

      {showOtp && (
  <div className="forgot-modal">
    <div className="forgot-box">
      <h3>Verify OTP</h3>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={handleVerifyOtp}>
        Verify OTP
      </button>

      <button
        className="cancel-btn"
        onClick={() => setShowOtp(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}

      

    </div>
  );
};

export default AuthPage;