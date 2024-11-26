import React from "react";
import "animate.css"; // Import animate.css for CSS animations
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer
import styles from "./BenefitsOfJoining.module.css"; // Import CSS module for styling
import imageBenefitsOfJoining from "../../Assets/img/BenefitsOfJoining.png"; // Import background image
import Tick from "../../Assets/img/Tick.png"; // Import checkmark icon

/**
 * BenefitsOfJoining component for highlighting the advantages of joining the course.
 * This component renders a section with a background image, title, description, and
 * a list of benefits, with animations applied when elements come into view.
 * 
 * @component
 * @returns {JSX.Element} The rendered BenefitsOfJoining component.
 */
export default function BenefitsOfJoining() {
  /**
   * Hook to track if the background image section is in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the background image container.
   * @property {boolean} inView - Boolean indicating if the background image container is in view.
   */
  const {
    ref: backgroundBenefitsOfJoiningRef,
    inView: backgroundBenefitsOfJoiningInView,
  } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  /**
   * Hook to track if the title section is in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the title container.
   * @property {boolean} inView - Boolean indicating if the title container is in view.
   */
  const {
    ref: BenefitsOfJoiningTitleRef,
    inView: BenefitsOfJoiningTitleInView,
  } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  return (
    // Main section for Benefits Of Joining
    <section className={styles.benefitsOfJoining}>
      {/* Background image section */}
      <div
        ref={backgroundBenefitsOfJoiningRef} // Reference for background image container
        className={`${styles.backgroundBenefitsOfJoining} animate__animated ${
          backgroundBenefitsOfJoiningInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <img
          src={imageBenefitsOfJoining} // Background image for the section
          alt="BenefitsOfJoining"
          className={styles.imgBenefitsOfJoining}
        />
      </div>

      {/* Title and content section */}
      <div
        ref={BenefitsOfJoiningTitleRef} // Reference for title container
        className={`${styles.benefitsOfJoiningTitle} animate__animated ${
          BenefitsOfJoiningTitleInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <h1>Lợi ích khi tham gia</h1>
        <h4>Lợi ích khi chọn khoá học phân tích dữ liệu tại TRENDEMY.</h4>

        <div className={styles.underlineBenefitsOfJoining}></div>

        <p>
          Chọn khóa học "Các nguyên tắc cơ bản về phân tích dữ liệu" là bạn chọn
          trải nghiệm học tập chất lượng và linh hoạt để nắm vững những kiến
          thức cơ bản về phân tích dữ liệu.
        </p>

        {/* List of benefits */}
        <div className={styles.benefitsOfJoiningContents}>
          <div className={styles.stepBenefitsOfJoining}>
            <div className={styles.imgTickBenefitsOfJoining}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.textBenefitsOfJoining}>
              Nắm vững kiến thức cơ bản về phân tích dữ liệu
            </div>
          </div>
          <div className={styles.stepBenefitsOfJoining}>
            <div className={styles.imgTickBenefitsOfJoining}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.textBenefitsOfJoining}>
              Học tập linh hoạt và dễ tiếp cận
            </div>
          </div>
          <div className={styles.stepBenefitsOfJoining}>
            <div className={styles.imgTickBenefitsOfJoining}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.textBenefitsOfJoining}>
              Ứng dụng ngay vào thực tiễn công việc
            </div>
          </div>
          <div className={styles.stepBenefitsOfJoining}>
            <div className={styles.imgTickBenefitsOfJoining}>
              <img src={Tick} alt="Tick" /> {/* Checkmark icon */}
            </div>
            <div className={styles.textBenefitsOfJoining}>
              Chứng nhận hoàn thành khóa học
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
