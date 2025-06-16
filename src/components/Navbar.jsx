
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) => 
    "nav-link" + (isActive ? " active fw-bold" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
       <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img 
          src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg" 
          alt="Logo" 
          width="40" 
          height="40" 
          className="rounded-circle me-2"
        />Journey Hub</NavLink>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
          </li>  <li className="nav-item">
    <NavLink to="/add" className={linkStyle}>Add Journey</NavLink>
  </li>
          <li className="nav-item">
            <NavLink to="/review" className={linkStyle}>Review</NavLink>
          </li>
  <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          <li className="nav-item">
  <NavLink to="/services" className={linkStyle}>Services</NavLink>
</li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

