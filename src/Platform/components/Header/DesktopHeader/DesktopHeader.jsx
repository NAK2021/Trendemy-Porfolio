import React, { useState, useEffect } from "react";
import styles from "./DesktopHeader.module.css";
import logoPlatform from "../../../Assets/img/logo.png";
import { Link as RouterLink } from "react-router-dom";

/**
 * DesktopHeader component for the Trendemy platform.
 * This component provides a responsive header for desktop devices with a logo,
 * navigation menu, and submenu items.
 * 
 * @component
 * @returns {JSX.Element} The rendered DesktopHeader component.
 */
export default function DesktopHeader() {
    /**
     * State to determine if the header has been scrolled past the 'platform' module.
     * 
     * @constant
     * @type {boolean}
     * @default {false}
     */
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      /**
       * Handles the scroll event to determine if the header should change its style.
       * This function calculates whether the user has scrolled past the 'platform' module.
       * It updates the 'isScrolled' state to trigger the change in the header style.
       * 
       * @function handleScroll
       * @returns {void}
       * 
       * @example
       * Usage: This function is automatically called when the user scrolls the window.
       * It updates the header style based on the scroll position.
       * Example: When scrolling down, if the bottom of the viewport surpasses
       * the bottom of the 'platform' module, the header background color changes.
       */
      const handleScroll = () => {
        const secondModule = document.getElementById('platform');
        if (secondModule) {
            const secondModuleTop = secondModule.getBoundingClientRect().top;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= secondModuleTop + secondModule.offsetHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
    };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    /**
     * Redirect to the Platform page.
     * This function is called when the logo is clicked.
     * @function handleBackPlatformClick
     * @return {void}
     * @example
     * <img src={logoPlatform} alt="Logo Trendemy" onClick={handleBackPlatformClick}/>
     */
    const handleBackPlatformClick = () => {
      window.location.href = "/";
    }

    /**
     * Redirect to the registration page.
     * This function is called when the registration button is clicked.
     * @function handleRegistrationClick
     * @returns {void}
     * @example
     * <button onClick={handleRegistrationClick}>Đăng ký</button>
     */
    const handleRegistrationClick = () => {
      window.location.href = "/register";
    };

  return (
    <header className={`${styles.desktopHeaderPlatform} ${isScrolled ? styles.desktopHeaderPlatformScrolled : ''}`}>
      {/* Logo section */}
      <div className={styles.desktopHeaderPlatformLogo}>
         <img src={logoPlatform} alt="Logo Trendemy" onClick={handleBackPlatformClick}/>
      </div>
         {/* Navigation section */}
         <nav className={styles.desktopHeaderPlatformNav}>
           <ul className={styles.desktopHeaderPlatformMenu}>
             <li className={styles.desktopHeaderPlatformMenuItem}>
              <RouterLink to="/" className={styles.desktopHeaderPlatformActive} >
                  Về chúng tôi
              </RouterLink>
            </li>
            <li className={styles.desktopHeaderPlatformMenuItem}>
                <RouterLink to="/Courses" >Khóa học</RouterLink>
            </li>
            <li className={styles.desktopHeaderPlatformMenuItem}>
                <RouterLink to="/Lecturer" >Giảng viên</RouterLink>
            </li>
            {/* Registration button */}
            <li className={styles.desktopHeaderPlatformMenuItem}>
                <button className={styles.desktopHeaderPlatformBtnRegister} onClick={handleRegistrationClick}>Đăng ký</button>
            </li>
           </ul>
         </nav>
    </header>
  );
};

