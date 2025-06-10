import  { useState } from 'react';

const Filterbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="input-group my-4">
      <input
        type="text"
        className="form-control border-primary"
        placeholder="Search destination or title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => onSearch(query)}>Filter</button>
    </div>
  );
};

export default Filterbar;

