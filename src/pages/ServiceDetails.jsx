

const ServiceDetails = () => {
  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <h2 className="text-primary mb-4 text-center fw-bold">Our Services</h2>

      

      <h4 className="text-secondary fw-semibold mb-2">🏨 Hotel & Resort Accommodation</h4>
      <ul>
        <li>Single Bed Room: <strong>$50/night</strong></li>
        <li>Double Bed Room: <strong>$85/night</strong></li>
        <li>Honeymoon Package: <strong>$200/night</strong> (includes candlelight dinner, spa & decor)</li>
        <li>Luxury Resort Stay: <strong>Starts at $150/night</strong></li>
      </ul>

      <h4 className="text-secondary fw-semibold mt-4 mb-2">🍽️ Food & Beverages</h4>
      <ul>
        <li>Breakfast Buffet: <strong>$10/person</strong></li>
        <li>Lunch/Dinner (Continental & Local): <strong>$20–$30/person</strong></li>
        <li>Special Drinks & Beverages: <strong>$5–$15</strong></li>
      </ul>

      <h4 className="text-secondary fw-semibold mt-4 mb-2">🚗 Transportation & Rentals</h4>
      <ul>
        <li>Local Car Rental: <strong>$40/day</strong></li>
        <li>Airport Pickup & Drop: <strong>$25</strong></li>
        <li>Guided City Tours: <strong>$60/person</strong></li>
      </ul>

      <h4 className="text-secondary fw-semibold mt-4 mb-2">🎉 Extra Services</h4>
      <ul>
        <li>Event Planning & Honeymoon Decor</li>
        <li>Spa & Wellness Treatments</li>
        <li>Adventure Activities Booking</li>
      </ul>

      <p className="mt-4 text-muted">
        For bookings, custom packages or special requests, please contact us directly or visit our Contact page.
      </p>
    </div>
  );
};

export default ServiceDetails;


