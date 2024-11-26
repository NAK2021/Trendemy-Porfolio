import React from 'react'
import styles from "./Footer.module.css";
import LogoFooter from "../../Assets/img/logo.png";

/**
 * Footer component - Displays footer information including logo, services, social media links, and contact information.
 * 
 * This component includes sections for the logo and description, a list of services, social media links, and contact information.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * );
 * 
 * @returns {JSX.Element} The Footer component.
 */
export default function Footer() {
  return (
    <footer className={styles.coursesFooter}>
      {/* Logo and description */}
    <div className={styles.coursesContainerLogoFooter}>
        <img src={LogoFooter} alt="logo" className={styles.coursesImgLogo}/>
      <p className={styles.coursesContentLogo}>Digital experience is always embedded in a physical experience.</p>
    </div>

    {/* Services list */}
    <div className={styles.coursesContainerContentFooter}>
      <h3 className={styles.coursesTitleFooter}>Services</h3>
      <ul className={styles.coursesContainerContentTitleFooter}>
        <li className={styles.coursesContentTitleFooter}>Web Hosting</li>
        <li className={styles.coursesContentTitleFooter}>Domains</li>
        <li className={styles.coursesContentTitleFooter}>Premium Hosting</li>
        <li className={styles.coursesContentTitleFooter}>Private Server</li>
      </ul>
    </div>

     {/* Social media links */}
    <div className={styles.coursesContainerContentFooter}>
      <h3 className={styles.coursesTitleFooter}>Follows Us</h3>
      <ul className={styles.coursesContainerContentTitleFooter}>
        <li className={styles.coursesContentTitleFooter}>Facebook</li>
        <li className={styles.coursesContentTitleFooter}>Twitter</li>
        <li className={styles.coursesContentTitleFooter}>Instagram</li>
        <li className={styles.coursesContentTitleFooter}>Linkedin</li>
      </ul>
    </div>

    {/* Contact information */}
    <div className={styles.coursesContainerContentFooter}>
      <h3 className={styles.coursesTitleFooter}>Contact Us</h3>
      <p className={styles.coursesContentTitleFooter}>emailaddress@gmail.com</p>
    </div>
  </footer>
  );
}
