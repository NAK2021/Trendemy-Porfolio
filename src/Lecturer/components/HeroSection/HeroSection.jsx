import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import 'animate.css'; // Import animate.css for animations
import styles from "../HeroSection/HeroSection.module.css"; 
import heroImage from "../../Assets/img/Hero section giang vien.png";

const HeroSection = () => {
    // Hook to track when the section is in view
    const { ref: heroSectionRef, inView: heroSectionInView } = useInView({
      triggerOnce: true, // Trigger animation only once when the section comes into view
      threshold: 0.5,
    });

    // Hook to track when the statistics container is in view
    const { ref: statisticsRef, inView: statisticsInView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    return (
      <section 
        ref={heroSectionRef} 
        className={`${styles.heroSectionContainer} animate__animated ${
          heroSectionInView ? 'animate__fadeInUp' : ''
        }`}
      >
        <div className={styles.heroSectionContent}>
          <div className={styles.heroSectionTextContent}>
            <h3 className={styles.heroSectionTitle}>Giảng viên</h3>
            <h2 className={styles.heroSectionName}>Lê Hoàng Việt Tuấn</h2>
            <p className={styles.heroSectionDescription}>
              Chuyên gia phân tích dữ liệu với kinh nghiệm dày dặn, mang đến bài học thực tiễn và sâu sắc giúp bạn vững vàng trong lĩnh vực này.
            </p>
            <button className={`${styles.heroSectionButton} animate__animated ${heroSectionInView ? 'animate__fadeInUp' : ''}`}>
              Tham gia ngay
            </button>

            {/* Statistics Section */}
            <div 
              ref={statisticsRef} 
              className={`${styles.heroSectionStatisticsContainer} animate__animated ${
                statisticsInView ? 'animate__fadeInUp' : ''
              }`}
            >
              <div className={styles.heroSectionStatisticsContent}>
                <h3 className={styles.heroSectionStatisticsCount}>
                  {statisticsInView && (
                    <CountUp start={0} end={10} duration={2} delay={0}>
                      {({ countUpRef }) => <span ref={countUpRef}></span>}
                    </CountUp>
                  )}
                  +
                </h3>
                <p>Khóa học</p>
              </div>
              <div className={styles.heroSectionStatisticsContent}>
                <h3 className={styles.heroSectionStatisticsCount}>
                  {statisticsInView && (
                    <CountUp start={0} end={100} duration={2} delay={0}>
                      {({ countUpRef }) => <span ref={countUpRef}></span>}
                    </CountUp>
                  )}
                  +
                </h3>
                <p>Học viên</p>
              </div>
              <div className={styles.heroSectionStatisticsContent}>
                <h3 className={styles.heroSectionStatisticsCount}>
                  {statisticsInView && (
                    <CountUp start={0} end={5000} duration={2} delay={0}>
                      {({ countUpRef }) => <span ref={countUpRef}></span>}
                    </CountUp>
                  )}
                  +
                </h3>
                <p>Đánh giá</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`${styles.heroSectionImageContainer} animate__animated ${
              heroSectionInView ? 'animate__fadeInUp' : ''
            }`}
          >
            <img src={heroImage} alt="Giảng viên" className={styles.heroSectionImage} />
          </div>
        </div>
      </section>
    );
  };
  
export default HeroSection;
