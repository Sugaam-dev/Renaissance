import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div className="map-section">

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Mumbai,India&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
