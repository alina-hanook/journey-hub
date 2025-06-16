import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJourney = () => {
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJourney = {
      id: Date.now(),
      country,
      description,
      image,
      price,
    };

    const existing = JSON.parse(localStorage.getItem("journeys")) || [];
    localStorage.setItem("journeys", JSON.stringify([...existing, newJourney]));
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Add New Journey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Country</label>
          <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input type="url" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Journey</button>
      </form>
    </div>
  );
};

export default AddJourney;
