import { useState } from 'react';
import { addJourney } from '../services/journeyService';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const [form, setForm] = useState({
    name: '',
    review: '',
    rating: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJourney(form); // Save review
    navigate('/'); // Redirect to homepage or reviews list
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h3 className="text-center text-primary mb-4 fw-bold">Share Your Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write your review..."
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
          required
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Rating (1 to 5)"
          min="1"
          max="5"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />
        <input
          type="url"
          className="form-control mb-3"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <div className="text-center">
          <button className="btn btn-success px-4">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;


