import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./components/Auth";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import Slider from "./components/Slider";
import Teachers from "./pages/Teachers";

const App = () => {
  return (
    <Router>
      <div>
        <AuthProvider>
          <div className="flex_content">
            <div>
              <Slider />
            </div>
            <div className="home_main">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <RequireAuth>
                      <Home />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/students"
                  element={
                    <RequireAuth>
                      <Posts />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/teachers"
                  element={
                    <RequireAuth>
                      <Teachers />
                    </RequireAuth>
                  }
                />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/profile"
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
