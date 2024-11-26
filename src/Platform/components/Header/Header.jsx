import React, { useState, useEffect } from 'react';
import DesktopHeader from "../Header/DesktopHeader/DesktopHeader";
import MobileHeader from "../Header/MobileHeader/MobileHeader";

/**
 * Header component for the Trendemy platform.
 * This component renders a responsive header that switches between
 * DesktopHeader and MobileHeader based on the window width.
 * 
 * @component
 * @returns {JSX.Element} The rendered Header component.
 */
export default function Header () {
  // Initialize state to determine if the current window width is for desktop view
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  /**
   * Update the state based on window width.
   * This function is called whenever the window is resized.
   * @function updateMedia
   * @returns {void}
   */
  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 575.98);
  };

  useEffect(() => {
    // Add resize event listener to update state on window resize
    window.addEventListener('resize', updateMedia);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div>
      {/* Render DesktopHeader if isDesktop is true, otherwise render MobileHeader */}
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
};

