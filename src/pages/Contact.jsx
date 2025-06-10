import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <h2 className="text-center text-primary fw-bold mb-4">Contact Us</h2>

      {/* Contact Cards */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5 className="text-success fw-bold">HR Manager</h5>
            <p>Email: hr@journeyhub.com</p>
            <p>Phone: +1-202-555-0148</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5 className="text-warning fw-bold">Customer Support</h5>
            <p>Email: support@journeyhub.com</p>
            <p>Phone: +1-202-555-0175</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5 className="text-info fw-bold">General Inquiry</h5>
            <p>Email: info@journeyhub.com</p>
            <p>Phone: +1-202-555-0199</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <div className="text-center">
          <button className="btn btn-success px-4">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;




