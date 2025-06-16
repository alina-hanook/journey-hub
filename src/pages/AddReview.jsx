import { useState } from 'react';

const AddReview = () => {
  const [form, setForm] = useState({
    name: '',
    review: '',
    rating: '',
    image: ''
  });

  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.review.length > 50) {
      alert('Review must be less than or equal to 50 characters.');
      return;
    }

    const newReview = {
      id: Date.now(),
      ...form
    };

    setReviews([newReview, ...reviews]);
    setForm({
      name: '',
      review: '',
      rating: '',
      image: ''
    });
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
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
          rows="3"
          maxLength={50}
          placeholder="Write your review (max 50 characters)..."
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

      {/* Show Submitted Reviews */}
      {reviews.length > 0 && (
        <div className="mt-5">
          <h4 className="text-center text-dark mb-4">Customer Reviews</h4>
          {reviews.map((rev) => (
            <div key={rev.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{rev.name} <span className="text-warning">{'⭐'.repeat(rev.rating)}</span></h5>
                <p className="card-text">{rev.review}</p>
                {rev.image && (
                  <img
                    src={rev.image}
                    alt="Review"
                    className="img-fluid rounded mb-2"
                    style={{ maxHeight: '200px' }}
                  />
                )}
                <div className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(rev.id)}
                  >
                    Delete Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddReview;



