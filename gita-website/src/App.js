import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import Courses from "./pages/Courses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginPage" element={<LoginPage/>}/>
          <Route path="/registerPage" element={<RegisterPage/>}/>
          <Route path="/courses" element={<Courses/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
