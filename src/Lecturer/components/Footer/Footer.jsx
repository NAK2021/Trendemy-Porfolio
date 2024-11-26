import React from 'react'
import styles from "./Footer.module.css";
import LogoFooter from "../../Assets/img/logo.png";

/**
 * Footer component - Displays footer information for the website.
 * 
 * This component includes:
 * - A logo and description of the website.
 * - A list of services provided.
 * - Social media links for following the website.
 * - Contact information for reaching out to the website.
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
    <footer className={styles.lecturerFooter}>
      {/* Logo and description */}
    <div className={styles.lecturerContainerLogoFooter}>
        <img src={LogoFooter} alt="logo" className={styles.lecturerImgLogo}/>
      <p className={styles.lecturerContentLogo}>Digital experience is always embedded in a physical experience.</p>
    </div>

    {/* Services list */}
    <div className={styles.lecturerContainerContentFooter}>
      <h3 className={styles.lecturerTitleFooter}>Services</h3>
      <ul className={styles.lecturerContainerContentTitleFooter}>
        <li className={styles.lecturerContentTitleFooter}>Web Hosting</li>
        <li className={styles.lecturerContentTitleFooter}>Domains</li>
        <li className={styles.lecturerContentTitleFooter}>Premium Hosting</li>
        <li className={styles.lecturerContentTitleFooter}>Private Server</li>
      </ul>
    </div>

     {/* Social media links */}
    <div className={styles.lecturerContainerContentFooter}>
      <h3 className={styles.lecturerTitleFooter}>Follows Us</h3>
      <ul className={styles.lecturerContainerContentTitleFooter}>
        <li className={styles.lecturerContentTitleFooter}>Facebook</li>
        <li className={styles.lecturerContentTitleFooter}>Twitter</li>
        <li className={styles.lecturerContentTitleFooter}>Instagram</li>
        <li className={styles.lecturerContentTitleFooter}>Linkedin</li>
      </ul>
    </div>

    {/* Contact information */}
    <div className={styles.lecturerContainerContentFooter}>
      <h3 className={styles.lecturerTitleFooter}>Contact Us</h3>
      <p className={styles.lecturerContentTitleFooter}>emailaddress@gmail.com</p>
    </div>
  </footer>
  );
}
