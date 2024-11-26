import React, { useState, useEffect } from 'react';
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import TableMobileHeader from "./TableMobileHeader/TableMobileHeader";

export default function Header() {
  // Initialize state to determine if the current window width is for desktop view
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  // Function to update the state based on window width
  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 992);
  };

  useEffect(() => {
    // Add resize event listener to update state on window resize
    window.addEventListener('resize', updateMedia);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div>
      {/* Render DesktopHeader if isDesktop is true, otherwise render MobileHeader */}
      {isDesktop ? <DesktopHeader /> : <TableMobileHeader />}
    </div>
  );
};