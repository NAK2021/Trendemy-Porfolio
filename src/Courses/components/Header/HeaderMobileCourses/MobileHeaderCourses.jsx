import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import styles from "./MobileHeaderCourses.module.css";
import Logo from "../../../Assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

/**
 * MobileHeaderCourses component - A responsive mobile header component with a dropdown menu and submenu.
 * 
 * This component provides a mobile-friendly header with:
 * - A logo that navigates back to the home page.
 * - A hamburger menu button to toggle the main menu.
 * - A category dropdown menu with expandable submenus.
 * - Navigation links with smooth scrolling for different sections on the page.
 * - A registration button that redirects to the registration page.
 *
 * @component
 * @example
 * return (
 *   <MobileHeaderCourses />
 * );
 * 
 *  @returns {JSX.Element} The MobileHeaderCourses component.
 */
export default function MobileHeaderCourses() {
    // State variables for menu and submenu handling
    const [menuOpen, setMenuOpen] = useState(false); // Controls main menu visibility
    const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false); // Controls submenu visibility
    const [activeDropDownSubmenu, setActiveDropDownSubmenu] = useState(null); // Tracks active submenu index
    const [showSubMenu, setShowSubMenu] = useState(false); //Controls submenu visibility

    /**
     * Toggles the visibility of the main menu.
     * 
     * @function
     */
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    /**
     * Toggles the visibility of the dropdown menu.
     * 
     * @function
     */
    const handleSubMenuClick = () => {
        setDropDownMenuOpen(!dropDownMenuOpen); 
    };

    /**
     * Toggles the visibility of the submenu within "Khóa học".
     * 
     * @function
     */
    const handleSubMenuToggle = () => setShowSubMenu(!showSubMenu);
   
    /**
     * Toggles the visibility of a specific submenu item based on its index.
     * 
     * @param {number} index - The index of the submenu item to toggle.
     * @param {Object} e - The event object.
     * @function
     */
    const toggleSubmenu = (index, e) => {
        e.stopPropagation(); // Prevents event bubbling
        setActiveDropDownSubmenu(activeDropDownSubmenu === index ? null : index);
    };

    /**
     * Redirects the user to the home page (Platform page).
     * 
     * @function
     */
     const handleBackPlatformClick = () => {
        window.location.href = "/";
      }

    /**
     * Handles redirection to the registration page.
     * 
     * @function
     */
    const handleRegistrationClick = () => {
        window.location.href = "/register";
    };

    /**
     * Array of dropdown menu items with titles and routes.
     * 
     * @type {Array<Object>}
     * @property {string} title - The title of the dropdown menu item.
     * @property {Array<Object>} items - Array of submenu items.
     * @property {string} items.name - The name of the submenu item.
     * @property {string} items.route - The route to navigate to when the submenu item is clicked.
     */
    const dropDownmenuItems = [
        {
            title: 'Phát triển web',
            items: [
                { name: 'JavaScript', route: '/courses/javascript' },
                { name: 'CSS', route: '/courses/css' },
                { name: 'PHP', route: '/courses/php' },
                { name: 'HTML', route: '/courses/html' },
                { name: 'React JS', route: '/courses/reactjs' },
                { name: 'ASP.NET Core', route: '/courses/aspnetcore' },
                { name: 'Angular', route: '/courses/angular' },
                { name: 'Next JS', route: '/courses/nextjs' },
                { name: 'Node JS', route: '/courses/nodejs' }
            ]
        },
        {
            title: 'Phát triển ứng dụng di động',
            items: [
                { name: 'Flutter', route: '/courses/flutter' },
                { name: 'Swift', route: '/courses/swift' },
                { name: 'Kotlin', route: '/courses/kotlin' },
                { name: 'SwiftUI', route: '/courses/swiftui' },
                { name: 'Lập trình Android', route: '/courses/android' },
                { name: 'Lập trình IOS', route: '/courses/ios' },
                { name: 'React Native', route: '/courses/reactnative' },
                { name: 'Dart', route: '/courses/dart' }
            ]
        },
        {
            title: 'Khoa học dữ liệu',
            items: [
                { name: 'Phân tích dữ liệu', route: '/courses/phan-tich-du-lieu' },
                { name: 'Deep learning', route: '/courses/deep-learning' },
                { name: 'Python', route: '/courses/python' },
                { name: 'LangChain', route: '/courses/langchain' },
                { name: 'Machine Learning', route: '/courses/machine-learning' },
                { name: 'Trí tuệ nhân tạo (AI)', route: '/courses/ai' }
            ]
        },
        {
            title: 'Kiểm tra phần mềm',
            items: [
                { name: 'Selenium Webdriver', route: '/courses/selenium' },
                { name: 'Automation Testing', route: '/courses/automation-testing' },
                { name: 'Microsoft Playwright', route: '/courses/playwright' },
                { name: 'Manual Testing', route: '/courses/manual-testing' },
                { name: 'Postman', route: '/courses/postman' },
                { name: 'Kiểm tra API', route: '/courses/api-testing' }
            ]
        },
        {
            title: 'Thiết kế & phát triển cơ sở dữ liệu',
            items: [
                { name: 'Lập trình cơ sở dữ liệu', route: '/courses/database-programming' },
                { name: 'PostgreSQL', route: '/courses/postgresql' },
                { name: 'SQL Server', route: '/courses/sqlserver' },
                { name: 'OracleSQL', route: '/courses/oraclesql' },
                { name: 'MongoDB', route: '/courses/mongodb' },
                { name: 'Apache Kafka', route: '/courses/kafka' },
                { name: 'MySQL', route: '/courses/mysql' }
            ]
        }
    ];

    return (
        <header className={styles.mobileHeaderCourses}>
            <div className={styles.mobileHeaderCoursesLogo}>
                <img src={Logo} alt="TrendemyMyLogo" onClick={handleBackPlatformClick}/>
            </div>
            <nav className={styles.mobileHeaderCoursesNav}>
                {/* Main menu toggle button */}
                <div
                    className={`${styles.mobileHeaderCoursesMenu} ${menuOpen ? styles.open : ""}`}
                    onClick={handleMenuClick}
                >
                    <GiHamburgerMenu className={styles.mobileHeaderCoursesIconMenu}/>
                </div>
                <div className={`${styles.mobileHeaderCoursesMenuContainer} ${menuOpen ? styles.open : ""}`} >
                    {/* Close menu button */}
                    <div className={styles.mobileHeaderCoursesIconMenuClose} onClick={handleMenuClick}>
                        <IoMdClose />
                    </div>
                    {/* Main menu items */}
                    <ul className={`${styles.mobileHeaderCoursesContainerMenu} ${menuOpen ? styles.open : ""}`}>
                        {/* Category menu item with submenu */}
                        <li>
                            <div className={`${styles.mobileHeaderCoursesMenuItem} ${dropDownMenuOpen ? styles.active : ''}`} onClick={handleSubMenuClick}>
                            <a className={styles.mobileHeaderCoursesCategory}>Chủ đề</a>
                            {dropDownMenuOpen ? (
                                    <IoIosArrowUp className={styles.mobileHeaderCoursesIconMenu}/>
                                ) : (
                                    <IoIosArrowDown className={styles.mobileHeaderCoursesIconMenu}/>
                                )}
                            </div>
                            {/* Submenu */}
                            {dropDownMenuOpen && (
                                <ul className={styles.mobileHeaderCoursesDropdownMenu}>
                                    {/* Mapping through submenu items */}
                                    {dropDownmenuItems.map((dropDownMenu, index) => (
                                        <li key={index} className={styles.mobileHeaderCoursesDropdownLinkContainer}>
                                            {/* Submenu item with toggle */}
                                            <div className={`${styles.mobileHeaderCoursesDropdownLink} ${activeDropDownSubmenu === index ? styles.active : ''}`}
                                                 onClick={(e) => toggleSubmenu(index, e)}>
                                                {dropDownMenu.title}
                                                {/* Arrow icon indicating submenu state */}
                                                {activeDropDownSubmenu === index ? (
                                                    <IoIosArrowUp className={styles.mobileHeaderCoursesIconArrow}/>
                                                ) : (
                                                    <IoIosArrowDown className={styles.mobileHeaderCoursesIconArrow}/>
                                                )}
                                            </div>
                                            {/* Submenu items */}
                                            {activeDropDownSubmenu === index && (
                                                <ul className={styles.mobileHeaderCoursesDropDownSubmenu}>
                                                    {dropDownMenu.items.map((dropDownSubMenu, subIndex) => (
                                                        <li key={subIndex} className={styles.mobileHeaderCoursesDropDownSubmenuItem}>
                                                            {/* Link to specific course */}
                                                            <RouterLink to={dropDownSubMenu.route} className={styles.mobileHeaderCoursesDropDownSubmenuLink}>{dropDownSubMenu.name}</RouterLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Navigation links */}
                        <li>
                            <RouterLink to="/">Về chúng tôi</RouterLink>
                        </li>
                        <li className={styles.activeNavLink}>
                            <RouterLink to="/Courses" onClick={handleSubMenuToggle}>
                               Khóa học
                                {/* Toggle submenu arrow icon */}
                                {showSubMenu ? (
                                    <IoIosArrowUp className={styles.mobileHeaderCoursesIconArrow} />
                                ) : (
                                    <IoIosArrowDown className={styles.mobileHeaderCoursesIconArrow} />
                                )}
                            </RouterLink>
                              {/* Display submenu if showSubMenu is true */}
                            {showSubMenu && (
                              <ul className={styles.mobileHeaderCoursesSubMenu}>
                                <li>
                                  <ScrollLink to="course-goals" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Mục tiêu khóa học
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="course-overview" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Tổng quan khóa học
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="learning-path" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Lộ trình học
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="course-content" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Nội dung khóa học
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="lecturers" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Giảng viên
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="target-audience" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Ai nên tham gia
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="student-projects" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Sản phẩm học viên
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="related-courses" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Khóa học tham khảo
                                  </ScrollLink>
                                </li>
                                <li>
                                  <ScrollLink to="contact-advice" smooth={true} offset={-60} duration={50} spy={true} activeClass={styles.active}>
                                    Liên hệ tư vấn
                                  </ScrollLink>
                                </li>
                             </ul>
                          )}
                        </li>
                        <li>
                            <RouterLink to="/Lecturer" >Giảng viên</RouterLink>
                        </li>
                         {/* Registration button */}
                        <li>
                            <button className={styles.mobileHeaderCoursesBtnRegister} onClick={handleRegistrationClick}>Đăng Ký</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}




