import React, { useState } from "react";
import "./HomePage.css";
import Footer from "./Footer";

const domesticPackages = [
  {
    id: 1,
    name: "Kashmir Paradise",
    location: "Kashmir, India",
    price: "₹25,000",
    image: "/images/kashmirparadise.jpg",
    details:
      "Experience the stunning beauty of Kashmir with 5 nights and 6 days filled with scenic views, houseboats, and snow-capped mountains. Ideal for nature lovers and adventure seekers.",
  },
  {
    id: 2,
    name: "Goa Beach Vibes",
    location: "Goa, India",
    price: "₹18,500",
    image: "/images/Goabeach.jpeg",
    details:
      "Enjoy the sun, sand, and vibrant nightlife with our 4-night Goa package, including beach activities and local cuisine exploration.",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    location: "Kerala, India",
    price: "₹22,000",
    image: "/images/kerala.jpg",
    details:
      "Cruise through the tranquil backwaters of Kerala on a traditional houseboat, witnessing lush greenery and exotic wildlife.",
  },
  {
    id: 4,
    name: "Leh-Ladakh Adventure",
    location: "Ladakh, India",
    price: "₹30,000",
    image: "/images/ladakh.jpg",
    details:
      "Explore rugged terrains, stunning monasteries, and high-altitude lakes on this adventurous 7-day trip to Leh and Ladakh.",
  },
  {
    id: 5,
    name: "Rajasthan Heritage",
    location: "Rajasthan, India",
    price: "₹20,000",
    image: "/images/rajasthan.jpg",
    details:
      "Experience royal palaces, desert safaris, and vibrant culture with our Rajasthan heritage tour.",
  },
  {
    id: 6,
    name: "Sikkim Valley",
    location: "Sikkim, India",
    price: "₹24,000",
    image: "/images/sikkim.jpg",
    details:
      "Discover the hidden gems of North-East India with serene valleys, monasteries, and beautiful landscapes.",
  },
  {
    id: 7,
    name: "Ooty Hills",
    location: "Ooty, India",
    price: "₹16,000",
    image: "/images/ooty.jpg",
    details:
      "Relax in the peaceful hills of Ooty with cool weather, botanical gardens, and tea plantations.",
  },
  {
    id: 8,
    name: "Andaman Islands",
    location: "Andaman, India",
    price: "₹35,000",
    image: "/images/andaman.jpg",
    details:
      "Enjoy pristine beaches, crystal-clear waters, and water sports in the beautiful Andaman Islands.",
  },
];

const internationalPackages = [
  {
    id: 9,
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "₹1,20,000",
    image: "/images/switzerland.jpg",
    details:
      "Explore snow-covered Alps and picturesque Swiss cities for 7 days filled with skiing, hiking, and cultural tours.",
  },
  {
    id: 10,
    name: "Bali Bliss",
    location: "Bali, Indonesia",
    price: "₹75,000",
    image: "/images/bali.jpg",
    details:
      "Relax in Bali's beautiful beaches, visit temples, and enjoy vibrant nightlife during this 6-day tour.",
  },
  {
    id: 11,
    name: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    price: "₹65,000",
    image: "/images/dubai.jpg",
    details:
      "Experience luxury shopping, desert safaris, and iconic landmarks on this Dubai tour.",
  },
  {
    id: 12,
    name: "Paris Romance",
    location: "Paris, France",
    price: "₹90,000",
    image: "/images/paris.jpg",
    details:
      "Visit the Eiffel Tower, Louvre Museum, and enjoy a Seine River cruise for a romantic Paris experience.",
  },
  {
    id: 13,
    name: "Thailand Escape",
    location: "Thailand",
    price: "₹50,000",
    image: "/images/thailand.jpg",
    details:
      "Explore beaches, temples, and delicious street food in this exotic Thailand tour.",
  },
  {
    id: 14,
    name: "USA Highlights",
    location: "USA",
    price: "₹1,50,000",
    image: "/images/usa.jpg",
    details:
      "Visit New York City, Los Angeles, and the Grand Canyon on this iconic USA tour package.",
  },
  {
    id: 15,
    name: "Japan Explorer",
    location: "Japan",
    price: "₹1,30,000",
    image: "/images/japan.jpg",
    details:
      "Discover Tokyo, Kyoto, and Mount Fuji with guided tours highlighting Japan's culture and technology.",
  },
  {
    id: 16,
    name: "Egyptian Mysteries",
    location: "Egypt",
    price: "₹85,000",
    image: "/images/egypt.jpg",
    details:
      "Visit the Pyramids, Nile cruise, and explore ancient Egyptian historical sites on this 8-day tour.",
  },
];

const festivalOffers = [
  {
    id: 17,
    name: "Diwali in Jaipur",
    location: "Rajasthan, India",
    price: "₹15,000",
    offer: "20% OFF",
    image: "/images/jaipur.jpg",
    details:
      "Celebrate Diwali with mesmerizing lights, fireworks, and royal palaces in the heart of Jaipur.",
  },
  {
    id: 18,
    name: "Christmas in Europe",
    location: "Germany, Austria",
    price: "₹95,000",
    offer: "25% OFF",
    image: "/images/christmas.jpg",
    details:
      "Experience snowy Christmas markets, castles, and festive cheer across Germany and Austria.",
  },
  {
    id: 19,
    name: "Holi in Varanasi",
    location: "Varanasi, India",
    price: "₹10,000",
    offer: "15% OFF",
    image: "/images/holi.jpg",
    details:
      "Enjoy the colorful Holi festival celebrations on the ghats of Varanasi with music and joy.",
  },
  {
    id: 20,
    name: "Eid in Lucknow",
    location: "Lucknow, India",
    price: "₹12,000",
    offer: "10% OFF",
    image: "/images/eid.jpg",
    details:
      "Savor Mughlai cuisine and partake in vibrant Eid festivities in the cultural city of Lucknow.",
  },
  {
    id: 21,
    name: "Durga Puja in Kolkata",
    location: "Kolkata, India",
    price: "₹11,000",
    offer: "18% OFF",
    image: "/images/durga.jpg",
    details:
      "Witness the grandeur of Durga Puja with elaborate decorations and cultural performances in Kolkata.",
  },
  {
    id: 22,
    name: "Navratri in Gujarat",
    location: "Gujarat, India",
    price: "₹13,000",
    offer: "12% OFF",
    image: "/images/navratri.jpg",
    details:
      "Dance through Garba nights and traditional celebrations during Navratri in Gujarat.",
  },
  {
    id: 23,
    name: "New Year in Manali",
    location: "Manali, India",
    price: "₹20,000",
    offer: "30% OFF",
    image: "/images/manali.jpg",
    details:
      "Celebrate the New Year amidst snowy Manali hills with bonfires and winter sports.",
  },
  {
    id: 24,
    name: "Pongal in Tamil Nadu",
    location: "Tamil Nadu, India",
    price: "₹9,000",
    offer: "22% OFF",
    image: "/images/pongal.jpg",
    details:
      "Participate in the traditional Pongal festival with cultural events and delicious food in Tamil Nadu.",
  },
];

function HomePage() {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("All");

  const renderCards = (packages) => (
    <div className="card-grid">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="tour-card"
          onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
        >
          <div className="image-wrapper">
            <img src={pkg.image} alt={pkg.name} />
            {pkg.offer && <span className="offer-badge">{pkg.offer}</span>}
          </div>
          <div className="card-body">
            <h5>{pkg.name}</h5>
            <p>{pkg.location}</p>
            <p className="price">{pkg.price}</p>
            <button className="details-btn">Details</button>
          </div>
          {expandedId === pkg.id && (
            <div className="card-details">
              <p>{pkg.details}</p>
              <button className="btn-book">Book Now</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="homepage-wrapper">
      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => {
            setExpandedId(null);
            setFilter(e.target.value);
          }}
          className="section-filter"
        >
          <option value="All">All</option>
          <option value="Festival">Festival Offers</option>
          <option value="Domestic">Domestic Packages</option>
          <option value="International">International Packages</option>
        </select>
      </div>

      {(filter === "All" || filter === "Festival") && (
        <div
          className="section festival"
          style={{
            backgroundImage:
              "url('/images/festival.jpg')",
          }}
        >
          <h2 className="section-title">🎉 Festival Offers</h2>
          {renderCards(festivalOffers)}
        </div>
      )}

      {(filter === "All" || filter === "Domestic") && (
        <div
          className="section domestic"
          style={{
            backgroundImage:
              "url('/images/domestic.jpg')",
          }}
        >
          <h2 className="section-title">🏞️ Domestic Packages</h2>
          {renderCards(domesticPackages)}
        </div>
      )}

      {(filter === "All" || filter === "International") && (
        <div
          className="section international"
          style={{
            backgroundImage:
              "url('/images/international.jpg')",
          }}
        >
          <h2 className="section-title">🌍 International Packages</h2>
          {renderCards(internationalPackages)}
        </div>
      )}

      
    </div>
  );
}

export default HomePage;
















