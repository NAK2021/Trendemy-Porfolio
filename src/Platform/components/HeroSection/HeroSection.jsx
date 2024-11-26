import React from "react";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import user from "../../Assets/img/userHeroSection.png";
import styles from "../HeroSection/HeroSection.module.css";

/**
 * HeroSection component for the Trendemy platform.
 * This component displays the hero section of the website with animations,
 * including the title, subtitle, description, register button, and images.
 * 
 * @component
 * @returns {JSX.Element} The rendered HeroSection component.
 */
export default function HeroSection() {
    /**
    * Hook to track if the hero section is in view and apply animation.
    * 
    * @type {Object}
    * @property {function} ref - Ref callback to attach to the hero section container.
    * @property {boolean} inView - Boolean indicating if the hero section container is in view.
    */
    const { ref: AnimationHeroSectionPlatformRef, inView: AnimationHeroSectionPlatformInView } = useInView({ triggerOnce: true });

    /**
     * Handle button click to scroll to the contact section.
     * This function smoothly scrolls the page to the contact section when
     * the "Tham gia ngay" button is clicked.
     * @function handleButtonClick
     * @returns {void}
     * @example 
     * When the button is clicked, the page will scroll smoothly to the contact section
     * <button onClick={handleButtonClick}>Tham gia ngay</button>
     */
    const handleBtnregistrationClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    /**
     * Handle button click to navigate to the "Xem thêm" page.
     * 
     * This function is triggered when the "Xem thêm" page URL, effectively
     * navigating the user to that page.
     * 
     * @function handleBtnSeeMoreClick
     * @return {void}
     * 
     * @example 
     * When the button is clicked, the user will navigated to the "Xem thêm" page
     * <button onClick={handleBtnSeeMoreClick}>See more</button>
     */
    const handleBtnSeeMoreClick = () => {
        window.location.href = "/See more";
    }

    return (
        <section className={styles.heroSectionPlatform} id="heroSection">
            {/* Title section */}
            <div ref={AnimationHeroSectionPlatformRef}
                 className={`animate__animated ${AnimationHeroSectionPlatformInView ? 'animate__fadeInUp' : ''} ${styles.heroSectionPlatformContainer}`}>
                 <h1 className={styles.heroSectionPlatformTitle}>
                     Học theo phong cách phát triển theo thời đại
                 </h1>
                 <p className={styles.heroSectionPlatformContent}>
                     Biến việc học thành phong cách sống của bạn. Đổi mới
                     sáng tạo và đột phá trong từng bài học với Trendemy, nơi 
                     bạn không chỉ học mà còn sống và thăng hoa cùng tri thức.
                 </p>
            {/* Register button */}
                 <div className= {styles.heroSectionPlatformContainerBtn}>
                    <button onClick={handleBtnregistrationClick} 
                            className={styles.heroSectionPlatformBtnRegister}>
                            Tham gia ngay
                    </button>
                 </div>
            </div>
            {/* Image */}
            <div className={styles.heroSectionPlatformContainerImg}>
                    <img src={user} alt="User" className={styles.heroSectionPlatformUser}/>
            </div>
        </section>
    );
}