import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./RegisterPage.css";
import BranchesCard from "../../components/BranchesCard";

export default function RegisterPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const bgImage =
    "https://static.wixstatic.com/media/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png/v1/fill/w_1901,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png";

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔴 Replace this

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Registration submitted successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="page-wrapper">
      <div
        className="banner-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="register-container">

        {/* LEFT */}
        <div className="left-section">
          <h1 className="title">Register now</h1>
          <p className="subtitle">
            Register now and book appointment
          </p>

          <div className="contact-info">
            <div className="info-block">
              <h4>Phone</h4>
              <p className="hover-text">+91 95450 08792</p>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p className="hover-text">
                support@renaissancedesigns.in
              </p>
            </div>
          </div>

          <div className="social">
            <h4>Social Media</h4>
            <div className="icons">
              <a href="https://www.facebook.com/TheRenaissance2010?mibextid=wwXIfr&rdid=FqAjLyqj7DiQOEY7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ASQdJeZ2a%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <Twitter size={18} />
              <Linkedin size={18} />
              <a href="https://www.instagram.com/therenaissanceindia?utm_source=qr&igsh=Z3RhMXJjbXpnbHBp" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-section">
          <form onSubmit={onSubmit}>

            <div className="row">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" name="first_name" required />
              </div>

              <div className="input-group">
                <label>Last Name</label>
                <input type="text" name="last_name" required />
              </div>
            </div>

            <div className="input-group">
              <label>Email *</label>
              <input type="email" name="email" required />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="text" name="phone" required />
            </div>

            <div className="input-group">
              <label>
                Details (Locality, Timings, Reason)
              </label>
              <textarea name="details" required></textarea>
            </div>

            <button
              type="submit"
              className="send-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send"}
            </button>

            {result && (
              <p className="form-result">{result}</p>
            )}

          </form>
        </div>

        <div className="bottom-separator"></div>
      </div>

      <BranchesCard />
    </div>
  );
}
