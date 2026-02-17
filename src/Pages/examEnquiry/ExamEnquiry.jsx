import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";
import "./ExamEnquiry.css";

export default function ExamEnquiry() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const bannerImage =
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
      setResult("✅ Enquiry submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="exam-wrapper">
      {/* Banner */}
      <div
        className="exam-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1>Exam Enquiry</h1>
      </div>

      {/* Form Card */}
      <div className="exam-form-container">
        <h2>Enquire About an Exam</h2>

        <form onSubmit={onSubmit} className="exam-form">
          <div className="form-row">
            <div className="form-group">
              <label>
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter full name"
              />
            </div>

            <div className="form-group">
              <label>
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <Phone size={16} /> Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label>
                <BookOpen size={16} /> Exam Name
              </label>
              <input
                type="text"
                name="exam"
                required
                placeholder="Enter exam name"
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="exam-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

          {result && <p className="form-result">{result}</p>}
        </form>

        <div className="bottom-separator"></div>
      </div>
    </div>
  );
}
