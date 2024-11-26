import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./DesktopHeader.module.css";
import logoPlatform from "../../../Assets/img/logo.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

/**
 * DesktopHeaderLecturer component for the Trendemy platform.
 * This component provides a responsive header for desktop devices with a logo,
 * navigation menu, and submenu items.
 * 
 * @component
 * @returns {JSX.Element} The rendered DesktopHeaderLecturer component.
 */
export default function DesktopHeaderLecturer() {
    const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleBackPlatformClick = () => {
        window.location.href = "/";
    };

    const handleRegistrationClick = () => {
        window.location.href = "/register";
    };

    const handleMouseEnterMenu = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setDropDownMenuOpen(true);
    };

    const handleMouseLeaveMenu = () => {
        const timeout = setTimeout(() => {
            setDropDownMenuOpen(false);
        }, 200);
        setHoverTimeout(timeout);
    };

    const handleMouseEnterDropdown = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
    };

    const handleMouseLeaveDropdown = () => {
        setDropDownMenuOpen(false);
    };

    // Submenu items with only titles and no items
    const submenuItems = [
        {
            title: 'Lê Hoàng Việt Tuấn',
            items: []
        },
        {
            title: 'Trần Khải Phong',
            items: []
        },
        {
            title: 'Dương Thế Ngọc',
            items: []
        }
    ];

    return (
        <header className={styles.desktopHeaderLecturer}>
            {/* Logo Trendemy */}
            <div className={styles.desktopHeaderLecturerLogo}>
                <img src={logoPlatform} alt="Logo Trendemy" onClick={handleBackPlatformClick} />
            </div>
            <nav className={styles.desktopHeaderLecturerNav}>
                <ul className={styles.desktopHeaderLecturerMenu}>
                    <li className={styles.desktopHeaderLecturerMenuItem}>
                        <RouterLink to="/">Về chúng tôi</RouterLink>
                    </li>
                    <li className={styles.desktopHeaderLecturerMenuItem}>
                        <RouterLink to="/Courses">Khóa học</RouterLink>
                    </li>
                    <li
                        className={`${styles.desktopHeaderLecturerMenuItem} ${styles.desktopHeaderLecturerMenuItemWithDropdown}`}
                        onMouseEnter={handleMouseEnterMenu}
                        onMouseLeave={handleMouseLeaveMenu}
                    >
                        <span className={styles.desktopHeaderLecturerActive}>Giảng viên</span>
                        {dropDownMenuOpen ? 
                            <IoIosArrowUp className={`${styles.iconMenu} ${styles.iconMenuActive}`} /> 
                            : 
                            <IoIosArrowDown className={`${styles.iconMenu} ${styles.iconMenuInactive}`} />
                        }
                        {dropDownMenuOpen && (
                            <ul 
                                className={styles.desktopHeaderLecturerDropdownMenu}
                                onMouseEnter={handleMouseEnterDropdown}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                {submenuItems.map((submenu, index) => (
                                    <li
                                        key={index}
                                        className={styles.desktopHeaderLecturerDropdownLinkContainer}
                                    >
                                        <div className={styles.desktopHeaderLecturerDropdownLink}>
                                            {submenu.title} 
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li className={styles.desktopHeaderLecturerMenuItem}>
                        <button className={styles.desktopHeaderLecturerBtnRegister} onClick={handleRegistrationClick}>Đăng ký</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
