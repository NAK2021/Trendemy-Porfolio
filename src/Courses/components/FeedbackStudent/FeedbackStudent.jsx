import React from 'react';
import styles from "./FeedbackStudent.module.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import avatarStudentA from "../../Assets/img/avatarStudentOne.png";
import avatarStudentB from "../../Assets/img/avatarStudentTwo.png";
import imgfeedback from "../../Assets/img/feedbackStudent.png";

export default function FeedbackStudent() {
     /**
     * Hook to handle animations when elements come into view.
     * 
     * @type {Object}
     * @property {function} ref - Ref callback to attach to the feedback Student container.
     * @property {boolean} inView - Boolean indicating if the feedback Student container is in view.
     */
     const {ref: AnimateFeedbackStudentRef, inView: AnimateFeedbackStudentInView} = useInView({ triggerOnce: true });
  return (
    <div className={styles.feedbackStudentContainer}>
         <div ref={AnimateFeedbackStudentRef}
                 className={`animate__animated ${AnimateFeedbackStudentInView ? 'animate__fadeInUp' : ''} ${styles.feedbackStudentAnimation}`}>
                <div className={styles.feedbackStudentTitleOne}>Cảm nghỉ</div>
                <div className={styles.feedbackStudentTitleTwo}>Học viên đã nói gì về khóa học</div>
                <div className={styles.feedbackStudentContainerContent}>
                    <img src={imgfeedback} alt="img feedback" className={styles.feedbackStudentImg}/>
                    <div className={styles.feedbackStudentContainerBox}>
                        <div className={styles.feedbackStudentBoxA}>
                            <p className={styles.feedbackStudentText}>Khóa học Phân tích Dữ liệu tại Trendemy giúp tôi hiểu sâu về dữ liệu và áp dụng ngay vào công việc.</p>
                            <div className={styles.feedbackStudentInfo}>
                                <img src={avatarStudentB} alt="avatar student" className={styles.feedbackStudentAvatarStudent}/>
                                <div className={styles.feedbackStudentName}>Huỳnh Tấn Phát</div>
                            </div>
                        </div>
                        <div className={styles.feedbackStudentBoxB}>
                            <p className={styles.feedbackStudentText}>Khóa học cung cấp cái nhìn sâu sắc và kiến thức vững chắc về phân tích dữ liệu, giúp tôi ứng dụng hiệu quả vào thực tiễn.</p>
                            <div className={styles.feedbackStudentInfo}>
                                <img src={avatarStudentA} alt="avatar student" className={styles.feedbackStudentAvatarStudent}/>
                                <div className={styles.feedbackStudentName}>Huỳnh Tấn Phát</div>
                            </div>
                        </div>
                        <div className={styles.feedbackStudentBoxC}>
                            <p className={styles.feedbackStudentText}>Khóa học trang bị kiến thức toàn diện về phân tích dữ liệu, nâng cao khả năng ứng dụng thực tiễn hiệu quả.</p>
                            <div className={styles.feedbackStudentInfo}>
                                <img src={avatarStudentA} alt="avatar student" className={styles.feedbackStudentAvatarStudent}/>
                                <div className={styles.feedbackStudentName}>Huỳnh Tấn Phát</div>
                            </div>
                        </div>
                        <div className={styles.feedbackStudentBoxD}>
                            <p className={styles.feedbackStudentText}>Khóa học cung cấp kiến thức sâu về phân tích dữ liệu, giúp tôi áp dụng hiệu quả trong thực tiễn.</p>
                            <div className={styles.feedbackStudentInfo}>
                                <img src={avatarStudentA} alt="avatar student" className={styles.feedbackStudentAvatarStudent}/>
                                <div className={styles.feedbackStudentName}>Huỳnh Tấn Phát</div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    </div>
  )
};
