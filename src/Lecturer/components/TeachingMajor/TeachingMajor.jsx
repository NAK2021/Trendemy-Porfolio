import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import styles from "./TeachingMajor.module.css";
import Star1 from "../../Assets/img/Star2.png";
import Star2 from "../../Assets/img/Star1.png";

/**
 * TeachingMajor component that displays a list of teaching specialties 
 * within the fields of data analysis and data science. The component uses
 * animations that are triggered when the section becomes visible in the viewport
 * with the help of `react-intersection-observer` and `animate.css`.
 *
 * @component
 * @returns {JSX.Element} The rendered TeachingMajor component.
 */
const TeachingMajor = () => {
  /**
   * Hook to track if the header section is in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the header container.
   * @property {boolean} inView - Boolean indicating if the header is in view.
   */
  const { ref: teacherMajorRef, inView: teacherMajorInView } = useInView({
    triggerOnce: true,
  });

  /**
   * Hook to track if the grid items are in view and apply animation.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the grid items container.
   * @property {boolean} inView - Boolean indicating if the grid items are in view.
   */
  const { ref: itemsRef, inView: itemsInView } = useInView({
    triggerOnce: true,
  });

  /**
   * Data array containing the teaching specializations.
   * Each specialization has a title and a description.
   * 
   * @type {Array<Object>}
   * @property {string} title - The name of the specialization.
   * @property {string} description - A brief overview of the instructor's expertise in the given specialization.
   */
  const data = [
    {
      title: "Python",
      description:
        "Chuyên gia Python với hơn 10 năm kinh nghiệm, chuyên về phân tích dữ liệu và trí tuệ nhân tạo.",
    },
    {
      title: "Power Query",
      description:
        "Chuyên môn Power Query với hơn 10 năm kinh nghiệm, tập trung vào phân tích dữ liệu và tự động hóa quy trình.",
    },
    {
      title: "Pivot",
      description:
        "Chuyên môn Pivot với hơn 10 năm kinh nghiệm, tập trung vào phân tích dữ liệu và tối ưu hóa quy trình.",
    },
    {
      title: "Excel",
      description:
        "Chuyên môn Excel với hơn 10 năm kinh nghiệm, đặc biệt trong phân tích dữ liệu và tối ưu hóa quy trình làm việc.",
    },
    {
      title: "SQL",
      description:
        "Chuyên môn SQL với hơn 10 năm kinh nghiệm, tập trung vào quản lý cơ sở dữ liệu và tối ưu hóa truy vấn.",
    },
    {
      title: "Power BI",
      description:
        "Chuyên môn Power BI với hơn 10 năm kinh nghiệm, chuyên sâu về trực quan hóa dữ liệu và phân tích báo cáo.",
    },
  ];

  return (
    <section className={styles.containeTeachingMajor}>
      {/* Header section for "Chuyên ngành giảng dạy" */}
      <div
        ref={teacherMajorRef}
        className={`${styles.teacherMajor} animate__animated ${
          teacherMajorInView ? "animate__fadeInUp" : ""
        }`}
      >
        {/* Decorative star icons */}
        <img src={Star1} className={styles.iconYellowStart} alt="Star Icon" />
        {/* Section title and subtitle */}
        <h2 className={styles.sectionTitleTeachingMajor}>Chuyên ngành giảng dạy</h2>
        <h3 className={styles.sectionSubtitleTeachingMajor}>Phân tích & Khoa học dữ liệu</h3>
        <img src={Star2} className={styles.iconRedStart} alt="Star Icon" />
      </div>

      {/* Grid container displaying teaching specializations */}
      <div ref={itemsRef} className={styles.gridContaineTeachingMajor}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.gridItemTeachingMajor} animate__animated ${
              itemsInView ? "animate__fadeInUp" : ""
            }`}
          >
            {/* Specialization title and description */}
            <h4 className={styles.itemTitleTeachingMajor}>{item.title}</h4>
            <p className={styles.itemDescriptionTeachingMajor}>{item.description}</p>
            {/* Decorative line and diamond elements */}
            <div className={styles.lineTeachingMajor}></div>
            <div className={styles.diamondTeachingMajor}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachingMajor;
