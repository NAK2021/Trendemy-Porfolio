import React from "react";
import { SVGProps } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import styles from "./HeroSection.module.css";
import ImgCourse from "../../Assets/img/imageHeroSection.png";

/**
 * HeroSection component - Displays the hero section of a course landing page with animated elements.
 * 
 * This component uses the `react-intersection-observer` hook to trigger animations when elements come into view.
 * It includes a title, description, icons with ratings, students, and lessons, and a button to join the course.
 * 
 * @component
 * @example
 * return (
 *   <HeroSection />
 * );
 * 
 *  @returns {JSX.Element} The HeroSection component.
 */
export default function HeroSection() {
     /**
     * Function to handle button click, redirects to a Google Form.
     * 
     * This function sets the `window.location.href` to the URL of the Google Form for user registration.
     * 
     * @function
     */
     const handleGoogleFormClick = () => {
          window.location.href = "https://bit.ly/D4A106";
     }
     
     /**
     * Hook to track if the hero section is in view and apply animation.
     * 
     * @type {Object}
     * @property {function} ref - Ref callback to attach to the hero section.
     * @property {boolean} inView - Boolean indicating if the hero section is in view.
     */
     const {ref: TitleHeroSectionCoursesRef, inView: TitleHeroSectionCoursesInView} = useInView({ triggerOnce: true });
     const { ref: imgHeroSectionCoursesRef, inView: imgHeroSectionCoursesInView } = useInView({ triggerOnce: true });
    
    return (
        <div className={styles.heroSectionCoursesContainer}>
          {/* Title and description with animation */}
          <div ref={TitleHeroSectionCoursesRef}
               className={`animate__animated ${TitleHeroSectionCoursesInView ? 'animate__fadeInUp' : ''} ${styles.animationContentHeroSectionCourses}`}>
            <h1 className={styles.heroSectionCoursesTitleOne}>Khóa học</h1>
            <h1 className={styles.heroSectionCoursesTitleSecond}>Các nguyên tắc cơ bản về phân tích dữ liệu</h1>
            <p className={styles.heroSectionCoursesText}>
               Khóa học giúp bạn hiểu và áp dụng các nguyên tắc cơ bản về phân tích dữ liệu.
               Bạn sẽ học cách xử lý và trình bày dữ liệu một cách hiệu quả.
            </p>
            {/* Button to join */}
            <div className={styles.heroSectionCoursesContainerBtnRegister}>
                 <button className={styles.heroSectionCoursesBtnRegister}>
                    <div onClick={handleGoogleFormClick}>Tham gia ngay</div>
                 </button>
            </div>
            </div>
             {/* Image with animation */}
          <div ref={imgHeroSectionCoursesRef}
                 className={`animate__animated ${imgHeroSectionCoursesInView ? 'animate__fadeInUp' : ''} ${styles.animationImgHeroSectionCourses}`}>
            <div className={styles.heroSectionCoursesContainerImage}>
                 <img src={ImgCourse} alt="Image Course"/>
            </div>
          </div>
        </div>
    );
}
