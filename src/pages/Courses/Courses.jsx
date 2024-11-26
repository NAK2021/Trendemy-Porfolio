import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "../../Courses/components/Header/Header";
import HeroSection from "../../Courses/components/HeroSection/HeroSection";
import WhyShouldLearn from "../../Courses/components/WhyShouldLearn/WhyShouldLearn";
import Course0bjectives from "../../Courses/components/Course0bjectives/Course0bjectives";
import LecturerCourses from '../../Courses/components/LecturerCourses/LectuerCourses';
import TakeCourse from "../../Courses/components/TakeCourse/TakeCourse";
import StudentProducts from "../../Courses/components/StudentProducts/StudentProducts";
import ContactCourse from "../../Courses/components/ContactCourse/ContactCourse";
import Footer from "../../Courses/components/Footer/Footer";
import LearningPath from "../../Courses/components/LearningPath/LearningPath";
import CourseCard from "../../Courses/components/CourseCard/CourseCard";
import BenefitsOfJoining from "../../Courses/components/BenefitsOfJoining/BenefitsOfJoining";
import FeedbackStudent from "../../Courses/components/FeedbackStudent/FeedbackStudent";
import styles from "./Courses.module.css";

export default function Courses() {

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
      const aboutSection = document.getElementById('should-learn');
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
    <div className={styles.coursesContainerModules}>
      {/* Render Header component */}
      <Header activeSection={activeSection}/>
      {/* Render various sections of the platform */}
      <HeroSection/>
      <WhyShouldLearn id="should-learn"/>
      <Course0bjectives/>
      <LearningPath/>
      <BenefitsOfJoining/>
      <TakeCourse />    
      <LecturerCourses/>
      <StudentProducts />
      <FeedbackStudent/>
      <CourseCard/>
      <ContactCourse />
      <Footer />
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
