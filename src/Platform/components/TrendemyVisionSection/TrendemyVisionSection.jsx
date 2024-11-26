import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import hook to trigger animations on scroll
import 'animate.css'; // Import animate.css for animations
import styles from './TrendemyVisionSection.module.css'; // Import custom CSS module for component styling
import VisionImage from '../../Assets/img/TrendemyVisionSection.png'; // Import the vision image to be displayed

/**
 * VisionSection component displays the vision section of the Trendemy platform,
 * highlighting the platform's goals and aspirations.
 * 
 * @component
 * @returns {JSX.Element} The rendered VisionSection component.
 */
const VisionSection = () => {
  /**
   * Hook to track if the components are in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the elements.
   * @property {boolean} inView - Boolean indicating if the element is in view.
   */
  const { ref: textContentRef, inView: textContentInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.trendemyVisionSectioncontainer} id='vision'>
      {/* Main container for the vision section */}
      <div className={styles.trendemyVisionSectioncontent}>
        
        {/* Text content section with fade-in animation */}
        <div
          ref={textContentRef}
          className={`${styles.trendemyVisionSectiontextContent} animate__animated ${textContentInView ? 'animate__fadeInUp' : ''}`}
        >
          {/* Vision heading */}
          <h1>TẦM NHÌN</h1>
          {/* Vision description */}
          <p>
            TRENDEMY mong muốn trở thành nền tảng học trực tuyến hàng đầu, mang 
            đến trải nghiệm học tập cá nhân hóa và linh hoạt. Chúng tôi cam kết đồng 
            hành, mở rộng kiến thức, nâng cao kỹ năng và giúp bạn thành công trong 
            cuộc sống.
          </p>
          {/* Vision subheading */}
          <h2>TRENDEMY - Học mọi nơi, vươn xa không giới hạn.</h2>
        </div>
        
        {/* Image content section with zoom-in animation */}
        <div
          ref={imageRef}
          className={`${styles.trendemyVisionSectionimageContainer} animate__animated ${imageInView ? 'animate__zoomIn' : ''}`}
        >
          {/* Vision image */}
          <img src={VisionImage} alt="Student" className={styles.trendemyVisionSectionimage} />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
