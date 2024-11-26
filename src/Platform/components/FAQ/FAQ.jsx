import React, { useState, useRef, useEffect } from 'react'; // Import hooks từ React
import { useInView } from 'react-intersection-observer'; // Import hook để kích hoạt animation khi cuộn
import 'animate.css'; // Import animate.css để sử dụng các hiệu ứng
import styles from "./FAQ.module.css";
import questionImage from "../../Assets/img/FAQ.png";

/**
 * FAQItem component displays individual FAQ items with expandable/collapsible functionality.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.question - The question text.
 * @param {string} props.answer - The answer text.
 * @param {boolean} props.isOpen - Whether the FAQ item is open.
 * @param {function} props.onClick - Click handler to toggle the FAQ item.
 * @returns {JSX.Element} The rendered FAQItem component.
 */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Set the maxHeight of the content based on whether the FAQ item is open or closed.
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
      <div className={styles.faqQuestion} onClick={onClick}>
        <span>{question}</span>
        <div className={styles.faqIconBackground}>
          {isOpen ? (
            <i className={`ri-close-line ${styles.faqIcon}`}></i>
          ) : (
            <i className={`ri-add-line ${styles.faqIcon}`}></i>
          )}
        </div>
      </div>
      <div ref={contentRef} className={styles.faqAnswer}>
        {answer.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

/**
 * FAQ component displays a list of frequently asked questions with a right-side illustration.
 * 
 * @component
 * @returns {JSX.Element} The rendered FAQ component.
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Hook to apply animation when the FAQ section is in view
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  const faqs = [
    {
      question: "1. Khi đến với Trendemy bạn sẽ nhận được gì?",
      answer: "Trendemy cung cấp các khóa học đa dạng, học tập linh hoạt mọi lúc mọi nơi và hỗ trợ tận tình từ đội ngũ giảng viên giàu kinh nghiệm.",
    },
    {
      question: "2. Đối tượng có thể tham gia khóa học?",
      answer: "Dành cho những ai mong muốn trau dồi kinh nghiệm, sinh viên tìm kiếm cơ hội nghề nghiệp, và mọi lứa tuổi với các khóa học đa dạng từ Trendemy.",
    },
    {
      question: "3. Mục tiêu của khóa học Trendemy mang đến là gì?",
      answer: "Để nắm chắc được các kiến thức một cách dễ dàng nhất với các giảng đầy đủ nội dung và bài tập tiếp cận nội dung chính của từng bài giảng khác nhau.",
    },
    {
      question: "4. Chưa có kiến thức cơ bản liệu có thể học không?",
      answer: "Để nắm chắc được các kiến thức một cách dễ dàng nhất với các giảng đầy đủ nội dung và bài tập tiếp cận nội dung chính của từng bài giảng khác nhau.",
    },
    {
      question: "5. Sau khóa học nhận được những gì?",
      answer: "Nội dung các khóa học, bài giảng đầy đủ những nội dung thường gặp nên đảm bảo sau các khóa học bạn sẽ được cung cấp những kiến thức để vận dụng vào công việc chuyên ngành, nâng cao trình độ cá nhân.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer} id="faqs">
      <div className={styles.faqContent}>
        {/* Left panel containing FAQ items with fade-in-up animation */}
        <div
          ref={faqRef}
          className={`${styles.faqLeftPanel} animate__animated ${faqInView ? 'animate__fadeInUp' : ''}`}
        >
          <h5>Câu hỏi phổ biến</h5>
          <h4>Các câu hỏi thường gặp</h4>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        {/* Right panel containing an illustration with fade-in-up animation */}
        <div
          ref={imageRef}
          className={`${styles.faqRightImage} animate__animated ${imageInView ? 'animate__fadeInUp' : ''}`}
        >
          <img src={questionImage} alt="FAQs Illustration" className={styles.faqImage} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
