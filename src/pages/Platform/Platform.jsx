import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "../../Platform/components/Header/Header";
import TrendemyEduSection from "../../Platform/components/TrendemyEduSection/TrendemyEduSection";
import TrendemyVisionSection from "../../Platform/components/TrendemyVisionSection/TrendemyVisionSection";
import HeroSection from "../../Platform/components/HeroSection/HeroSection";
import Mission from "../../Platform/components/Mission/Mission";
import ChoiceReason from "../../Platform/components/ChoiceReason/ChoiceReason";
import FAQ from "../../Platform/components/FAQ/FAQ";
import CoursesSection from "../../Platform/components/CoursesSection/CoursesSection";
import FeedbackSection from "../../Platform/components/FeedbackSection/FeedbackSection";
import Statistics from "../../Platform/components/Statistics/Statistics";
import ContactPlatform from "../../Platform/components/ContactPlatform/ContactPlatform";
import Footer from "../../Platform/components/Footer/Footer";
import styles from './Platform.module.css'; 

export default function Platform() {

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to control the visibility of the "Scroll to Top" arrow
  const [showTopArrow, setShowTopArrow] = useState(false);
  // State to check if the page is scrolled to the top
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const aboutSection = document.getElementById('platform');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        setShowTopArrow(top < window.innerHeight);
        setIsScrolledToTop(window.scrollY === 0); 
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 50,
      smooth: true,
    });
  };
  

  return (
    <div className={styles.PlatformPage}>
      {/* Render Header component */}
      <Header activeSection={activeSection}/>
      {/* Render various sections of the platform */}
      <HeroSection />
      <TrendemyEduSection id="platform"/>
      <TrendemyVisionSection />
      <Mission />
      <CoursesSection />
      <ChoiceReason />
      <Statistics />
      <FeedbackSection />
      <FAQ />
      <ContactPlatform />
      <Footer/>
       {/* Scroll to Top arrow */}
      <div
        className={`${styles.topArrow} ${isScrolledToTop ? styles.hidden : styles.visible}`}
        onClick={scrollToTop}
      >
        <span className={styles.arrowContent}>
        <i className={`fas fa-chevron-up ${styles.arrowIcon}`}></i>
          Top
        </span>
      </div>
    </div>
  );
}