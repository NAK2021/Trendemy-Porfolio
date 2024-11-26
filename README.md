### TRENDEMY_FRONTEND Documentation

**Introduction**

1. Overview: TRENDEMY_FRONTEND is an online learning application built with React. This project provides a learning platfrom with various courses, lecturer information, and admin to manage courses and lecturer.
2. Technologies used:

- ReactJS
- CSS Modules
- React Router
- Axios
- Node.js
- Express

3. Libraries used:

- "@fortawesome/fontawesome-free": "^6.5.2",
- "@testing-library/jest-dom": "^5.17.0",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "animate.css": "^4.1.1",
- "aos": "^2.3.4",
- "axios": "^1.7.2",
- "bootstrap": "^5.3.3",
- "react": "^18.3.1",
- "react-bootstrap": "^2.10.2",
- "react-countup": "^6.5.3",
- "react-dom": "^18.3.1",
- "react-icons": "^5.2.1",
- "react-intersection-observer": "^9.10.3",
- "react-router-dom": "^6.23.1",
- "react-scripts": "^5.0.1",
- "react-scroll": "^1.9.0",
- "remixicon": "^4.2.0",
- "swiper": "^11.1.5",
- "web-vitals": "^2.1.4",
- "wowjs": "^1.1.3"
  **Installation**
  Prerequisites:

1. Node.js (v20.14.0 or later)
2. NPM or Yarn
   **Usage**
3. Basic intructions

- Platform Page: Provides an overview of the educational platform.
- Courses Page: Displays a list of courses, allows users to search.
- Lecturer Page: Provides detailed information about lecturers.
  **Folder Structure**

1. Folder Description
   TRENDEMY_FRONTEND
   │ node_modules
   │ public
   │
   └───src
   ├───Courses
   │ ├───Assets
   │ │ ├───fonts
   │ │ └───img
   │ └───components
   │ ├───ContactCourse
   | | |**ContactCourse.jsx
   | | |**ContactCourse.module.css
   | | |**ToastMessage.jsx
   | | |**ToastMessage.Module.css
   │ ├───CourseCard
   | | |**CourseCard.jsx
   | | |**CourseCard.module.css
   │ ├───FeedbackStudent
   | | |**feedbackStudent.jsx
   | | |**feedbackStudent.module.css
   │ ├───CourseContent
   | | |**CourseContent.jsx
   | | |**CourseContent.module.css
   │ ├───CourseObjectives
   | | |**CourseObjectives.jsx
   | | |**CourseObjectives.module.css
   │ ├───Footer
   | | |**Footer.jsx
   | | |**Footer.module.css
   │ ├───Header
   | | |**HeaderDesktopCourses
   | | | |**DesktopHeaderCourses.jsx
   | | | |**DesktopHeaderCourses.module.css
   | | |**HeaderMobileCourses
   | | | |**MobileHeaderCourses.jsx
   | | | |**MobileHeaderCourses.module.css
   | | |**Header.jsx
   │ ├───HeroSection
   | | |**HeroSection.jsx
   | | |**HeroSection.module.css
   │ ├───LearningPath
   | | |**GridiconsStory.js
   | | |**LearningPath.jsx
   | | |**LearningPath.module.css
   │ ├───LecturerCourses
   | | |**LecturerCourses.jsx
   | | |**LecturerCourses.module.css
   │ ├───OverviewCourse
   | | |**OverviewCourse.jsx
   | | |**OverviewCourse.module.css
   │ ├───StudentProducts
   | | |**StudentProducts.jsx
   | | |**StudentProducts.module.css
   │ └───TakeCourse
   | | |**TakeCourse.jsx
   | | |**TakeCourse.module.css
   │ ├───WhyShouldLearn
   | | |**WhyShouldLearn.jsx
   | | |**WhyShoudLearn.module.css  
   ├───Lecturer
   │ ├───Assets
   │ │ ├───fonts
   │ │ └───img
   │ └───components
   │ ├───Footer
   | | |**Footer.jsx
   | | |**Footer.module.css
   │ ├───Header
   | | |**DesktopHeader
   | | | |**DesktopHeader.jsx
   | | | |**DesktopHeader.module.css
   | | |**TableMobileHeader
   | | | |**TableMobileHeader.jsx
   | | | |**TableMobileHeader.module.css
   | | |**Header.jsx
   │ ├───HeroSection
   | | |**HeroSection.jsx
   | | |**HeroSection.module.css
   │ ├───InstructorInformation
   | | |**InstructorInformation.jsx
   | | |**InstructorInformation.module.css
   │ └───LecturerDetail
   | | |**LecturerDetail.jsx
   | | |**LecturerDetail.module.css
   ├───pages
   │ ├───Course
   | | |**Course.jsx
   | | |**Course.module.css
   │ ├───Lecturer
   | | |**Lecturer.jsx
   | | |**Lecturer.module.css
   │ └───Platform
   | | |**Platform.jsx
   | | |**Platform.module.css
   ├───Platform
   │ ├───Assets
   │ │ ├───fonts
   │ │ └───img
   │ └───components
   │ ├───ChoiceReason
   | | |**ChoiceReason.jsx
   | | |**ChoiceReason.module.css
   │ ├───Contact
   | | |**ContactPlatform.jsx
   | | |**ContactPlatform.module.css
   | | |**ToastMessage.jsx
   | | |**ToastMessage.module.css
   │ ├───CoursesSection
   | | |**CoursesSection.jsx
   | | |**CoursesSection.module.css
   │ ├───FAQ
   | | |**FAQ.jsx
   | | |**FAQ.module.css
   │ ├───FeedbackSection
   | | |**FeedbackSection.jsx
   | | |**FeedbackSection.module.css
   │ ├───Footer
   | | |**Footer.jsx
   | | |**Footer.module.css
   │ ├───Header
   | | |**DesktopHeader
   | | | |**DesktopHeader.jsx
   | | | |**DesktopHeader.module.css
   | | |**MobileHeader
   | | | |**MobileHeader.jsx
   | | | |**MobileHeader.module.css
   | | |**Header.jsx
   │ ├───HeroSection
   | | |**HeroSection.jsx
   | | |**HeroSection.module.css
   │ ├───Mission
   | | |**Mission.jsx
   | | |**Mission.module.css
   │ ├───Statistics
   | | |**Statistics.jsx
   | | |**Statistics.module.css
   │ ├───TrendemyEduSection
   | | |**TrendemyEduSection.jsx
   | | |**TrendemyEduSection.module.css
   │ └───TrendemyVisionSection
   | | |**TrendemyVisionSection.jsx
   | | |**TrendemyVisionSection.module.css
   ├───App.jsx
   ├───App.test.js
   ├───index.css
   ├───index.js
   ├───reportWebVitals.js
   └───setupTests.js
   ├───.gitignore
   ├───package-lock.json
   ├───package.json
   └───README.md
2. Key Files

- index.js: The entry point of the React application
- App.js: Configures the routes for the Platform, Courses, and Lecturer pages.
  **API Documentation**
  ...

  **How to run project**

1. After cloning, navigate to the project's directory:
   cd project-name
2. Run the following command to install the dependencies:
   npm install
3. Once the dependencies are installed, you can run the project using:
   npm start
