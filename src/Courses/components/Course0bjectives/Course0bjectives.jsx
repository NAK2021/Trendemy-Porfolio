import React from "react";
import "animate.css"; // Import animate.css for CSS animations
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer
import styles from "./Course0bjectives.module.css"; // Import CSS module for styling
import CourseObjectives from "../../Assets/img/CourseObjectives.png"; // Import background image
import Tick from "../../Assets/img/Tick.png"; // Import checkmark icon

/**
 * CourseObjectives component for displaying course objectives with animations.
 * This component renders a section with a title, description, a list of objectives,
 * and a background image, with animations triggered when elements come into view.
 * 
 * @component
 * @returns {JSX.Element} The rendered CourseObjectives component.
 */
export default function Course0bjectives() {
  /**
   * Hook to track if the title section is in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the title container.
   * @property {boolean} inView - Boolean indicating if the title container is in view.
   */
  const { ref: CourseObjectivesTitleRef, inView: CourseObjectivesInView } =
    useInView({
      triggerOnce: true, // Trigger animation only once
    });

  /**
   * Hook to track if the background image section is in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the background image container.
   * @property {boolean} inView - Boolean indicating if the background image container is in view.
   */
  const {
    ref: BackgroundCourseObjectivesRef,
    inView: BackgroundCourseObjectivesInView,
  } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  return (
    // Main section for Course Objectives
    <section className={styles.courseObjectives}>
      {/* Title and description section */}
      <div
        ref={CourseObjectivesTitleRef} // Reference for title container
        className={`${styles.courseObjectivesTitle} animate__animated ${
          CourseObjectivesInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <h1>Mục tiêu khoá học</h1>
        <h4>
          Khoá học "Các nguyên tắc cơ bản về phân tích dữ liệu" nhằm giúp cho
          học viên.
        </h4>

        <div className={styles.underlineCourseObjectives}></div>

        {/* List of course objectives */}
        <div className={styles.courseObjectivesContents}>
          <div className={styles.step}>
            <div className={styles.imgTick}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.text}>
              Hiểu vai trò của phân tích dữ liệu trong quyết định
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.imgTick}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.text}>
              Biết cách thu thập, xử lý và trình bày dữ liệu
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.imgTick}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.text}>Tìm ra mẫu và xu hướng từ dữ liệu</div>
          </div>
          <div className={styles.step}>
            <div className={styles.imgTick}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.text}>
              Sử dụng công cụ để làm rõ và hỗ trợ quyết định
            </div>
          </div>
        </div>
      </div>

      {/* Background image section */}
      <div
        ref={BackgroundCourseObjectivesRef} // Reference for background image container
        className={`${styles.backgroundCourseObjectives} animate__animated ${
          BackgroundCourseObjectivesInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <img
          src={CourseObjectives} // Background image for the section
          alt="CourseObjectives"
          className={styles.imgCourseObjectives}
        />
      </div>
    </section>
  );
}
