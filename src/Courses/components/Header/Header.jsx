import React, { useState, useEffect } from 'react';
import DesktopHeaderCourses from "../Header/HeaderDesktopCourses/DesktopHeaderCourses";
import MobileHeaderCourses from "../Header/HeaderMobileCourses/MobileHeaderCourses";

/**
 * Header component - A responsive header component that renders either 
 * a desktop or mobile header based on the current window width.
 * 
 * This component uses state to determine if the current window width 
 * qualifies as a desktop view or not. It listens to window resize events 
 * to update its state and render the appropriate header component.
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * );
 */
export default function Header() {
  /**
   * State to determine if the current window width is for desktop view.
   * 
   * @type {boolean}
   */
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  /**
   * Function to update the state based on the current window width.
   * Sets the state to true if the window width is 992 pixels or more, 
   * indicating a desktop view, and false otherwise.
   * 
   * @function
   */
  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 575.98);
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
      {isDesktop ? <DesktopHeaderCourses /> : <MobileHeaderCourses />}
    </div>
  );
};