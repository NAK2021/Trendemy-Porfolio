import React, { useState, useEffect } from "react";
import styles from "./MobileHeader.module.css";
import logoPlatform from "../../../Assets/img/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

/**
 * MobileHeader component for the Trendemy platform.
 * This component provides a responsive header for mobile devices with a logo,
 * navigation menu, and submenu items.
 * 
 * @component
 * @returns {JSX.Element} The rendered MobileHeader component.
 */
export default function MobileHeader() {
    /**
     * State for toggling menu open/close.
     * 
     * @constant
     * @type {boolean}
     * @default {false}
     */
    const [menuOpen, setMenuOpen] = useState(false);

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
     * Toggle the main menu open/close state.
     * @function handleMenuClick
     * @returns {void}
     */
    const handleMenuClick = () => setMenuOpen(!menuOpen);

    /**
     * Redirect to the Platform page.
     * This function is called when the logo is clicked.
     * @function handleBackPlatformClick
     * @returns {void}
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
     * <button onClick={handleRegistrationClick}>Register</button>
     */
    const handleRegistrationClick = () => {
        window.location.href = "/register";
    };

    return (
        <header className={`${styles.mobileHeaderPlatform} ${isScrolled ? styles.mobileHeaderPlatformScrolled : ''}`}>
            {/* Logo section */}
            <div className={styles.mobileHeaderPlatformLogo}>
                <img src={logoPlatform} alt="Logo Trendemy" onClick={handleBackPlatformClick}/>
            </div>
            {/* Navigation section */}
            <nav className={styles.mobileHeaderPlatformNav}>
                {/* Hamburger menu icon */}
                <div className={styles.mobileHeaderPlatformMenu} onClick={handleMenuClick}>
                    <GiHamburgerMenu className={styles.mobileHeaderPlatformIconMenu} />
                </div>
                {/* Menu container, toggles open/close */}
                <div className={`${styles.mobileHeaderPlatformMenuContainer} ${menuOpen ? styles.open : ""}`}>
                    {/* Close menu icon */}
                    <div className={styles.mobileHeaderPlatformIconMenuClose} onClick={handleMenuClick}>
                        <IoMdClose />
                    </div>
                    <ul>
                        {/*  menu item */}
                        <li><RouterLink to="/" className={styles.mobileHeaderPlatformMenuItem}>Về chúng tôi</RouterLink></li>
                        <li><RouterLink to="/Courses">Khóa học</RouterLink></li>
                        <li><RouterLink to="/Lecturer">Giảng viên</RouterLink></li>
                        {/* Registration button */}
                        <li><button className={styles.mobileHeaderPlatformBtnRegister} onClick={handleRegistrationClick}>Đăng ký</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
