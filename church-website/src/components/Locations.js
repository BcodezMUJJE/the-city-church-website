import React from "react";
import "./Location.css";
import LuziraImage from "../Assets/Marth.webp"; // Add your image paths
import KirinyaImage from "../Assets/Moli.webp";
import IgangaImage from "../Assets/Kira.webp";

export default function LocationsPage() {
  const locations = [
    {
      name: "The City Church Luzira Campus",
      address: "Kitintale-Luzira, Kampala, Uganda",
      phone: "+256 704 083043",
      email: "info@thecitychurch.or.ug",
      description: "Our main church campus with weekly services and community events.",
      image: LuziraImage,
      pastor: "Pastor Martha Banalya",
    },
    {
      name: "The City Church Kirinya Campus",
      address: "Kirinya, Kampala, Uganda",
      phone: "+256 787 464303",
      email: "info@thecitychurch.or.ug",
      description: "A growing campus with a focus on young adults and families.",
      image: KirinyaImage,
      pastor: "Pastor Derrick & Deborah Mooli",
    },
    {
      name: "The City Church Iganga Campus",
      address: "Iganga – Join us every Sunday",
      phone: "+256 705 510002",
      email: "info@thecitychurch.or.ug",
      description: "Join our online community for worship and services wherever you are.",
      image: IgangaImage,
      pastor: "Pastor Simon & Lillian",
    },
  ];

  return (
    <div className="locations-page">
      <h1 className="locations-title">Our Locations</h1>

      <div className="locations-list">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <div className="location-image-container">
              <img 
                src={location.image} 
                alt={location.name}
                className="location-image"
              />
            </div>
            <div className="location-content">
              <h2 className="location-name">{location.name}</h2>
              <p className="location-pastor">
                <strong>Location Pastor:</strong> {location.pastor}
              </p>
              <p className="location-description">{location.description}</p>
              <p className="location-address">
                <strong>Address:</strong> {location.address}
              </p>
              <p className="location-contact">
                <strong>Phone:</strong> {location.phone}
              </p>
              <p className="location-contact">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${location.email}`} className="location-email">
                  {location.email}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}