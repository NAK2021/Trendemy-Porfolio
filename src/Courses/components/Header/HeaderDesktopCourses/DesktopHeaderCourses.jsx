import React, { useState, useEffect } from "react";
import styles from "./DesktopHeaderCourses.module.css";
import logoCourse from "../../../Assets/img/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

/**
 * DesktopHeader component for the Trendemy platform.
 * This component provides a responsive header for desktop devices with a logo,
 * navigation menu, and submenu items.
 * 
 * @component
 * @returns {JSX.Element} The rendered DesktopHeader component.
 */
export default function DesktopHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropDownCoursesOpen, setDropDownCoursesOpen] = useState(false); // Controls Khóa học submenu visibility
    const [activeDropDownSubmenu, setActiveDropDownSubmenu] = useState(null); // Tracks active submenu index

    useEffect(() => {
        const handleScroll = () => {
            const secondModule = document.getElementById('should-learn');
            if (secondModule) {
                const secondModuleTop = secondModule.getBoundingClientRect().top;
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition >= secondModuleTop + secondModule.offsetHeight) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackCourseClick = () => {
        window.location.href = "/";
    };

    const handleRegistrationClick = () => {
        window.location.href = "/register";
    };

    // Mock submenu items for "Khóa học"
    const courseSubmenuItems = [
        {
            title: 'Front-end Development',
            items: [
                { name: 'HTML & CSS', route: '/courses/html-css' },
                { name: 'JavaScript', route: '/courses/javascript' },
                { name: 'React', route: '/courses/react' }
            ]
        },
        {
            title: 'Back-end Development',
            items: [
                { name: 'Node.js', route: '/courses/nodejs' },
                { name: 'Python', route: '/courses/python' },
                { name: 'Java', route: '/courses/java' }
            ]
        },
        {
            title: 'Mobile Development',
            items: [
                { name: 'React Native', route: '/courses/react-native' },
                { name: 'Flutter', route: '/courses/flutter' },
                { name: 'Swift', route: '/courses/swift' }
            ]
        }
    ];

    const handleMouseEnterCourses = () => {
        setDropDownCoursesOpen(true);
    };

    const handleMouseLeaveCourses = () => {
        setDropDownCoursesOpen(false);
        setActiveDropDownSubmenu(null);
    };

    const handleMouseEnterSubmenu = (index) => {
        setActiveDropDownSubmenu(index);
    };

    const handleMouseLeaveSubmenu = () => {
        setActiveDropDownSubmenu(null);
    };

    return (
        <header className={`${styles.desktopHeaderCourse} ${isScrolled ? styles.desktopHeaderCourseScrolled : ''}`}>
            {/* Logo section */}
            <div className={styles.desktopHeaderCourseLogo}>
                <img src={logoCourse} alt="Logo Trendemy" onClick={handleBackCourseClick} />
            </div>
            {/* Navigation section */}
            <nav className={styles.desktopHeaderCourseNav}>
                <ul className={styles.desktopHeaderCourseMenu}>
                    <li className={styles.desktopHeaderCourseMenuItem}>
                        <RouterLink to="/">Về chúng tôi</RouterLink>
                    </li>
                    <li
                        className={`${styles.desktopHeaderCourseMenuItem} ${dropDownCoursesOpen ? styles.active : ''}`}
                        onMouseEnter={handleMouseEnterCourses}
                        onMouseLeave={handleMouseLeaveCourses}
                    >
                        <RouterLink to="/Courses" className={styles.desktopHeaderCourseActive}>
                            Khóa học
                        </RouterLink>
                        {dropDownCoursesOpen ? (
                            <IoIosArrowUp className={styles.iconMenu} />
                        ) : (
                            <IoIosArrowDown className={styles.iconMenu} />
                        )}
                        {dropDownCoursesOpen && (
                            <ul className={styles.desktopHeaderCourseDropdownMenu}>
                                {courseSubmenuItems.map((submenu, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => handleMouseEnterSubmenu(index)}
                                        onMouseLeave={handleMouseLeaveSubmenu}
                                        className={styles.desktopHeaderCourseDropdownLinkContainer}
                                    >
                                        <div
                                            className={`${styles.desktopHeaderCourseDropdownLink} ${activeDropDownSubmenu === index ? styles.active : ''}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {submenu.title} <MdKeyboardArrowRight className={styles.desktopHeaderCourseIconArrow} />
                                        </div>
                                        {activeDropDownSubmenu === index && (
                                            <ul className={styles.desktopHeaderCourseDropDownSubmenu}>
                                                {submenu.items.map((item, subIndex) => (
                                                    <li key={subIndex} className={styles.desktopHeaderCourseDropDownSubmenuItem}>
                                                        <RouterLink to={item.route} className={styles.desktopHeaderCourseDropDownSubmenuLink}>
                                                            {item.name}
                                                        </RouterLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li className={styles.desktopHeaderCourseMenuItem}>
                        <RouterLink to="/Lecturer">Giảng viên</RouterLink>
                    </li>
                    {/* Registration button */}
                    <li className={styles.desktopHeaderCourseMenuItem}>
                        <button className={styles.desktopHeaderCourseBtnRegister} onClick={handleRegistrationClick}>
                            Đăng ký
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
