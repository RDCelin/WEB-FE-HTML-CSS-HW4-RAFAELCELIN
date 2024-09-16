import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Text on the left */}
        <div>
          <h1 className="text-3xl font-bold">Aperture Science Landing Page</h1>

        </div>

      </div>
    </header>

  );
};

export default Header;