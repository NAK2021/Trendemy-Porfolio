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
    <footer className={styles.platformFooter}>
      {/* Logo and description */}
    <div className={styles.platformContainerLogoFooter}>
        <img src={LogoFooter} alt="logo" className={styles.platformImgLogo}/>
      <p className={styles.platformContentLogo}>Digital experience is always embedded in a physical experience.</p>
    </div>

    {/* Services list */}
    <div className={styles.platformContainerContentFooter}>
      <h3 className={styles.platformTitleFooter}>Services</h3>
      <ul className={styles.platformContainerContentTitleFooter}>
        <li className={styles.platformContentTitleFooter}>Web Hosting</li>
        <li className={styles.platformContentTitleFooter}>Domains</li>
        <li className={styles.platformContentTitleFooter}>Premium Hosting</li>
        <li className={styles.platformContentTitleFooter}>Private Server</li>
        <li className={styles.platformContentTitleFooter}>E-Mail Hosting</li>
      </ul>
    </div>

     {/* Social media links */}
    <div className={styles.platformContainerContentFooter}>
      <h3 className={styles.platformTitleFooter}>Follows Us</h3>
      <ul className={styles.platformContainerContentTitleFooter}>
        <li className={styles.platformContentTitleFooter}>Facebook</li>
        <li className={styles.platformContentTitleFooter}>Twitter</li>
        <li className={styles.platformContentTitleFooter}>Instagram</li>
        <li className={styles.platformContentTitleFooter}>Linkedin</li>
      </ul>
    </div>

    {/* Contact information */}
    <div className={styles.platformContainerContentFooter}>
      <h3 className={styles.platformTitleFooter}>Contact Us</h3>
      <p className={styles.platformContentTitleFooter}>Emailaddress@Mail.com</p>
    </div>
  </footer>
  );
}
