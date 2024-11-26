import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer
import "animate.css"; // Import animate.css for animations
import styles from "./ContactCourse.module.css"; // Import CSS module for styling
import ContactCourseImage from "../../Assets/img/Contact.png";
import ToastMessage from "./ToastMessage"; // Import toast message component

/**
 * ContactCourse component for displaying a contact form and background image.
 * This component includes a form for users to contact the Trendemy platform,
 * with animations for the background image and title, and a toast message for
 * form submission feedback.
 * 
 * @component
 * @returns {JSX.Element} The rendered ContactCourse component.
 */
export default function ContactCourse() {
  /**
   * Initial form data state.
   * 
   * @type {Object}
   * @property {string} name - Name input value.
   * @property {string} phone - Phone input value.
   * @property {string} email - Email input value.
   * @property {string} message - Message textarea value.
   */
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  /**
   * State to manage form data.
   * 
   * @type {Object}
   * @property {Object} formData - Current form data.
   * @property {Function} setFormData - Function to update form data state.
   */
  const [formData, setFormData] = useState(initialFormData);

  /**
   * State to manage toast visibility.
   * 
   * @type {boolean}
   * @property {boolean} toastVisible - Boolean indicating if the toast message is visible.
   * @property {Function} setToastVisible - Function to update toast visibility state.
   */
  const [toastVisible, setToastVisible] = useState(false);

  /**
   * State to manage toast message content.
   * 
   * @type {string}
   * @property {string} toastMessage - The content of the toast message.
   * @property {Function} setToastMessage - Function to update toast message content.
   */
  const [toastMessage, setToastMessage] = useState("");

  /**
   * State to manage toast message type (Success or Error).
   * 
   * @type {string}
   * @property {string} toastType - Type of the toast message ("Success" or "Error").
   * @property {Function} setToastType - Function to update toast message type.
   */
  const [toastType, setToastType] = useState("");

  /**
   * Intersection observer hook for the background image animation.
   * 
   * @type {Object}
   * @property {Function} ref - Ref callback to attach to the background image container.
   * @property {boolean} inView - Boolean indicating if the background image container is in view.
   */
  const { ref: BackgroundCourseRef, inView: BackgroundCourseInView } =
    useInView({
      triggerOnce: true, // Animation should trigger only once
    });

  /**
   * Intersection observer hook for the title animation.
   * 
   * @type {Object}
   * @property {Function} ref - Ref callback to attach to the title container.
   * @property {boolean} inView - Boolean indicating if the title container is in view.
   */
  const { ref: ContactCourseTitleRef, inView: ContactCourseTitleInView } =
    useInView({
      triggerOnce: true, // Animation should trigger only once
    });

  /**
   * Handle input change and update form data state.
   * 
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
   * @returns {void}
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handle form submission.
   * 
   * Sends form data to the server and displays a toast message based on the response.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   * @returns {void}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the server
    const response = await fetch(
      "https://api.sheetmonkey.io/form/mg4LPQBKewrCbtZbMh1u5M",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // Handle response
    if (response.ok) {
      setToastType("Success"); // Set toast type to success
      setToastMessage("Cảm ơn bạn đã đăng ký liên hệ tư vấn!"); // Set success message
      setFormData(initialFormData); // Reset form after successful submission
    } else {
      setToastType("Error"); // Set toast type to error
      setToastMessage(`Gửi không thành công: ${response.status}`); // Set error message
    }

    // Show toast message
    setToastVisible(true);
    // Hide toast after 3 seconds
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    // Main section for Contact Course
    <>
      <section className={styles.contactCourse} id="contact-advice">
        <div
          ref={BackgroundCourseRef} // Reference for background image container
          className={`${styles.backgroundContactCourse} animate__animated ${
            BackgroundCourseInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
          }`}
        >
          <img
            src={ContactCourseImage} // Contact image
            alt="Liên hệ"
            className={styles.imageContactCourse}
          />
        </div>

        <div
          ref={ContactCourseTitleRef} // Reference for title container
          className={`${styles.contactCourseTitle} animate__animated ${
            ContactCourseTitleInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
          }`}
        >
          <h1>LIÊN HỆ TƯ VẤN</h1>
          <h4>
            Hãy để{" "}
            <span className={styles.trendemyContactCourse}>TRENDEMY</span> giúp
            bạn giải đáp mọi thắc mắc!
          </h4>

          <div className={styles.contactCourseForm}>
            <form onSubmit={handleSubmit}>
              {/* Input for Name */}
              <div className={styles.formGroupCourse}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // Bind name input to form data state
                  onChange={handleChange} // Handle input change
                  placeholder="Họ và Tên *"
                  required
                />
                <i className={`fas fa-user ${styles.iconContactCourse}`}></i>
              </div>

              {/* Input for Phone */}
              <div className={styles.formGroupCourse}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="^\d{10,11}$" // Phone number pattern validation
                  value={formData.phone} // Bind phone input to form data state
                  onChange={handleChange} // Handle input change
                  placeholder="Số điện thoại *"
                  required
                />
                <i className={`fas fa-phone ${styles.iconContactCourse}`}></i>
              </div>

              {/* Input for Email */}
              <div className={styles.formGroupCourse}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email} // Bind email input to form data state
                  onChange={handleChange} // Handle input change
                  placeholder="Email *"
                  required
                />
                <i className={`fas fa-envelope ${styles.iconContactCourse}`}></i>
              </div>

              {/* Textarea for Message */}
              <div className={styles.formGroupCourse}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // Bind message textarea to form data state
                  onChange={handleChange} // Handle input change
                  placeholder="Bạn cần tư vấn thêm về Trendemy, vui lòng để lại tin nhắn tại đây..."
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <div className={styles.btnCourse}>
                <button
                  className={styles.buttonRegisterContactCourse}
                  type="submit"
                >
                  Liên hệ tư vấn
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Toast message component */}
      <ToastMessage
        message={toastMessage} // Toast message content
        type={toastType} // Toast message type
        visible={toastVisible} // Toast visibility state
        onClose={() => setToastVisible(false)} // Handle close event for toast
      />
    </>
  );
}
