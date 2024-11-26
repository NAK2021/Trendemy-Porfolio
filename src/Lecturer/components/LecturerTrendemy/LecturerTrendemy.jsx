import React from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import "animate.css"; // Import animate.css for animations
import styles from "./LecturerTrendemy.module.css"; // Import the CSS module for styling
import imgLecturer1 from "../../Assets/img/Lecturer1.png";
import imgLecturer2 from "../../Assets/img/Lecturer2.png";
import imgLecturer3 from "../../Assets/img/Lecturer3.png";
import imgStudent from "../../Assets/img/IconStudent.png";
import imgVideo from "../../Assets/img/IconVideo.png";

/**
 * LecturerTrendemy component for displaying the teaching staff of the Trendemy platform.
 * This component presents a list of lecturers with their names, specialties,
 * and associated details, along with animations for visual appeal.
 *
 * @component
 * @returns {JSX.Element} The rendered LecturerTrendemy component.
 */
const LecturerTrendemy = () => {
  /**
   * Hook to track if the title of the lecturer section is in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the title container.
   * @property {boolean} inView - Boolean indicating if the title container is in view.
   */
  const { ref: titleLecturerRef, inView: titleLecturerInView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  /**
   * Hook for each lecturer card to trigger animations when they are in view.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the lecturer card.
   * @property {boolean} inView - Boolean indicating if the lecturer card is in view.
   */
  const { ref: lecturer1Ref, inView: lecturer1InView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });
  const { ref: lecturer2Ref, inView: lecturer2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: lecturer3Ref, inView: lecturer3InView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.lecturerTrendemyContainer}>
      <div
        ref={titleLecturerRef} // Attach ref to the title container
        className={`${styles.titleLecturerTrendemy} animate__animated ${
          titleLecturerInView ? "animate__fadeInUp" : "" // Apply animation if in view
        }`}
      >
        <h1 className={styles.trendemyLecturerTitleOne}>Giảng viên</h1>
        <h2 className={styles.trendemyLecturerTitleTwo}>
          Đội ngũ giảng viên tại Trendemy
        </h2>
      </div>

      <div className={styles.lecturerContent}>
        {/* Card 1 */}
        <div
          ref={lecturer1Ref} // Attach ref to the first lecturer card
          className={`${styles.cardLecturer} animate__animated ${
            lecturer1InView ? "animate__fadeInUp" : "" // Apply animation if in view
          }`}
        >
          <img
            src={imgLecturer1}
            alt="Lecturer 1"
            className={styles.imgLecturer}
          />
          <div className={styles.cardLecturerInfo}>
            <h3>GV. Trần Khải Phong</h3>
            <p>Trí tuệ nhân tạo</p>

            <div className={styles.lineLecturerTrendemy}></div>

            <div className={styles.iconsLecturer}>
              <span>
                <img src={imgStudent} alt="Student Icon" /> Học viên: 200
              </span>
              <span>
                <img src={imgVideo} alt="Video Icon" /> Khóa học: 10
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={lecturer2Ref} // Attach ref to the second lecturer card
          className={`${styles.cardLecturer} animate__animated ${
            lecturer2InView ? "animate__fadeInUp" : "" // Apply animation if in view
          }`}
        >
          <img
            src={imgLecturer2}
            alt="Lecturer 2"
            className={styles.imgLecturer}
          />
          <div className={styles.cardLecturerInfo}>
            <h3>GV. Phạm Huy Hoàng</h3>
            <p>Ứng dụng học máy</p>

            <div className={styles.lineLecturerTrendemy}></div>

            <div className={styles.iconsLecturer}>
              <span>
                <img src={imgStudent} alt="Student Icon" /> Học viên: 200
              </span>
              <span>
                <img src={imgVideo} alt="Video Icon" /> Khóa học: 10
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={lecturer3Ref} // Attach ref to the third lecturer card
          className={`${styles.cardLecturer} animate__animated ${
            lecturer3InView ? "animate__fadeInUp" : "" // Apply animation if in view
          }`}
        >
          <img
            src={imgLecturer3}
            alt="Lecturer 3"
            className={styles.imgLecturer}
          />
          <div className={styles.cardLecturerInfo}>
            <h3>GV. Trần Nguyễn Thành Trung</h3>
            <p>Phân tích dữ liệu</p>

            <div className={styles.lineLecturerTrendemy}></div>

            <div className={styles.iconsLecturer}>
              <span>
                <img src={imgStudent} alt="Student Icon" /> Học viên: 200
              </span>
              <span>
                <img src={imgVideo} alt="Video Icon" /> Khóa học: 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LecturerTrendemy;
