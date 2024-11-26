import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer for handling view events
import "animate.css"; // Import animate.css for CSS animations
import styles from "./ContactPlatform.module.css"; // Import the CSS module for styling
import ContactPlatformImage from "../../Assets/img/Contact.png"; // Import the image for the Contact section
import ToastMessage from "./ToastMessage"; // Import the ToastMessage component for displaying toast notifications

/**
 * The Contact component represents the contact form section of the platform.
 * This section allows users to submit their contact details and a message to the platform.
 * The component includes form validation, a toast notification system, and in-view animations.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact component.
 */
export default function Contact() {
  // Initial state for the form data, including name, phone, email, and message fields.
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  /**
   * State management for form data.
   *
   * @type {[Object, Function]}
   * @property {Object} formData - The current form data state.
   * @property {Function} setFormData - Function to update form data.
   */
  const [formData, setFormData] = useState(initialFormData);

  /**
   * State management for toast visibility.
   *
   * @type {[boolean, Function]}
   * @property {boolean} toastVisible - Boolean indicating if the toast message is visible.
   * @property {Function} setToastVisible - Function to update toast visibility.
   */
  const [toastVisible, setToastVisible] = useState(false);

  /**
   * State management for the toast message content.
   *
   * @type {[string, Function]}
   * @property {string} toastMessage - The content of the toast message.
   * @property {Function} setToastMessage - Function to update the toast message content.
   */
  const [toastMessage, setToastMessage] = useState("");

  /**
   * State management for the toast message type (Success or Error).
   *
   * @type {[string, Function]}
   * @property {string} toastType - The type of the toast message, either 'Success' or 'Error'.
   * @property {Function} setToastType - Function to update the toast message type.
   */
  const [toastType, setToastType] = useState("");

  /**
   * Using the useInView hook to detect when the contact image is in view.
   * This hook triggers the fade-in animation when the image enters the viewport.
   *
   * @type {Object}
   * @property {Function} ref - Ref callback to attach to the contact image container.
   * @property {boolean} inView - Boolean indicating if the contact image container is in view.
   */
  const { ref: ContactPlatformImageRef, inView: ContactPlatformImageInView } = useInView({
    triggerOnce: true, // Animation triggers only once
  });

  /**
   * Using the useInView hook to detect when the contact title is in view.
   * This hook triggers the fade-in animation when the title enters the viewport.
   *
   * @type {Object}
   * @property {Function} ref - Ref callback to attach to the contact title container.
   * @property {boolean} inView - Boolean indicating if the contact title container is in view.
   */
  const { ref: ContactPlatformTitleRef, inView: ContactPlatformTitleInView } = useInView({
    triggerOnce: true, // Animation triggers only once
  });

  /**
   * Handles input changes in the form and updates the form data state.
   *
   * @param {Object} e - The event object from the input change event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Preserve existing form data
      [name]: value, // Update the specific field that changed
    });
  };

  /**
   * Handles form submission and sends the form data to the server.
   * Upon successful submission, it displays a success toast message and resets the form.
   * If the submission fails, it displays an error toast message.
   *
   * @param {Object} e - The event object from the form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the server via POST request
    const response = await fetch("https://api.sheetmonkey.io/form/mg4LPQBKewrCbtZbMh1u5M", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(formData), // Convert form data to JSON format
    });

    // Handle server response
    if (response.ok) {
      setToastType("Success"); // Set toast type to 'Success'
      setToastMessage("Cảm ơn bạn đã đăng ký liên hệ tư vấn!"); // Display success message
      setFormData(initialFormData); // Reset the form data
    } else {
      setToastType("Error"); // Set toast type to 'Error'
      setToastMessage(`Gửi không thành công: ${response.status}`); // Display error message with response status
    }

    // Display toast message
    setToastVisible(true);

    // Hide toast after 3 seconds
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <>
      {/* Main section for the Contact Platform */}
      <section className={styles.contactPlatformContainer} id="contact">
        {/* Contact image with animation */}
        <div
          ref={ContactPlatformImageRef} // Ref to track when the image is in view
          className={`${styles.contactPlatformImage} animate__animated ${
            ContactPlatformImageInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
          }`}
        >
          <img
            src={ContactPlatformImage} // The contact image source
            alt="Contact" // Alt text for accessibility
            className={styles.imgContactPlatform} // Image styling
          />
        </div>

        {/* Contact title and form section */}
        <div
          ref={ContactPlatformTitleRef} // Ref to track when the title is in view
          className={`${styles.contactPlatformTitle} animate__animated ${
            ContactPlatformTitleInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
          }`}
        >
          <h1>LIÊN HỆ TƯ VẤN</h1> {/* Main contact title */}
          <h4>
            Hãy để{" "}
            <span className={styles.trendemyContactPlatform}>TRENDEMY</span> {/* Highlighted platform name */}
            giúp bạn giải đáp mọi thắc mắc!
          </h4>

          {/* Contact form */}
          <div className={styles.contactPlatformForm}>
            <form onSubmit={handleSubmit}>
              {/* Name input field */}
              <div className={styles.formGroupPlatform}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // Bind name input to form data state
                  onChange={handleChange} // Update state on change
                  placeholder="Họ và Tên *" // Placeholder text
                  required // Make the field required
                />
                <i className={`fas fa-user ${styles.iconContactPlatform}`}></i> {/* Icon for name input */}
              </div>

              {/* Phone input field */}
              <div className={styles.formGroupPlatform}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="^\d{10,11}$" // Validation pattern for phone numbers
                  value={formData.phone} // Bind phone input to form data state
                  onChange={handleChange} // Update state on change
                  placeholder="Số điện thoại *" // Placeholder text
                  required // Make the field required
                />
                <i className={`fas fa-phone ${styles.iconContactPlatform}`}></i> {/* Icon for phone input */}
              </div>

              {/* Email input field */}
              <div className={styles.formGroupPlatform}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email} // Bind email input to form data state
                  onChange={handleChange} // Update state on change
                  placeholder="Email *" // Placeholder text
                  required // Make the field required
                />
                <i className={`fas fa-envelope ${styles.iconContactPlatform}`}></i> {/* Icon for email input */}
              </div>

              {/* Message textarea field */}
              <div className={styles.formGroupPlatform}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // Bind message textarea to form data state
                  onChange={handleChange} // Update state on change
                  placeholder="Bạn cần tư vấn thêm về Trendemy, vui lòng để lại tin nhắn tại đây..." // Placeholder text
                  required // Make the field required
                ></textarea>
              </div>

              {/* Submit button */}
              <div className={styles.btnPlatform}>
                <button
                  className={styles.buttonRegisterContactPlatform}
                  type="submit" // Submit form on click
                >
                  Liên hệ tư vấn
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Toast message component to display success or error messages */}
      <ToastMessage
        message={toastMessage} // The message content for the toast
        type={toastType} // The type of the toast, either 'Success' or 'Error'
        visible={toastVisible} // Visibility state of the toast
        onClose={() => setToastVisible(false)} // Handler to close the toast
      />
    </>
  );
}
