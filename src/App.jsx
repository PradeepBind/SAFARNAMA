import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [isloggedin, setLoggedin] = useState(false);
  const [readval, setVal] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = sessionStorage.getItem("key");
    if (data && data !== "") setLoggedin(true);
  }, []);

  const handleData = (event) => setVal(event.target.value);

  const check = (event) => {
    if (event.target.value === "LoggedIn") {
      sessionStorage.setItem("key", JSON.stringify({ readval }));
      setVal("");
      setLoggedin(true);
      navigate("/");  // After login, go to home or wherever you want
    } else {
      sessionStorage.removeItem("key");
      setLoggedin(false);
      navigate("/login"); // After logout, go to login page
    }
  };

  const isHome = location.pathname === "/";

  return (
    <div className={darkMode ? "dark-mode app-wrapper" : "app-wrapper"}>
      <header className="navbar-custom">
        <img
          src="/ProjLogo.jpg"
          alt="Logo"
          width="50"
          height="50"
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/ShowcasePage">Showcase</Link>
          <Link to="/SearchPage">Search</Link>
          <Link to="/TourPage">Tour</Link>
          <Link to="/BookTourPage">BookTour</Link>
          <Link to="/Category">Category</Link>
          {!isloggedin && <Link to="/login"></Link>}

           
        
        </nav>

        <div className="nav-actions">
          <input
            type="text"
            value={readval}
            onChange={handleData}
            placeholder="Enter name"
            disabled={isloggedin}
          />
          {isloggedin ? (
            <button onClick={check} value="LoggedOut">
              Logout
            </button>
          ) : (
            <button onClick={check} value="LoggedIn">
              Login
            </button>
          )}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "\u2600\ufe0f Light" : "\ud83c\udf19 Dark"}
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* Agar home page ho to direct Outlet, warna wrapper se */}
        {isHome ? (
          <Outlet />
        ) : (
          <div className="content-wrapper">
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
