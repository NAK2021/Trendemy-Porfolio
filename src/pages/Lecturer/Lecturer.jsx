import React, { useState, useEffect } from "react";
import Header from "../../Lecturer/components/Header/Header";
import HeroSection from "../../Lecturer/components/HeroSection/HeroSection";
import TeacherProfile from "../../Lecturer/components/TeacherProfile/TeacherProfile";
import TeachingMajor from "../../Lecturer/components/TeachingMajor/TeachingMajor";
import FeedbackSection from "../../Lecturer/components/FeedbackSection/FeedbackSection";
import LecturerTrendemy from "../../Lecturer/components/LecturerTrendemy/LecturerTrendemy"
import ContactLecturer from "../../Lecturer/components/ContactLecturer/ContactLecturer";
import Footer from "../../Lecturer/components/Footer/Footer";
import CurriculumVitae from "../../Lecturer/components/CurriculumVitae/CurriculumVitae";
import CourseCard from "../../Lecturer/components/CourseCard/CourseCard";
import { animateScroll as scroll } from "react-scroll"; // Import scroll from react-scroll
import styles from "./Lecturer.module.css";

export default function Lectures() {
  // State to control the visibility of the "Scroll to Top" arrow
  const [showTopArrow, setShowTopArrow] = useState(false);
  // State to check if the page is scrolled to the top
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect to manage scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Display the arrow when user scrolls below the viewport height
      setShowTopArrow(window.scrollY > window.innerHeight);
      setIsScrolledToTop(window.scrollY === 0); // Check if user is at the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <div className={styles.lecturerContainerModules}>
      <Header />
      <HeroSection />
      <TeacherProfile />
      <CurriculumVitae />
      <TeachingMajor />
      <CourseCard />
      <FeedbackSection />
      <LecturerTrendemy />
      <ContactLecturer />
      <Footer />

      {/* Scroll to Top arrow */}
      <div
        className={`${styles.topArrow} ${isScrolledToTop ? styles.hidden : styles.visible}`}
        onClick={scrollToTop}
      >
        <span className={styles.arrowContent}>
          <i className={`fas fa-chevron-up ${styles.arrowIcon}`}></i> Top
        </span>
      </div>
    </div>
  );
}
