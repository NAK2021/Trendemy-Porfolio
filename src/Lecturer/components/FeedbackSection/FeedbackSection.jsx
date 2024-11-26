import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from "./FeedbackSection.module.css";
import feedbackSectionImg from "../../Assets/img/feedbackSectionImg.png";
import iconRedCircle from "../../Assets/img/IconRedCircle.png";
import iconBlueCircle from "../../Assets/img/IconBlueCircle.png";
import user1 from "../../Assets/img/User1.png";
import user2 from "../../Assets/img/User2.png";
import user3 from "../../Assets/img/User3.png";

/**
 * PhQuotesThin component renders an SVG icon for quotes.
 * @param {Object} props - Props to pass to the SVG element. 
 * @returns {JSX.Element} SVG element representing a quote icon.
 */
export function PhQuotesThin(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 256 256" {...props}><path fill="#0fc8a9" d="M100 60H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm112-80h-60a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80h-64a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Z"></path></svg>);
}

// Array of feedback objects, each containing user information and feedback content.
const feedbacks = [
    {
        key: 1,
        user: "Dương Thế Ngọc",
        position: "Sinh viên",
        image: user1,
        content: "Trendemy là nền tảng học trực tuyến tuyệt vời với nhiều khóa học đa dạng, giảng viên chuyên nghiệp và giao diện thân thiện. Tôi đã học được nhiều kiến thức bổ ích và nâng cao kỹ năng. Cảm ơn Trendemy đã mang đến trải nghiệm học tập tuyệt vời."
    },
    {
        key: 2,
        user: "Trương Phương Nhã",
        position: "Nhân viên Marketing",
        image: user2,
        content: "Chương trình học của Trendemy được thiết kế khoa học, giúp dễ dàng nắm bắt và áp dụng kiến thức. Các bài kiểm tra và thực hành phong phú củng cố hiểu biết. Trendemy đã giúp tôi phát triển toàn diện."
    },
    {
        key: 3,
        user: "Nguyễn Bảo Trân",
        position: "Sinh viên",
        image: user3,
        content: "Trendemy có đội ngũ tư vấn nhiệt tình, giải đáp nhanh chóng. Cộng đồng học viên năng động giúp duy trì hứng thú học tập. Trendemy không chỉ là nơi học mà còn là nơi kết nối và phát triển."
    },
];

/**
 * FeedbackSection component renders the feedback section width user feedbacks.
 * It uses Swiper for carousel functionally to display feedbacks. 
 * 
 * @returns {JSX.Element} A section containing user feedbacks width Swiper carousel. 
 */
export default function FeedbackSection() {
    return (
        <section className={styles.feedbackSectionLecturer} id="feedback">
            <div className={styles.feedbackSectionLecturerContainer}>
                {/* Section title */}
                <img src={iconBlueCircle} className={styles.iconBlueCircle} />
                <h1 className={styles.feedbackSectionLecturerTitleFirst}>Cảm nghĩ</h1>
                <h1 className={styles.feedbackSectionLecturerTitleSecond}>Học viên của chúng tôi đã nói gì</h1>
                <img src={iconRedCircle} className={styles.iconRedCircle} />
                <div className={styles.feedbackSectionLecturerContainerFeedback}>
                    {/* Swiper component for carousel functionality */}
                    <Swiper
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        loop={true}
                        className={styles.feedbackSectionLecturerContainerSwiper}
                    >
                        {feedbacks.map((feedback) => (
                            <SwiperSlide key={feedback.key}>
                                <div className={styles.feedbackSectionLecturerCard}>
                                    {/* Feedback content */}
                                    <p className={styles.feedbackSectionLecturerContent}>{feedback.content}</p>
                                    {/* Quote icon */}
                                    <PhQuotesThin className={styles.feedbackSectionLecturerVector} />
                                    <div className={styles.feedbackSectionLecturerContainerInfoUser}>
                                        {/* User image */}
                                        <img className={styles.feedbackSectionLecturerImgUser} src={feedback.image} alt={feedback.user} />
                                        <div className={styles.feedbackSectionLecturerContainerInfoUser}> 
                                            {/* User name and position */}
                                            <h5 className={styles.feedbackSectionLecturerNameUser}>{feedback.user}</h5>
                                            <h6 className={styles.feedbackSectionLecturerPositionUser}>{feedback.position}</h6>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.feedbackSectionContainerImg}>
                        {/* Feedback section image */}
                        <img className={styles.feedbackSectionLecturerImg} src={feedbackSectionImg} alt="feedbackSectionImg"/>
                    </div>
                </div>
            </div>
        </section>  
    );
}

