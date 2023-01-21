import React from 'react';

export default function FilterValue() {
  return (
    <div className="col">
      <div className="input-group">
        <span className="input-group-text">#</span>
        <input
          type="number"
          className="form-control"
          placeholder="12345"
          data-testid="value-filter"
        />
      </div>
    </div>
  );
}
