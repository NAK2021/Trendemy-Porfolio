import React from "react";
import styles from "../CourseCard/CourseCard.module.css";
import 'animate.css';
import "aos/dist/aos.css"; // Import AOS styles for animation effects
import { useInView } from 'react-intersection-observer';
import imgPython from "../../Assets/img/Python.png";
import imgData from "../../Assets/img/Data.png";
import imgSQL from "../../Assets/img/SQL.png";
import avatarLecturerA from "../../Assets/img/LecturerA.png";
import avatarLecturerB from "../../Assets/img/LecturerB.png";
import imgRating from "../../Assets/img/IconRating.png";
import iconLesson from "../../Assets/img/IconLesson.png";
import iconStudent from "../../Assets/img/IconStudent.png";
import iconLevel from "../../Assets/img/IconLevel.png";

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
];

/**
 * Course component to display individual course details.
 * @param {Object} props - The course properties.
 * @param {string} props.img - The image source for the course.
 * @param {string} props.avatar - The image source for the instructor's avatar.
 * @param {string} props.instructor - The name of the instructor.
 * @param {string} props.rating - The image source for the course rating.
 * @param {string} props.description - The course description.
 * @param {string} props.lesson - The image source for the lesson icon.
 * @param {string} props.student - The image source for the student icon.
 * @param {string} props.level - The image source for the level icon.
 * @returns {JSX.Element} The rendered Course component.
 */
function Course({ img, avatar, instructor, rating, description, lesson, student, level}) {
  return (
    <div className={styles.containerCourses}>
      {/* Course image */}
      <img src={img} alt="Img Course" className={styles.imgCourses}/>
      {/* Course instructor information */}
      <div className={styles.containerInfoLecturer}>
        <img src={avatar} className={styles.imgAvatar} alt="Avatar"/>
        <p className={styles.nameInstructor}>{instructor}</p>
        <img src={rating} className={styles.imgRating} alt="Rating"/>
      </div>
      {/* Course description */}
      <p className={styles.description}>{description}</p>
      <div className={styles.line}></div>
      {/* Course learning path */}
      <div className={styles.containerInforLearning}>
        <div className={styles.containerInforLesson}>
           <img src={lesson} className={styles.iconLesson} alt="Lesson"/>
           <p className={styles.lesson}>Bài giảng: 12</p>
        </div>
        <div className={styles.containerInforStudent}>
           <img src={student} className={styles.iconStudent} alt="Student"/>
           <p className={styles.student}>Học viên: 200</p>
        </div>
        <div className={styles.containerInforLevel}>
           <img src={level} className={styles.iconLevel} alt="Level"/>
           <p className={styles.level}>Cơ bản</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Main CourseCard component to display the selected courses.
 * @component
 * @returns {JSX.Element} The rendered CourseCard component.
 */
export default function CourseCard() {
  /**
  * Hook to track if the courses section is in view and apply animation.
  * 
  * @type {Object}
  * @property {function} ref - Ref callback to attach to the courses section container.
  * @property {boolean} inView - Boolean indicating if the courses section container is in view.
  */
  const { ref: ContainerCoursesSectionRef, inView: ContainerCoursesSectionInView } = useInView({ triggerOnce: true });

  return (
    <section className={styles.coursesSectionPlatform} id="typical-courses">
      {/* Animated container with fade-in animation */}
      <div ref={ContainerCoursesSectionRef}
                 className={`animate__animated ${ContainerCoursesSectionInView ? 'animate__fadeInUp' : ''} ${styles.coursesSectionPlatformContainerContent}`}>
        <div className={styles.containerCoursesSectionTitle}>
          {/* Section title */}
          <div className={styles.coursesSectionPlatformTitle}>
            <h2 className={styles.coursesSectionPlatformTitleFirst}>Khoá học </h2>
            <h1 className={styles.coursesSectionPlatformTitleSecond}>Khóa học bạn sẽ muốn tìm hiểu</h1>
          </div>
        </div>
        {/* Container for courses */}
        <div className={styles.coursesSectionPlatformContainer}>
             {courses.map((course, index) => (
                <Course key={index} {...course} />
              ))}
        </div>
        <button className={styles.coursesSectionbutton}>
            Xem tất cả
          </button>
      </div>
    </section>
  );
}
