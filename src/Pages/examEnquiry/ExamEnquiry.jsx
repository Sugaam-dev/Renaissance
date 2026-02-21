import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import "./ExamEnquiry.css";

const COURSE_OPTIONS = [
  { value: "DESIGN UG", label: "DESIGN UG" },
  { value: "DESIGN PG", label: "DESIGN PG" },
  { value: "FOREIGN PORTFOLIO", label: "FOREIGN PORTFOLIO" },
  { value: "ARCHITECTURE", label: "ARCHITECTURE" },
  { value: "FINE ARTS", label: "FINE ARTS" },
];

export default function ExamEnquiry() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [courseValue, setCourseValue] = useState("");

  const bannerImage =
    "https://static.wixstatic.com/media/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png/v1/fill/w_1901,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png";

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!courseValue) {
      setResult("❌ Please select a course.");
      return;
    }
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.set("course", courseValue);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔴 Replace this

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Enquiry submitted successfully!");
      event.target.reset();
      setCourseValue("");
    } else {
      console.log("Error", data);
      setResult("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const selectedLabel = COURSE_OPTIONS.find(
    (opt) => opt.value === courseValue
  )?.label || "Select course";

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
                <BookOpen size={16} /> Course Name
              </label>
              <div className="custom-dropdown-wrapper">
                <button
                  type="button"
                  className={`custom-dropdown-toggle ${courseValue ? "has-value" : ""}`}
                  onClick={() => setCourseOpen(!courseOpen)}
                >
                  {selectedLabel}
                  <ChevronDown
                    size={16}
                    className={`dropdown-icon ${courseOpen ? "open" : ""}`}
                  />
                </button>

                {courseOpen && (
                  <div className="custom-dropdown-menu">
                    {COURSE_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`custom-dropdown-option ${
                          courseValue === option.value ? "selected" : ""
                        }`}
                        onClick={() => {
                          setCourseValue(option.value);
                          setCourseOpen(false);
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
                <input type="hidden" name="course" value={courseValue} />
              </div>
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
