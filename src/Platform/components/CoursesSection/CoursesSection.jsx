import React from "react";
import styles from "./CoursesSection.module.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import iconDot from "../../Assets/img/iconDot.png";
import iconSun from "../../Assets/img/iconSun.png";
import imgPython from "../../Assets/img/Python.png";
import imgData from "../../Assets/img/Data.png";
import imgSQL from "../../Assets/img/SQL.png";
import imgAI from "../../Assets/img/AI.png";
import imgPHP from "../../Assets/img/PHP.png";
import imgLaravel from "../../Assets/img/Laravel.png";
import avatarLecturerA from "../../Assets/img/LecturerA.png";
import avatarLecturerB from "../../Assets/img/LecturerB.png";
import imgRating from "../../Assets/img/IconRating.png";
import iconLesson from "../../Assets/img/IconLesson.png";
import iconStudent from "../../Assets/img/IconStudent.png";
import iconLevel from "../../Assets/img/IconLevel.png";

// Course data
const courses = [
  {
    img: imgPython,
    avatar: avatarLecturerA,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "Khám phá Python: Bước đầu trong thế giới lập trình",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
  {
    img: imgData,
    avatar: avatarLecturerA,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "Cơ bản về phân tích dữ liệu: Xây dựng kỹ năng dữ liệu vững chắc",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
  {
    img: imgSQL,
    avatar: avatarLecturerB,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "Thành thạo SQL để phân tích dữ liệu: Từ cơ bản đến nâng cao",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
  {
    img: imgAI,
    avatar: avatarLecturerB,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "Khám phá trị tuệ nhân tạo: Hành trình vào thế giới AI",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
  {
    img: imgPHP,
    avatar: avatarLecturerB,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "PHP cho người mới bắt đầu: Bước đầu vào lập trình web",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
  {
    img: imgLaravel,
    avatar: avatarLecturerB,
    instructor: "Lê Hoàng Việt Tuấn",
    rating: imgRating,
    description: "Khám phá Laravel: Nền tảng vững chắc cho phát triển web",
    lesson: iconLesson,
    student: iconStudent,
    level: iconLevel,
  },
];

/**
 * Course component to display individual course details.
 * @param {Object} props - The course properties.
 * @param {string} props.title - The title of the course.
 * @param {string} props.instructor - The name of the instructor.
 * @param {string} props.img - The image source for the course.
 * @param {string} props.link - The link to the course details.
 * @returns {JSX.Element} The rendered Course component.
 */
function Course({ img, avatar, instructor, rating, description, lesson, student, level}) {
  return (
    <div className={styles.containerCourses}>
      {/* Course image */}
      <img src={img} alt="Img Course" className={styles.imgCourses}/>
      {/* Course instructor information */}
      <div className={styles.containerInfoLecturer}>
        <img src={avatar} className={styles.imgAvatar}/>
        <p className={styles.nameInstructor}>{instructor}</p>
        <img src={rating} className={styles.imgRating}/>
      </div>
      {/* Course description */}
      <p className={styles.description}>{description}</p>
      <div className={styles.line}></div>
      {/* Course learning path */}
      <div className={styles.containerInforLearning}>
        <div className={styles.containerInforLesson}>
           <img src={lesson} className={styles.iconLesson}/>
           <p className={styles.lesson}>Bài giảng: 12</p>
        </div>
        <div className={styles.containerInforStudent}>
           <img src={student} className={styles.iconStudent}/>
           <p className={styles.student}>Học viên: 200</p>
        </div>
        <div className={styles.containerInforLevel}>
           <img src={level} className={styles.iconLevel}/>
           <p className={styles.level}>Cơ bản</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Main CoursesSection component to display all courses.
 * @component
 * @returns {JSX.Element} The rendered CoursesSection component.
 */
export default function CoursesSection() {
  /**
  * Hook to track if the courses section is in view and apply animation.
  * 
  * @type {Object}
  * @property {function} ref - Ref callback to attach to the courses section container.
  * @property {boolean} inView - Boolean indicating if the courses section container is in view.
  */
  const { ref: ContainerCoursesSectionRef, inView: ContainerCoursesSectionInView } = useInView({ triggerOnce: true });

  /**
   * Handle button click to navigate to the Register page.
   * This function redirects the user to the /Register page when
   * the "Tham gia ngay" button is clicked.
   * @function handleRegisterClick
   * @returns {void}
   */
  const handleRegisterClick = () => {
    window.location.href = "/Register";
  };
  
  return (
    <section className={styles.coursesSectionPlatform} id="typical-courses">
      {/* Animated container with fade-in animation */}
      <div ref={ContainerCoursesSectionRef}
                 className={`animate__animated ${ContainerCoursesSectionInView ? 'animate__fadeInUp' : ''} ${styles.coursesSectionPlatformContainerContent}`}>
        <div className={styles.containerCoursesSectionTitle}>
          <img src={iconDot} className={styles.coursesSectionPlatformIconDot}/>
          {/* Section title */}
          <div className={styles.coursesSectionPlatformTitle}>
            <h2 className={styles.coursesSectionPlatformTitleFirst}>100+ danh sách khóa học độc đáo</h2>
            <h1 className={styles.coursesSectionPlatformTitleSecond}>Các khóa học trực tuyến nổi bật</h1>
          </div>
          <img src={iconSun} className={styles.coursesSectionPlatformIconSun}/>
        </div>
      {/* Container for courses */}
        <div className={styles.coursesSectionPlatformContainer}>
             {courses.map((course, index) => (
                <Course key={index} {...course} />
              ))}
        </div>
      {/* Button to view all courses */}
        <button className={styles.coursesSectionPlatformBtn} onClick={handleRegisterClick}>Xem tất cả</button>
      </div>
    </section>
  );
}




