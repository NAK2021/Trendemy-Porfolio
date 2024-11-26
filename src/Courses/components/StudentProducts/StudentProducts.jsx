import React, { useState } from "react";
import "animate.css"; // Import animate.css for CSS animations
import { useInView } from "react-intersection-observer"; // Import the useInView hook from react-intersection-observer for handling view events
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components from swiper/react
import "swiper/css"; // Import Swiper CSS
import "swiper/css/pagination"; // Import Swiper pagination CSS
import "swiper/css/navigation"; // Import Swiper navigation CSS
import { Pagination } from "swiper/modules"; // Import Swiper modules for pagination
import styles from "./StudentProducts.module.css"; // Import the CSS module for styling
import Data1 from "../../Assets/img/Data1.png"; 
import Data2 from "../../Assets/img/Data2.jpg"; 
import Data3 from "../../Assets/img/Data3.jpg"; 

/**
 * StudentProducts component for displaying a carousel of student projects.
 * This component shows a Swiper carousel with images of student projects,
 * including navigation buttons and animations when the component comes into view.
 * 
 * @component
 * @returns {JSX.Element} The rendered StudentProducts component.
 */
export default function StudentProducts() {
  /**
   * State to hold the Swiper instance.
   * 
   * @type {Object|null}
   */
  const [swiper, setSwiper] = useState(null);

  /**
   * Function to navigate to the previous slide.
   * This function is called when the previous button is clicked.
   * 
   * @function prevSlide
   * @returns {void}
   */
  const prevSlide = () => {
    if (swiper) swiper.slidePrev();
  };

  /**
   * Function to navigate to the next slide.
   * This function is called when the next button is clicked.
   * 
   * @function nextSlide
   * @returns {void}
   */
  const nextSlide = () => {
    if (swiper) swiper.slideNext();
  };

  /**
   * Intersection observer hook to trigger animation for the title element.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the title element.
   * @property {boolean} inView - Boolean indicating if the title element is in view.
   */
  const { ref: TitleContentsStudentProductsRef, inView: titleInView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  /**
   * Intersection observer hook to trigger animation for the Swiper container element.
   * 
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the Swiper container element.
   * @property {boolean} inView - Boolean indicating if the Swiper container element is in view.
   */
  const { ref: SwiperContainerRef, inView: SwiperInView } = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <section className={styles.containerStudentProducts} id="student-projects">
      {/* Title with fadeInUp animation when in view */}
      <h1
        ref={TitleContentsStudentProductsRef}
        className={`${styles.titleContentsStudentProducts} animate__animated ${
          titleInView ? "animate__fadeInUp" : ""
        }`}
      >
        Một số sản phẩm của học viên {/* Title text */}
      </h1>

      {/* Container for Swiper with fadeInUp animation when in view */}
      <div
        ref={SwiperContainerRef}
        className={`${styles.swiperContainer} animate__animated ${
          SwiperInView ? "animate__fadeInUp" : ""
        }`}
      >
        {/* Previous button */}
        <button className={styles.prevButton} onClick={prevSlide}>
          <i className="ri-arrow-left-s-line"></i> {/* Icon for previous button */}
        </button>

        {/* Swiper component */}
        <Swiper
          onSwiper={setSwiper} // Set swiper instance to state
          spaceBetween={30} // Space between slides
          pagination={{ clickable: true }} // Enable clickable pagination
          modules={[Pagination]} // Add Pagination module
          loop={true} // Enable loop
          className={styles.mySwiper} // Custom CSS class for Swiper component
        >
          {/* Swiper slides */}
          <SwiperSlide>
            <img
              src={Data1}
              alt="Student project 1"
              className={styles.imageStudentProduct} // Custom CSS class for slide image
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Data2}
              alt="Student project 2"
              className={styles.imageStudentProduct} // Custom CSS class for slide image
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Data3}
              alt="Student project 3"
              className={styles.imageStudentProduct} // Custom CSS class for slide image
            />
          </SwiperSlide>
        </Swiper>

        {/* Next button */}
        <button className={styles.nextButton} onClick={nextSlide}>
          <i className="ri-arrow-right-s-line"></i> {/* Icon for next button */}
        </button>
      </div>
    </section>
  );
}
