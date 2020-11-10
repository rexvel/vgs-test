// Input.js
import React from 'react';

function Search() {
  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" placeholder="Search..." aria-label="Search icons" aria-describedby="basic-addon2"  />
      <div className="input-group-append">
      </div>
    </div>
  );
}

export default Search;