import React from "react";
import { useInView } from 'react-intersection-observer'; // Import hook to trigger animations on scroll
import 'animate.css'; // Import animate.css for animations
import styles from "../TrendemyEduSection/TrendemyEduSection.module.css"; // Import CSS module for styling
import TrendemyImage from "../../Assets/img/TrendemyEducationSection.png"; // Import the Trendemy education section image

/**
 * TrendemyEduSection component displays the Trendemy platform's educational section
 * with a description, an image, and a call-to-action button.
 * 
 * @component
 * @returns {JSX.Element} The rendered TrendemyEduSection component.
 */
const TrendemyEduSection = () => {
  /**
   * Handles the button click event to navigate the user to the "/join" page.
   * 
   * @function handleButtonClick
   */
  const handleButtonClick = () => {
    window.location.href = "/join"; // Redirects to the "/join" page when the button is clicked
  };

  /**
   * Hook to track if the components are in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the elements.
   * @property {boolean} inView - Boolean indicating if the element is in view.
   */
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textContentRef, inView: textContentInView } = useInView({ triggerOnce: true });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.trendemyEduSectioncontainer} id="platform">
      {/* Main container with fade-in animation */}
      <div
        ref={containerRef}
        className={`${styles.trendemyEduSectioncontent} animate__animated ${containerInView ? 'animate__fadeInUp' : ''}`}
      >
        {/* Image container for the educational section */}
        <div
          ref={imageRef}
          className={`${styles.trendemyEduSectionimageContainer} animate__animated ${imageInView ? 'animate__zoomIn' : ''}`}
        >
          <div className={styles.trendemyEduSectioncircle}>
            {/* Trendemy education section image */}
            <img src={TrendemyImage} alt="Trendemy Education" className={styles.trendemyEduSectionimage} />
          </div>
        </div>
        {/* Text content section */}
        <div
          ref={textContentRef}
          className={`${styles.trendemyEduSectiontextContent} animate__animated ${textContentInView ? 'animate__fadeInUp' : ''}`}
        >
          <h1>
            Nền tảng <br /><span className={styles.trendemyEduSectionhighlight}>TRENDEMY</span>
          </h1>
          <p>
            TRENDEMY là nền tảng học trực tuyến kết hợp học qua video và tương 
            tác với giảng viên. Người học có thể truy cập bài giảng mọi lúc, mọi nơi, 
            tham gia khóa học, thảo luận nhóm và nhận phản hồi trực tiếp. Nền tảng 
            linh hoạt, tiết kiệm chi phí, hỗ trợ tự học với giảng viên giàu kinh nghiệm 
            luôn sẵn sàng giúp đỡ.
          </p>
          {/* Subtitle */}
          <h5 className={styles.trendemyEduSectionSubtext}>TRENDEMY - Học Mọi Lúc, Phát Triển Mọi Nơi.</h5>
          {/* Call-to-action button */}
          <button
            ref={buttonRef}
            className={`${styles.trendemyEduSectionbutton} animate__animated ${buttonInView ? 'animate__fadeInUp' : ''}`}
            onClick={handleButtonClick}
          >
            Tham gia ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendemyEduSection;
