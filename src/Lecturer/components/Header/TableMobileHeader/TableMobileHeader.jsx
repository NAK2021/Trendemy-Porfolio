import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./TableMobileHeader.module.css";
import Logo from "../../../Assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

/**
 * MobileHeaderLecturer component - Displays the mobile header for the lecturer section of the website.
 * 
 * This component includes:
 * - A logo that redirects to the Platform page when clicked.
 * - A hamburger menu icon to toggle the visibility of the main menu.
 * - A dropdown menu that shows submenu items based on selected categories.
 * - Navigation links including a button for registration.
 * 
 * @component
 * @example
 * return (
 *   <MobileHeaderLecturer />
 * );
 * 
 * @returns {JSX.Element} The MobileHeaderLecturer component.
 */
export default function MobileHeaderLecturer() {
    // State variables for menu and submenu handling
    const [menuOpen, setMenuOpen] = useState(false); // Controls main menu visibility
    const [subMenuOpen, setSubMenuOpen] = useState(false); // Controls submenu visibility
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Tracks active submenu index

    /**
     * Toggles the visibility of the main menu.
     * This function is called when the hamburger menu icon is clicked.
     * @function handleMenuClick
     * @returns {void}
     * @example
     * <div onClick={handleMenuClick}>...</div>
     */
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    /**
     * Toggles the visibility of the submenu.
     * This function is called when the "Chủ đề" menu item is clicked.
     * @function handleSubMenuClick
     * @returns {void}
     * @example
     * <div onClick={handleSubMenuClick}>Chủ đề</div>
     */
    const handleSubMenuClick = () => {
        setSubMenuOpen(!subMenuOpen); 
    };
   
    /**
     * Toggles the visibility of a specific submenu item.
     * This function is called when a submenu item is clicked.
     * @function toggleSubmenu
     * @param {number} index - The index of the submenu item to toggle.
     * @param {React.MouseEvent} e - The click event.
     * @returns {void}
     * @example
     * <div onClick={(e) => toggleSubmenu(index, e)}>...</div>
     */
    const toggleSubmenu = (index, e) => {
        e.stopPropagation(); // Prevents event bubbling
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    /**
     * Redirects to the Platform page.
     * This function is called when the logo is clicked.
     * @function handleBackPlatformClick
     * @returns {void}
     * @example
     * <img src={Logo} onClick={handleBackPlatformClick} />
     */
     const handleBackPlatformClick = () => {
        window.location.href = "/";
      }

    /**
     * Redirects to the registration page.
     * This function is called when the "Đăng Ký" button is clicked.
     * @function handleRegistrationClick
     * @returns {void}
     * @example
     * <button onClick={handleRegistrationClick}>Đăng Ký</button>
     */
    const handleRegistrationClick = () => {
        window.location.href = "/register";
    };

    // Array of submenu items with titles and routes
    const submenuItems = [
        {
            title: 'Phát triển web',
            items: [
              { name: 'Lê Hoàng Việt Tuấn', route: '/Lecturer/Mr.Le Hoang Viet Tuan' },
              { name: 'Trần Khải Phong', route: '/Lecturer/Mr.Tran Khai Phong' },
              { name: 'Dương Thế Ngọc', route: '/Lecturer/Mr.Duong The Ngoc' },
              { name: 'Huynh Tan Phat', route: '/Lecturer/Mr.Huynh Tan Phat' },
              { name: 'Huynh Tan Hung', route: '/Lecturer/Mr.Huynh Tan Hung' }
            ]
        },
        {
            title: 'Phát triển ứng dụng di động',
            items: [
              { name: 'Lê Hoàng Việt Tuấn', route: '/Lecturer/Mr.Le Hoang Viet Tuan' },
              { name: 'Trần Khải Phong', route: '/Lecturer/Mr.Tran Khai Phong' },
              { name: 'Dương Thế Ngọc', route: '/Lecturer/Mr.Duong The Ngoc' },
              { name: 'Huynh Tan Phat', route: '/Lecturer/Mr.Huynh Tan Phat' },
              { name: 'Huynh Tan Hung', route: '/Lecturer/Mr.Huynh Tan Hung' }
            ]
        },
        {
            title: 'Khoa học dữ liệu',
            items: [
              { name: 'Lê Hoàng Việt Tuấn', route: '/Lecturer/Mr.Le Hoang Viet Tuan' },
              { name: 'Trần Khải Phong', route: '/Lecturer/Mr.Tran Khai Phong' },
              { name: 'Dương Thế Ngọc', route: '/Lecturer/Mr.Duong The Ngoc' },
              { name: 'Huynh Tan Phat', route: '/Lecturer/Mr.Huynh Tan Phat' },
              { name: 'Huynh Tan Hung', route: '/Lecturer/Mr.Huynh Tan Hung' }
            ]
        },
        {
            title: 'Kiểm tra phần mềm',
            items: [
              { name: 'Lê Hoàng Việt Tuấn', route: '/Lecturer/Mr.Le Hoang Viet Tuan' },
              { name: 'Trần Khải Phong', route: '/Lecturer/Mr.Tran Khai Phong' },
              { name: 'Dương Thế Ngọc', route: '/Lecturer/Mr.Duong The Ngoc' },
              { name: 'Huynh Tan Phat', route: '/Lecturer/Mr.Huynh Tan Phat' },
              { name: 'Huynh Tan Hung', route: '/Lecturer/Mr.Huynh Tan Hung' }
            ]
        },
        {
            title: 'Thiết kế & phát triển cơ sở dữ liệu',
            items: [
              { name: 'Lê Hoàng Việt Tuấn', route: '/Lecturer/Mr.Le Hoang Viet Tuan' },
              { name: 'Trần Khải Phong', route: '/Lecturer/Mr.Tran Khai Phong' },
              { name: 'Dương Thế Ngọc', route: '/Lecturer/Mr.Duong The Ngoc' },
              { name: 'Huynh Tan Phat', route: '/Lecturer/Mr.Huynh Tan Phat' },
              { name: 'Huynh Tan Hung', route: '/Lecturer/Mr.Huynh Tan Hung' }
            ]
        }
    ];

    return (
        <header className={styles.mobileHeaderLecturer}>
            <div className={styles.mobileHeaderLecturerLogo}>
                <img src={Logo} alt="TrendemyMyLogo" onClick={handleBackPlatformClick}/>
            </div>
            <nav className={styles.mobileHeaderLecturerNav}>
                {/* Main menu toggle button */}
                <div
                    className={`${styles.mobileHeaderLecturerMenu} ${menuOpen ? styles.open : ""}`}
                    onClick={handleMenuClick}
                >
                    <GiHamburgerMenu className={styles.mobileHeaderLecturerIconMenu}/>
                </div>
                <div className={`${styles.mobileHeaderLecturerMenuContainer} ${menuOpen ? styles.open : ""}`} >
                    {/* Close menu button */}
                    <div className={styles.mobileHeaderLecturerIconMenuClose} onClick={handleMenuClick}>
                        <IoMdClose />
                    </div>
                    {/* Main menu items */}
                    <ul className={`${styles.mobileHeaderLecturerContainerMenu} ${menuOpen ? styles.open : ""}`}>
                        {/* Category menu item with submenu */}
                        <li>
                            <div className={`${styles.mobileHeaderLecturerMenuItem} ${subMenuOpen ? styles.active : ''}`} onClick={handleSubMenuClick}>
                            <a className={styles.mobileHeaderLecturerCategory}>Chủ đề</a>
                            {subMenuOpen ? (
                                    <IoIosArrowUp className={styles.mobileHeaderLecturerIconMenu}/>
                                ) : (
                                    <IoIosArrowDown className={styles.mobileHeaderLecturerIconMenu}/>
                                )}
                            </div>
                            {/* Submenu */}
                            {subMenuOpen && (
                                <ul className={styles.mobileHeaderLecturerDropdownMenu}>
                                    {/* Mapping through submenu items */}
                                    {submenuItems.map((submenu, index) => (
                                        <li key={index} className={styles.mobileHeaderLecturerDropdownLinkContainer}>
                                            {/* Submenu item with toggle */}
                                            <div className={`${styles.mobileHeaderLecturerDropdownLink} ${activeSubmenu === index ? styles.active : ''}`}
                                                 onClick={(e) => toggleSubmenu(index, e)}>
                                                {submenu.title}
                                                {/* Arrow icon indicating submenu state */}
                                                {activeSubmenu === index ? (
                                                    <IoIosArrowUp className={styles.mobileHeaderLecturerIconArrow}/>
                                                ) : (
                                                    <IoIosArrowDown className={styles.mobileHeaderLecturerIconArrow}/>
                                                )}
                                            </div>
                                            {/* Submenu items */}
                                            {activeSubmenu === index && (
                                                <ul className={styles.mobileHeaderLecturerSubmenu}>
                                                    {submenu.items.map((item, subIndex) => (
                                                        <li key={subIndex} className={styles.mobileHeaderLecturerSubmenuItem}>
                                                            {/* Link to specific course */}
                                                            <RouterLink to={item.route} className={styles.mobileHeaderLecturerSubmenuLink}>{item.name}</RouterLink>
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
                        <li>
                            <RouterLink to="/Courses" >Khóa học</RouterLink>
                        </li>
                        <li className={styles.activeNavLink}>
                            <RouterLink to="/Lecturer" >Giảng viên</RouterLink>
                        </li>
                         {/* Registration button */}
                        <li>
                            <button className={styles.mobileHeaderLecturerBtnRegister} onClick={handleRegistrationClick}>Đăng Ký</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


