import React, { useState } from 'react';

function Category() {
  const [filter, setFilter] = useState('All');

  const festivalOffers = [
    { id: 1, title: 'Diwali Delight', description: 'Celebrate Diwali in style.' },
    { id: 2, title: 'Holi Fest', description: 'Enjoy Holi in Mathura.' },
  ];

  const domesticPackages = [
    { id: 3, title: 'Goa Trip', description: 'Relax at Goa beaches.' },
    { id: 4, title: 'Manali Adventure', description: 'Snow and mountains.' },
  ];

  const internationalPackages = [
    { id: 5, title: 'Paris Getaway', description: 'Visit the Eiffel Tower.' },
    { id: 6, title: 'Thailand Escape', description: 'Explore exotic islands.' },
  ];

  const renderCards = (packages) => (
    <div className="card-container">
      {packages.map((pkg) => (
        <div key={pkg.id} className="card">
          <h3>{pkg.title}</h3>
          <p>{pkg.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="category-wrapper">
      <h2 style={{ textAlign: 'center' }}>🧭 Select a Category</h2>
      <div className="filter-container" style={{ textAlign: 'center', margin: '20px' }}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="category-dropdown"
        >
          <option value="All">All</option>
          <option value="Festival">Festival</option>
          <option value="Domestic">Domestic</option>
          <option value="International">International</option>
        </select>
      </div>

      {(filter === 'All' || filter === 'Festival') && (
        <div className="section">
          <h2>🎉 Festival Offers</h2>
          {renderCards(festivalOffers)}
        </div>
      )}

      {(filter === 'All' || filter === 'Domestic') && (
        <div className="section">
          <h2>🏞️ Domestic Packages</h2>
          {renderCards(domesticPackages)}
        </div>
      )}

      {(filter === 'All' || filter === 'International') && (
        <div className="section">
          <h2>🌍 International Packages</h2>
          {renderCards(internationalPackages)}
        </div>
      )}
    </div>
  );
}

export default Category;
