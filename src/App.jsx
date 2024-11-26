import Platform from "./pages/Platform/Platform";
import Courses from "./pages/Courses/Courses";
import Lecturer from "./pages/Lecturer/Lecturer";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route>
          <Route index element={<Platform/>}/>
          <Route path="Courses" element={<Courses/>}/>
          <Route path="Lecturer" element={<Lecturer/>}/>
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
