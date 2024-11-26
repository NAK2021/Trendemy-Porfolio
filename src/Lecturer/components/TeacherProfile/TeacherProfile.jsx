import React from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook to track visibility of elements
import "animate.css"; // Import animate.css for animations
import styles from "./TeacherProfile.module.css"; // Import CSS module for styling
import imgTeacher from "../../Assets/img/Teacher.png"; // Import the teacher's image

/**
 * TeacherProfile component displays the profile of a teacher, including
 * their name, specialty, and additional information.
 * It also implements animations that trigger when the component comes into view.
 *
 * @component
 * @returns {JSX.Element} The rendered TeacherProfile component.
 */
const TeacherProfile = () => {
  /**
   * Hook to track if the teacher profile is in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the teacher profile container.
   * @property {boolean} inView - Boolean indicating if the teacher profile container is in view.
   */
  const { ref: TeacherProfileRef, inView: TeacherProfileInView } = useInView({
    triggerOnce: true, // Trigger animation only once when the section comes into view
  });

  /**
   * Hook to track if the image is in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the image container.
   * @property {boolean} inView - Boolean indicating if the image container is in view.
   */
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  /**
   * Hook to track if the profile information is in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the profile information container.
   * @property {boolean} inView - Boolean indicating if the profile information container is in view.
   */
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <section className={styles.containerTeacherProfile}>
      {/* Title Section */}
      <div
        ref={TeacherProfileRef} // Attach ref to the title container
        className={`${styles.titleTeacherProfile} animate__animated ${
          TeacherProfileInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <h3 className={styles.introTeacherProfile}>Giới thiệu giảng viên</h3>{" "}
        {/* Introduction to the teacher */}
        <h2 className={styles.nameTeacherProfile}>Lê Hoàng Việt Tuấn</h2>{" "}
        {/* Teacher's name */}
      </div>

      {/* Flex Container for Image and Info */}
      <div className={styles.flexContainerTeacherProfile}>
        {/* Image Container with Animation */}
        <div
          ref={imageRef} // Attach ref to the image container
          className={`${
            styles.imageContainerTeacherProfile
          } animate__animated ${imageInView ? "animate__fadeInUp" : ""}`} // Apply animation if in view
        >
          <img
            src={imgTeacher} // Source of the teacher's image
            alt="Giảng viên" // Alt text for accessibility
            className={styles.profileImageTeacherProfile} // CSS class for image styling
          />
        </div>

        {/* Info Container with Animation */}
        <div
          ref={infoRef} // Attach ref to the info container
          className={`${styles.infoContainerTeacherProfile} animate__animated ${
            infoInView ? "animate__fadeInUp" : "" // Apply animation if in view
          }`}
        >
          <h3 className={styles.titleProfile}>Chuyên gia phân tích dữ liệu</h3>{" "}
          {/* Teacher's specialty */}
          <p className={styles.descriptionTeacherProfile}>
            Giảng viên Lê Hoàng Việt Tuấn đã dẫn dắt nhiều dự án lớn và tư vấn
            chiến lược dữ liệu cho các doanh nghiệp trong và ngoài nước. Với
            kiến thức sâu rộng về các công cụ phân tích hiện đại như Python, R,
            và SQL, thầy Tuấn không chỉ giúp học viên nắm vững lý thuyết mà còn
            thực hành trực tiếp trên các bài toán thực tế. Phong cách giảng dạy
            linh hoạt, dễ hiểu của thầy được đánh giá cao, mang lại trải nghiệm
            học tập tối ưu cho học viên.
          </p>
          <div className={styles.lineTeacherProfile}></div>{" "}
          {/* Separator line */}
          {/* Additional Information Section */}
          <div className={styles.infoTeacherProfile}>
            <p>
              <strong>Tên:</strong> Lê Hoàng Việt Tuấn {/* Teacher's name */}
            </p>
            <p>
              <strong>Email:</strong> lehvtuan@gmail.com {/* Teacher's email */}
            </p>
            <p>
              <strong>Số điện thoại:</strong> 0984330705{" "}
              {/* Teacher's phone number */}
            </p>
            <p>
              <strong>Chuyên Ngành:</strong> Phân tích dữ liệu{" "}
              {/* Teacher's specialty */}
            </p>
            <p>
              <strong>Chức vụ:</strong> Thạc sĩ {/* Teacher's position */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;
