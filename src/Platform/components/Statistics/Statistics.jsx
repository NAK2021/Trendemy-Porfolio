import React from "react";
import { useInView } from "react-intersection-observer"; // Import the useInView hook from react-intersection-observer for handling view events
import CountUp from "react-countup"; // Import CountUp for the count-up animation
import "animate.css"; // Import animate.css for CSS animations
import styles from "./Statistics.module.css"; // Import the CSS module for styling
import ImgStudent from "../../Assets/img/Student.png"; 
import ImgLecturers from "../../Assets/img/Lecturers.png"; 
import ImgCourse from "../../Assets/img/Course.png"; 

/**
 * Statistics component for the Trendemy platform.
 * This component displays statistical data with count-up animations and image icons,
 * including the number of students, lecturers, and courses.
 * 
 * @component
 * @returns {JSX.Element} The rendered Statistics component.
 */
export default function Statistics() {
  /**
   * Hook to track if the main statistics container is in view and apply animations.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the statistics container.
   * @property {boolean} inView - Boolean indicating if the statistics container is in view.
   */
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the event only once
    threshold: 0.8, // Percentage of the element that needs to be visible to trigger the event
  });

  /**
   * Hook to track if the statistics contents are in view and apply animations.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the statistics contents container.
   * @property {boolean} inView - Boolean indicating if the statistics contents container is in view.
   */
  const { ref: StatisticsContentsRef, inView: StatisticsContentsInView } = useInView({
    triggerOnce: true, // Trigger the event only once
  });

  return (
    // Main container for the statistics section
    <section ref={ref} className={styles.statisticsContainer} id="statistics">
      <div
        ref={StatisticsContentsRef} // Reference to the StatisticsContents container
        className={`${styles.statisticsContents} ${
          StatisticsContentsInView ? styles.animate__fadeInUp : "" // Apply fadeInUp animation if in view
        } animate__animated`} // Add animate__animated class for animations
      >
        {/* Students statistics block */}
        <div className={styles.statisticsContent}>
          <div className={styles.imgStatistics}>
            <img
              src={ImgStudent} // Image for Students statistics
              alt="Mission" 
              className={styles.imgStatisticsIcon}
            />
          </div>

          <div className={styles.cardStatistics}>
            {/* Main statistic value with count-up animation and zoom effect */}
            <h3 className={inView ? styles.countZoom : ""}> {/* Apply zoom effect if in view */}
              {inView && (
                <CountUp start={1} end={1000} duration={1} delay={0} separator="">
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className={styles.count}></span> // Span to display count
                  )}
                </CountUp>
              )}
              <span className={styles.plusSignStatistics}>+</span> {/* Plus sign for count */}
            </h3>
            <p>Học viên</p> {/* Text for Students */}
          </div>
        </div>

        {/* Teachers statistics block */}
        <div className={styles.statisticsContent}>
          <div className={styles.imgStatistics}>
            <img
              src={ImgLecturers} // Image for Lecturers statistics
              alt="Mission"
              className={styles.imgStatisticsIcon}
            />
          </div>

          <div className={styles.cardStatistics}>
            {/* Main statistic value with count-up animation and zoom effect */}
            <h3 className={inView ? styles.countZoom : ""}> {/* Apply zoom effect if in view */}
              {inView && (
                <CountUp start={1} end={10} duration={3} delay={0} separator="">
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className={styles.count}></span> // Span to display count
                  )}
                </CountUp>
              )}
              <span className={styles.plusSignStatistics}>+</span> {/* Plus sign for count */}
            </h3>
            <p>Giảng viên</p> {/* Text for Lecturers */}
          </div>
        </div>

        {/* Courses statistics block */}
        <div className={styles.statisticsContent}>
          <div className={styles.imgStatistics}>
            <img
              src={ImgCourse} // Image for Courses statistics
              alt="Mission"
              className={styles.imgStatisticsIcon}
            />
          </div>

          <div className={styles.cardStatistics}>
            {/* Main statistic value with count-up animation and zoom effect */}
            <h3 className={inView ? styles.countZoom : ""}> {/* Apply zoom effect if in view */}
              {inView && (
                <CountUp start={1} end={100} duration={1.5} delay={0} separator="">
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className={styles.count}></span> // Span to display count
                  )}
                </CountUp>
              )}
              <span className={styles.plusSignStatistics}>+</span> {/* Plus sign for count */}
            </h3>
            <p>Khoá học</p> {/* Text for Courses */}
          </div>
        </div>
      </div>
    </section>
  );
}
