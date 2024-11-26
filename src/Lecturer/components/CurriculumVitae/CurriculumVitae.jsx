import React, { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer'; // Hook to detect if elements are in the viewport
import 'animate.css'; // External CSS library for animations
import styles from "../CurriculumVitae/CurriculumVitae.module.css"; // Importing CSS modules for scoped styling
import starImage from "../../Assets/img/star.png"; // Star image for the background

const CurriculumVitae = () => {
  // Array of education data, each object represents one entry
  const education = [
    {
      title: "Thạc sĩ khoa học máy tính",
      details: "Đại học Khoa học Tự nhiên TP.HCM / 2008-2009\nNghiên cứu chuyên sâu về các lĩnh vực như trí tuệ nhân tạo, học máy, và phân tích dữ liệu, đồng thời thực hiện luận văn tập trung vào ứng dụng trí tuệ nhân tạo.",
    },
    {
      title: "Thạc sĩ tin học",
      details: "Đại học Khoa học Tự nhiên TP.HCM / 2011-2013\nNghiên cứu chuyên sâu về lập trình, cấu trúc dữ liệu, và hệ điều hành, với trọng tâm là phát triển các hệ thống phần mềm hiệu quả.",
    },
    {
      title: "Bằng tốt nghiệp giáo viên tin học",
      details: "Đại học Khoa học Tự nhiên TP.HCM / 2011-2013\nHoàn thành chương trình cử nhân chuyên ngành công nghệ thông tin, với nghiên cứu sâu về lập trình, cấu trúc dữ liệu và phát triển hệ thống phần mềm hiệu quả.",
    },
  ];

  // Array of experience data, each object represents one job or role
  const experience = [
    {
      title: "Giảng viên mời",
      details: "Đại học Nguyễn Tất Thành / 2014-hiện tại\nGiảng viên mời tại Đại học Nguyễn Tất Thành với nhiều năm kinh nghiệm trong lĩnh vực công nghệ thông tin, chuyên sâu về lập trình và phát triển hệ thống phần mềm.",
    },
    {
      title: "Nhà phân tích RMCE",
      details: "Công ty công nghệ Samsung Việt Nam / 2019\nNhà phân tích RMCE chuyên phân tích dữ liệu, đánh giá rủi ro và tối ưu các biện pháp kiểm soát dựa trên dữ liệu thực tế, giúp doanh nghiệp đưa ra quyết định chiến lược.",
    },
    {
      title: "Giảng viên toàn thời gian",
      details: "Đại học Sài Gòn / 2021-2022\nGiảng viên toàn thời gian tại Đại học Sài Gòn với nhiều năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực công nghệ thông tin, chuyên sâu về lập trình và phát triển hệ thống phần mềm.",
    },
  ];

  // State management for controlling which sections are open (expanded) or closed (collapsed)
  const [openIndex, setOpenIndex] = useState({
    education: null,  // Holds the index of the opened education section
    experience: null, // Holds the index of the opened experience section
  });

  // useRef is used to store references to each section's DOM element for dynamic height control
  const educationRefs = useRef({});
  const experienceRefs = useRef({});

  // Function to toggle the expansion of a specific section
  const toggleItem = (section, index) => {
    // Toggle between the opened/closed states of the section
    setOpenIndex((prevState) => ({
      ...prevState,
      [section]: prevState[section] === index ? null : index, // If clicked again, it will close
    }));
  };

  // useEffect to handle dynamic height expansion and collapse for each section
  useEffect(() => {
    // Loop over education sections to apply dynamic height based on the open state
    Object.keys(educationRefs.current).forEach((key) => {
      if (openIndex.education === parseInt(key)) {
        // Set height to the scrollHeight (actual content height) if opened
        educationRefs.current[key].style.maxHeight = `${educationRefs.current[key].scrollHeight}px`;
      } else {
        // Set height to 0 if closed
        educationRefs.current[key].style.maxHeight = "0";
      }
    });

    // Loop over experience sections to apply dynamic height based on the open state
    Object.keys(experienceRefs.current).forEach((key) => {
      if (openIndex.experience === parseInt(key)) {
        experienceRefs.current[key].style.maxHeight = `${experienceRefs.current[key].scrollHeight}px`;
      } else {
        experienceRefs.current[key].style.maxHeight = "0";
      }
    });
  }, [openIndex]); // Dependency on the openIndex state

  // Intersection Observer hook to detect when the component is in view (visible to the user)
  const { ref: cvRef, inView: cvInView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Triggers when 30% of the element is in view
  });

  // Function to render a section (education or experience), including the toggle logic and content
  const renderSection = (title, items, sectionKey, refs) => (
    <div className={`${styles.cvSection} animate__animated ${cvInView ? 'animate__fadeInUp' : ''}`}>
      <h3 className={styles.cvSectionTitle}>{title}</h3>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.cvItem} ${openIndex[sectionKey] === index ? styles.active : ""}`}
        >
          <div
            className={styles.cvItemHeader}
            onClick={() => toggleItem(sectionKey, index)} // Handle the section click to open/close
          >
            <span className={`${styles.cvItemTitle} ${openIndex[sectionKey] === index ? styles.activeTitle : ''}`}>
              {item.title}
            </span>
            <span className={styles.cvToggle}>
              {openIndex[sectionKey] === index ? (
                <i className="ri-subtract-fill"></i> // "-" Icon when the section is open
              ) : (
                <i className="ri-add-line"></i> // "+" Icon when the section is closed
              )}
            </span>
          </div>
          <div
            ref={(el) => (refs.current[index] = el)} // Reference to DOM element for dynamic height
            className={styles.cvItemContent}
          >
            {item.details.split("\n").map((line, idx) => (
              <p key={idx} className={styles.cvDetailText}>{line}</p> // Each line of details
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {/* Image as a background element */}
      <img src={starImage} className={styles.Image} alt="Star Background" />
      <div ref={cvRef} className={`${styles.cvContainer} animate__animated ${cvInView ? 'animate__fadeInUp' : ''}`}>
        {/* CV Header */}
        <div className={styles.cvHeader}>
          <h5 className={styles.cvTitle1}>Bản tóm tắt</h5>
          <h4 className={styles.cvTitle2}>Tóm tắt sơ yếu lí lịch</h4>
        </div>
        {/* CV Content with dynamic sections */}
        <div className={styles.cvContent}>
          {renderSection("Học vấn", education, "education", educationRefs)}
          {renderSection("Kinh nghiệm", experience, "experience", experienceRefs)}
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;