import React from "react";
import styles from "./LecturerCourses.module.css";
import MrTuan from "../../Assets/img/MrTuan.png";
import MrTrung from "../../Assets/img/MrTrung.png";
import Ellipse from "../../Assets/img/Ellipse.png";
import StarFirst from "../../Assets/img/iconStarOne.png";
import StarSecond from "../../Assets/img/iconStarTwo.png";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

/**
 * LecturerCourses component - Displays information about course lecturers with animation.
 * 
 * This component uses the `react-intersection-observer` hook to trigger a fade-in animation when the component comes into view.
 * It shows details about two lecturers including their photos and qualifications.
 * 
 * @component
 * @example
 * return (
 *   <LecturerCourses />
 * );
 * 
 * @returns {JSX.Element} The LecturerCourses component.
 */
export default function LecturerCourses() {
    /**
     * Hook to handle animations when elements come into view.
     * 
     * @type {Object}
     * @property {function} ref - Ref callback to attach to the lecturer courses container.
     * @property {boolean} inView - Boolean indicating if the lecturer courses container is in view.
     */
    const {ref: AnimateLecturerCoursesRef, inView: AnimateLecturerCoursesInView} = useInView({ triggerOnce: true });

    return (
        <div className={styles.lecturerCoursesContainer} id="lecturers">
             {/* Animate when in view */}
            <div ref={AnimateLecturerCoursesRef}
                 className={`animate__animated ${AnimateLecturerCoursesInView ? 'animate__fadeInUp' : ''} ${styles.lecturerCoursesAnimation}`}>
            {/* Title */}
                <img src={StarFirst} alt="icon star" className={styles.lecturerCoursesIconStarFirst}/>
                <h1 className={styles.lecturerCoursesTitle}>Giảng viên khóa học</h1>
                <div className={styles.lecturerCoursesTeacher}>
                    <div className={styles.lecturerCoursesTeacherOne}>
                        <img src={MrTuan} alt="Mr.Tuan" className={styles.Avatar}/>
                        <div className={styles.lecturerCoursesInfo}>
                            <div className={styles.name}>Giảng viên: Lê Hoàng Việt Tuấn</div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Chuyên gia giảng dạy với 11 năm kinh nghiệm trong lĩnh vực CNTT,
                                   chuyên môn về lập trình, cơ sở dữ liệu và ứng dụng giao diện.
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Kinh nghiệm xây dựng và phát triển kiến trúc Big Data và mô hình AI
                                    từ các dự án thực tế tại trường đại học và doanh nghiệp.
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Khả năng phân tích và xây dựng hệ thống dữ liệu với kỹ năng vững chắc
                                    trong việc sử dụng các công cụ hiện đại như Power BI, Tableau và SQL.
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Năng lực lãnh đạo và quản lý đội ngũ trong các dự án AI, từ tuyển dụng 
                                    đến phát triển các giải pháp công nghệ tiên tiến.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.lecturerCoursesTeacherTwo}>
                        <div className={styles.lecturerCoursesInfo}>
                            <div className={styles.name}>Giảng viên: Trần Nguyễn Thành Trung</div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Tiến sĩ công nghệ phần mềm, tốt nghiệp từ Đại học Công Nghệ
                                    TP.HCM (HUTECH), với chuyên môn sâu về phát triển phần mềm và hệ thống công nghệ 
                                    thông tin
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Các chứng chỉ về phần mềm từ các tổ chức uy tín như Google,
                                    Microsoft và Coursera.
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Hơn 30 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, đã từng
                                    làm việc tại các tập đoàn lớn như Amazon, Google, Microsoft.
                                </p>
                            </div>
                            <div className={styles.descriptionExperiences}>
                                <img src={Ellipse} className={styles.imgAround} />
                                <p className={styles.text}>Tham gia nhiều dự án lớn cho các tập đoàn đa quốc gia trên thế giới, tổ
                                    chức nhiều hội thảo về phần mềm.
                                </p>
                            </div>
                        </div>
                        <img src={MrTrung} alt="Mr.Trung" className={styles.Avatar}/>
                    </div>
                </div>
                <img src={StarSecond} alt="icon star" className={styles.lecturerCoursesIconStarSecond}/>
            </div>
        </div>
    );
}