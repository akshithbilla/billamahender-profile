import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Bill Mahender Profile. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;