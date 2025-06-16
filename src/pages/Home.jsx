import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Sample static journeys
const staticJourneys = [
  {
    id: 1,
    country: "Switzerland",
    description: "Snowy Alps and scenic trains.",
    image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    price: "$1800",
  },
  {
    id: 2,
    country: "Japan",
    description: "Mount Fuji and cherry blossoms.",
    image: "https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg",
    price: "$1400",
  },
  {
    id: 3,
    country: "New Zealand",
    description: "Adventure capital with stunning lakes.",
    image: "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg",
    price: "$2000",
  },
  {
    id: 4,
    country: "Italy",
    description: "Historic cities and amazing food.",
    image: "https://us.images.westend61.de/0000746336pw/italy-gressoney-alps-castor-group-of-mountaineers-ALRF00720.jpg",
    price: "$1600",
  },
  {
    id: 5,
    country: "Canada",
    description: "Rocky Mountains and wilderness.",
    image: "https://us.images.westend61.de/0000837544l/canada-british-columbia-boya-lake-boya-lake-provincial-park-kanu-GUSF00371.jpg",
    price: "$1700",
  },
  {
    id: 6,
    country: "Australia",
    description: "Beaches, wildlife, and outback.",
    image: "https://us.images.westend61.de/0002098206l/aerial-view-of-cliffs-and-coastline-at-sunset-with-ocean-and-clouds-port-willunga-south-australia-australia-AAEF45526.jpg",
    price: "$1700",
  },
  {
    id: 7,
    country: "Iceland",
    description: "Glaciers, waterfalls, and northern lights.",
    image: "https://images.pexels.com/photos/2526028/pexels-photo-2526028.jpeg",
    price: "$2200",
  },
  {
    id: 8,
    country: "Norway",
    description: "Fjords and natural wonders.",
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    price: "$1500",
  },
  {
    id: 9,
    country: "India",
    description: "Diverse culture and majestic Himalayas.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: "$1200",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceVisible, setPriceVisible] = useState({});
  const [addedJourneys, setAddedJourneys] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Load added journeys from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journeys")) || [];
    setAddedJourneys(stored);
  }, [location]);

  // Combine static and added journeys
  const allJourneys = [...staticJourneys, ...addedJourneys];

  // Filter journeys by search term
  const filteredJourneys = allJourneys.filter((j) =>
    j.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle price view
  const togglePrice = (id) => {
    setPriceVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Delete added journey
  const handleDelete = (id) => {
    const updated = addedJourneys.filter((j) => j.id !== id);
    setAddedJourneys(updated);
    localStorage.setItem("journeys", JSON.stringify(updated));
  };

  return (
    <div style={{ backgroundColor: "#f3f6f9" }}>
      {/* Heading */}
      <div style={{ backgroundColor: "#007bff", padding: "2rem 1rem", textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>TRAVEL IN YOUR OWN WAY</h1>
        <input
          type="text"
          placeholder="Search journeys..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "none", width: "300px", marginTop: "1rem" }}
        />
        <p style={{ marginTop: "1rem", fontStyle: "italic", fontSize: "1.2rem" }}>
          "Jobs fill your pocket, but adventures fill your soul."
        </p>
      </div>

      {/* Hero Image */}
      <img
        src="https://us.images.westend61.de/0001138352pw/happy-man-walking-on-trail-on-a-hiking-trip-in-the-mountains-BSZF00981.jpg"
        alt="Adventure"
        style={{ width: "100%", height: "90vh", objectFit: "cover" }}
      />

      {/* Cards */}
      <div className="container mt-4">
        <div className="row">
          {filteredJourneys.map((journey) => {
            const isAdded = addedJourneys.some((j) => j.id === journey.id);
            return (
              <div key={journey.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={journey.image}
                    alt={journey.country}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{journey.country}</h5>
                      <p className="card-text">{journey.description}</p>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        onClick={() => togglePrice(journey.id)}
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "6px",
                          border: "none",
                          backgroundColor: "#007bff",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        View Price
                      </button>
                      {priceVisible[journey.id] && (
                        <p
                          style={{
                            marginTop: "0.5rem",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            color: "#28a745",
                          }}
                        >
                          Price: {journey.price || "N/A"}
                        </p>
                      )}
                    </div>

                    {/* Delete Button (only for added journeys) */}
                    {isAdded && (
                      <div className="text-center mt-2">
                        <button
                          onClick={() => handleDelete(journey.id)}
                          style={{
                            padding: "0.4rem 1rem",
                            borderRadius: "6px",
                            border: "none",
                            backgroundColor: "#dc3545",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Button */}
        <div className="text-center mt-5">
          <button
            onClick={() => navigate("/add")}
            className="btn btn-success"
            style={{ padding: "0.7rem 2rem", fontSize: "1rem" }}
          >
            + Add Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
