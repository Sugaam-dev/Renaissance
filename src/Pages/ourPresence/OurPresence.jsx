import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";
import "./OurPresence.css";
import BranchesCard from "../../components/BranchesCard";

export default function OurPresence() {
  const bannerImage =
    "https://static.wixstatic.com/media/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png/v1/fill/w_1901,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c5b757_4395200a26214bce9dc0c7f50aa0b9e6~mv2.png";

  return (
    <div className="presence-wrapper">
      {/* Banner */}
      <div
        className="presence-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1>Our Presence</h1>
      </div>

      {/* Contact Overview */}
      <div className="contact-overview">
        <div className="contact-item">
          <Phone size={20} />
          <p>+91 95450 08792</p>
        </div>

        <div className="contact-item">
          <Mail size={20} />
          <p>support@renaissancedesigns.in</p>
        </div>
      </div>

      {/* Addresses Section */}
      <div className="addresses-section">
        <h2>Our Offices</h2>

        <div className="address-grid">
          <div className="address-card">
            <Building2 size={22} />
            <h3>Mumbai</h3>
            <p>
              401 Business Park,<br />
              Andheri East,<br />
              Mumbai, Maharashtra
            </p>
          </div>

          <div className="address-card">
            <Building2 size={22} />
            <h3>Pune</h3>
            <p>
              2nd Floor Tech Hub,<br />
              Baner Road,<br />
              Pune, Maharashtra
            </p>
          </div>

          <div className="address-card">
            <Building2 size={22} />
            <h3>Delhi</h3>
            <p>
              15 Corporate Tower,<br />
              Connaught Place,<br />
              New Delhi
            </p>
          </div>

          <div className="address-card">
            <Building2 size={22} />
            <h3>Bangalore</h3>
            <p>
              3rd Floor IT Plaza,<br />
              Whitefield,<br />
              Bangalore, Karnataka
            </p>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <BranchesCard />
    </div>
  );
}