import React from "react";
import styles from "./WhyShouldLearn.module.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import imgWhyShouldLearn from "../../Assets/img/imgWhyShouldLearn.png";

/**
 * WhyShouldLearn component - Displays information about whyShouldLearn with animations.
 * 
 * This component uses the `react-intersection-observer` hook to trigger animations when elements come into view.
 * It includes information about the level, duration, certificate, and entry test of a course.
 * 
 * @component
 * @example
 * return (
 *   <WhyShouldLearn />
 * );
 * 
 * @returns {JSX.Element} The WhyShouldLearn component.
 */
export default function WhyShouldLearn() {
    /**
     * Hook to handle animations when elements come into view.
     * 
     * @type {Object}
     * @property {function} ref - Ref callback to attach to the whyShouldLearn container.
     * @property {boolean} inView - Boolean indicating if the whyShouldLearn container is in view.
     */
    const {ref: AnimationWhyShouldLearnCoursesRef, inView: AnimationWhyShouldLearnCoursesInView} = useInView({ triggerOnce: true });

    return (
        <div className={styles.whyShouldLearnBackground} id="should-learn">
            <div ref={AnimationWhyShouldLearnCoursesRef}
                 className={`animate__animated ${AnimationWhyShouldLearnCoursesInView ? 'animate__fadeInUp' : ''} ${styles.whyShouldLearnAnimation}`}>
                 <div className={styles.whyShouldLearnContainer}>
                     <div className={styles.whyShouldLearnContainerImg}>
                     <img src={imgWhyShouldLearn} alt="Picture Why Learn"  className={styles.whyShouldLearnImg}/>
                     </div>
                   <div className={styles.whyShouldLearnContainerText}>
                     <div className={styles.whyShouldLearnTitle}>Vì sao nên học <span className={styles.whyShouldLearnTitleHighlights}>các nguyên tắc về phân tích dữ liệu</span>?</div>
                     <p className={styles.whyShouldLearnDescription}>Trong thời đại mà dữ liệu đóng vai trò then chốt, việc hiểu và áp dụng các nguyên tắc phân tích dữ liệu là yếu tố quyết định giúp bạn khai thác giá trị tiềm ẩn từ thông tin. Khi nắm vững kỹ năng này, bạn có thể biến những con số thành các quyết định chiến lược, tối ưu hóa quy trình và tạo lợi thế cạnh tranh. Hãy trang bị cho mình khả năng phân tích dữ liệu để không chỉ theo kịp mà còn dẫn đầu trong lĩnh vực của bạn.</p>
                     <button className={styles.whyShouldLearnBtn}>Tham gia ngay</button>
                   </div>
                 </div>
            </div>
        </div>
    );
}