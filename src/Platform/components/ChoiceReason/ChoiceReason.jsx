import React from "react";
import { useInView } from 'react-intersection-observer'; // Import hook to trigger animations on scroll
import 'animate.css'; // Import animate.css for animations
import styles from "../ChoiceReason/ChoiceReason.module.css";
import ChoiceReasonImage from '../../Assets/img/choicereason.png';

/**
 * ChoiceReason component highlights the reasons for choosing the Trendemy platform.
 * It displays a combination of textual and visual elements to emphasize the benefits.
 * 
 * @component
 * @returns {JSX.Element} The rendered ChoiceReason component.
 */
const ChoiceReason = () => {
  /**
   * Hook to track if the components are in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the elements.
   * @property {boolean} inView - Boolean indicating if the element is in view.
   */
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.choiceReasonContainer} id="why-choose">
      {/* Text Section with fade-in-up animation */}
      <div
        ref={textRef}
        className={`${styles.textContainer} animate__animated ${textInView ? 'animate__fadeInUp' : ''}`}
      >
        <h5>Tại sao chọn chúng tôi</h5>
        <h4 className={styles.choiceReasonHighlight}>
          Tại sao bạn chọn nền tảng học trực tuyến của TRENDEMY?
        </h4>
        <p>Chọn Trendemy, bạn chọn trải nghiệm học tập chất lượng, linh hoạt và toàn diện.</p>
        {/* Grid of Benefits */}
        <div className={styles.choiceReasonGrid}>
          <div className={styles.choiceReasonGridItem}>
            <i className={`ri-checkbox-circle-fill ${styles.choiceReasonIcon}`}></i>
            Tương tác trực tiếp và nhận được sự hỗ trợ tận tình từ giảng viên
          </div>
          <div className={styles.choiceReasonGridItem}>
            <i className={`ri-checkbox-circle-fill ${styles.choiceReasonIcon}`}></i>
            Video & âm thanh chất lượng cao cho tất cả các khóa học
          </div>
          <div className={styles.choiceReasonGridItem}>
            <i className={`ri-checkbox-circle-fill ${styles.choiceReasonIcon}`}></i>
            Bạn hoàn thành khóa học và nhận chứng chỉ
          </div>
        </div>
      </div>
      {/* Image Section with fade-in-up animation */}
      <div
        ref={imageRef}
        className={`${styles.imageContainer} animate__animated ${imageInView ? 'animate__fadeInUp' : ''}`}
      >
        <img src={ChoiceReasonImage} alt="Learning" />
      </div>
    </div>
  );
}

export default ChoiceReason;
