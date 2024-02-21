import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-center bg-[#212121] text-white py-8'>
      <h1>Copyright  &copy;  {currentYear}. All Rights Reserved </h1>
    </footer>
  );
};

export default Footer;
