import React, { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer'; // Import hook useInView for scroll-triggered animations
import 'animate.css'; // Import animate.css for animations
import styles from "../LearningPath/LearningPath.module.css";

/**
 * LearningPathItem component represents a single module in the learning path.
 * It shows the module title and collapses/expands to show details.
 * 
 * @param {Object} props - The properties for the LearningPathItem component.
 * @param {string} props.module - The title of the learning module.
 * @param {string} props.details - The detailed content of the module.
 * @param {boolean} props.isOpen - Boolean indicating if the module is expanded.
 * @param {function} props.onClick - Function to handle toggle between open and closed states.
 * 
 * @returns {JSX.Element} The rendered LearningPathItem component.
 */
const LearningPathItem = ({ module, details, isOpen, onClick }) => {
  const contentRef = useRef(null); // Reference to the content div for dynamic height control.

  useEffect(() => {
    // Adjust maxHeight based on whether the item is open or closed.
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]); // Re-run effect when isOpen changes.

  return (
    <div className={`${styles.learningPathItem} ${isOpen ? styles.learningPathOpen : ""}`}
      onClick={onClick} // Toggle the item's state on click.
    >
      <div className={styles.learningPathModule}>
        <span>{module}</span> {/* Display the module title */}
        <div className={styles.learningPathIconBackground}>
          <i className={`ri-add-line ${styles.learningPathIcon}`}></i> {/* Toggle icon */}
        </div>
      </div>
      <div ref={contentRef} className={styles.learningPathDetails}>
        {/* Display module details, split by line */}
        {details.split("\n").map((line, index) => (
          <p key={index}>{line}</p> 
        ))}
      </div>
    </div>
  );
};

/**
 * LearningPath component displays a collection of learning modules with collapsible details.
 * It manages the expanded state for individual LearningPathItem components.
 * 
 * @component
 * @returns {JSX.Element} The rendered LearningPath component.
 */
const LearningPath = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which module is open.

  // Sample data representing the learning modules.
  const modules = [
    { module: "Chương 1: EXCEL", details: "Tổng quan về Data và Big Data\n Các khái niệm về toán thống kê cơ bản\n Tổng quan về Excel trong phân tích dữ liệu\nPower Query, Pivot Table, Pivot Chart\n Xây dựng Dashboard" },
    { module: "Chương 2: SQL", details: "Các khái niệm cơ bản về SQL\n Các câu lệnh khởi tạo Database\n Các câu lệnh truy vấn\n Tối ưu hoá truy vấn" },
    { module: "Chương 3: POWER BI", details: "Các khái niệm cơ bản về Power BI\n ETH (Xử lý dữ liệu) trong Power BI\n Tính toán trong Power BI (Tạo Measure)\n Thiết kế Dashboard" },
    { module: "Chương 4: Dự án cuối khoá", details: "Xây dựng Dashboard theo chủ đề tuỳ chọn\n Tìm insight dự đoán tương lai" },
  ];

  /**
   * Toggles the expanded state of a LearningPathItem.
   * If the clicked module is already open, it closes it; otherwise, it opens it.
   * 
   * @param {number} index - The index of the module to toggle.
   */
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed states.
  };

  // Use useInView hook to trigger animation on scroll
  const { ref: learningPathRef, inView: learningPathInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  return (
    <div className={`${styles.learningPathContainer} animate__animated ${learningPathInView ? 'animate__fadeInUp' : ''}`} ref={learningPathRef}>
      {/* Decorative elements */}
      <div className={styles.decorationCircleRed}></div>
      <div className={styles.decorationTriangleBlue}></div>
      <div className={styles.decorationCircleOutlineRed}></div>
      <div className={styles.decorationTriangleYellow}></div>

      {/* Panel heading for the learning path */}
      <div className={styles.learningPathPanel}>
        <h5>Nội dung khóa học</h5>
        <h4>Các nguyên tắc cơ bản về phân tích dữ liệu</h4>
      </div>

      {/* Content with learning modules split into columns */}
      <div className={styles.learningPathContent}>
        {/* First column containing the first two modules */}
        <div className={styles.learningPathColumn}>
          {modules.slice(0, 2).map((module, index) => (
            <LearningPathItem
              key={index}
              module={module.module}
              details={module.details}
              isOpen={openIndex === index} // Check if this module is currently open.
              onClick={() => handleToggle(index)} // Toggle this module on click.
            />
          ))}
        </div>

        {/* Second column containing the last two modules */}
        <div className={styles.learningPathColumn}>
          {modules.slice(2, 4).map((module, index) => (
            <LearningPathItem
              key={index + 2}
              module={module.module}
              details={module.details}
              isOpen={openIndex === index + 2} // Check if this module is currently open.
              onClick={() => handleToggle(index + 2)} // Toggle this module on click.
            />
          ))}
        </div>
      </div>

      {/* Button to join the learning path */}
      <div className={styles.learningPathButton}>
        <button className="animate__animated animate__pulse">Tham gia ngay</button>
      </div>
    </div>
  );
};

export default LearningPath;
