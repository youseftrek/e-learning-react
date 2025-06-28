import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import About from "./pages/About";
import HomeLayout from "./components/layouts/Home/HomeLayout";
import AuthLayout from "./components/layouts/Auth/AuthLayout";
import Contact from "./pages/Contact";
import Favourite from "./pages/Favourite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
