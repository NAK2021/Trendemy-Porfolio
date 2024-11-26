import React from "react";
import "animate.css"; // Import animate.css for CSS animations
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer to handle intersection events
import styles from "./TakeCourse.module.css"; // Import CSS module for styling
import Img1 from "../../Assets/img/Student1.png"; // Import image for student card
import Img2 from "../../Assets/img/UnrelatedJob.png"; // Import image for beginner card
import Img3 from "../../Assets/img/Work.png"; // Import image for working professional card
import BackgroundTakeCourse from "../../Assets/img/TakeCourse.png";

/**
 * TakeCourse component for displaying information on who should take the course.
 * This component includes a section with animated cards detailing the target audience
 * and a background image, both of which animate when they come into view.
 * 
 * @component
 * @returns {JSX.Element} The rendered TakeCourse component.
 */
export default function TakeCourse() {
  /**
   * Intersection observer hook for the background image animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the background image container.
   * @property {boolean} inView - Boolean indicating if the background image container is in view.
   */
  const { ref: BackgroundTakeCourseRef, inView: BackgroundTakeCourseInView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
  });

  /**
   * Intersection observer hook for the card section animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the card section container.
   * @property {boolean} inView - Boolean indicating if the card section container is in view.
   */
  const { ref: CardTakeCourseRef, inView: cardInView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
  });

  return (
    // Main section for TakeCourse
    <section className={styles.containerTakeCourse} id="target-audience">
      {/* Card section with animation */}
      <div
        ref={CardTakeCourseRef}
        className={`${styles.cardTakeCourse} animate__animated ${
          cardInView ? "animate__fadeInUp" : ""
        }`}
      >
        <h1 className={styles.titleTakeCourse}>
          Ai nên tham gia khoá học này ! {/* Title text */}
        </h1>

        {/* Individual card for working professionals */}
        <div className={styles.containerBoxTakeCourse}>
          <div className={styles.iconTakeCourse}>
            <img src={Img3} alt="Người đi làm" />{" "}
            {/* Image for working professional card */}
          </div>
          <div className={styles.boxTakeCourse}>
            <h3>Người đi làm</h3>
            <p>
              Những người đã đi làm chuyên nghành kinh tế, công nghệ thông tin,
              marketing, developer mong muốn chuyển nghành khác.
            </p>
          </div>
        </div>

        {/* Individual card for students */}
        <div className={styles.containerBoxTakeCourse}>
          <div className={styles.iconTakeCourse}>
            <img src={Img1} alt="Sinh viên" /> {/* Image for student card */}
          </div>
          <div className={styles.boxTakeCourse}>
            <h3>Sinh viên</h3>
            <p>
              Sinh viên chuyên nghành kinh tế, công nghệ thông tin có định hướng
              hoặc mong muốn trở thành Data Analysis.
            </p>
          </div>
        </div>

        {/* Individual card for unrelated job */}
        <div className={styles.containerBoxTakeCourse}>
          <div className={styles.iconTakeCourse}>
            <img src={Img2} alt="Người trái ngành" />
          </div>
          <div className={styles.boxTakeCourse}>
            <h3>Người trái ngành</h3>
            <p>
              Những người chưa có kinh nghiệm hoặc có rất ít kinh nghiệm trong
              việc phân tích dữ liệu và muốn bắt đầu từ cơ bản.
            </p>
          </div>
        </div>
      </div>

      {/* Background image with animation */}
      <div
        ref={BackgroundTakeCourseRef}
        className={`${styles.backgroundTakeCourse} animate__animated ${
          BackgroundTakeCourseInView ? "animate__fadeInUp" : ""
        }`}
      >
        <img
          src={BackgroundTakeCourse}
          alt="BackgroundTakeCourse"
          className={styles.imgTakeCourse}
        />
      </div>
    </section>
  );
}
