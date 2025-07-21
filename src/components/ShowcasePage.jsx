import React from 'react';

function ShowcasePage() {
  return (
    <div className="text-center">
      <h2>Showcase Page</h2>
      <p>Here advertisements and media will be displayed.</p>
      <button className="btn btn-secondary mt-3" onClick={() => window.location.href='/home'}>
        Skip Info
      </button>
    </div>
  );
}

export default ShowcasePage;
