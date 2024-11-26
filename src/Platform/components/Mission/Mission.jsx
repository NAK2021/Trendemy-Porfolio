import React from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer
import "animate.css"; // Import animate.css for animations
import styles from "./Mission.module.css"; // Import CSS module for styling
import ImgMission from "../../Assets/img/Mission.png";

/**
 * Mission component for the Trendemy platform.
 * This component displays the mission section of the website with animations,
 * including the mission image, contents, and background elements.
 *
 * @component
 * @returns {JSX.Element} The rendered Mission component.
 */
export default function Mission() {
  /**
   * Hook to track if the mission image is in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the mission image container.
   * @property {boolean} inView - Boolean indicating if the mission image container is in view.
   */
  const { ref: MissionPlatformImgRef, inView: MissionPlatformImgInView } =
    useInView({
      triggerOnce: true, // Animation should trigger only once
    });

  /**
   * Hook to track if the mission contents are in view and apply animation.
   *
   * @type {Object}
   * @property {function} ref - Ref callback to attach to the mission contents container.
   * @property {boolean} inView - Boolean indicating if the mission contents container is in view.
   */
  const {
    ref: MissionPlatformContentsRef,
    inView: MissionPlatformContentsInView,
  } = useInView({
    triggerOnce: true, // Animation should trigger only once
  });

  return (
    <section className={styles.missionPlatformContainer} id="mission">
      {/* Mission image container with animation */}
      <div
        ref={MissionPlatformImgRef} // Reference to the mission image container
        className={`${styles.missionPlatformImg} animate__animated ${
          MissionPlatformImgInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <img src={ImgMission} alt="Mission" className={styles.imgPlatform} />
        {/* Mission image */}
      </div>

      {/* Mission contents container with animation */}
      <div
        ref={MissionPlatformContentsRef} // Reference to the mission contents container
        className={`${styles.missionPlatformContents} animate__animated ${
          MissionPlatformContentsInView ? "animate__fadeInUp" : "" // Apply fadeInUp animation if in view
        }`}
      >
        <h1 className={styles.titleOnePlatform}>SỨ MỆNH</h1>
        {/* Mission title */}
        <p className={styles.contentPlatform}>
          Sứ mệnh của TRENDEMY là cung cấp cơ hội học tập linh hoạt, chất lượng
          cao cho mọi người. Chúng tôi cam kết mang đến các khóa học đa dạng,
          nâng cao kiến thức và kỹ năng, giúp người học tự tin theo đuổi đam mê
          và sẵn sàng cho thách thức nghề nghiệp.
        </p>
        {/* Mission content paragraph */}
        <h4 className={styles.titleTwoPlatform}>
          TRENDEMY - Nâng tầm tri thức, mở lối tương lai.
        </h4>
        {/* Secondary mission title */}
      </div>
    </section>
  );
}
