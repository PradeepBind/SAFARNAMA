// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import HomePage from "./components/HomePage";
// import ShowcasePage from "./components/ShowcasePage";
// import SearchPage from "./components/SearchPage";
// import TourPage from "./components/TourPage";
// import BookTourPage from "./components/BookTourPage";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<HomePage />} /> {/* Default home route */}
//         {/* Removed duplicate HomePage route */}
//         <Route path="ShowcasePage" element={<ShowcasePage />} />
//         <Route path="SearchPage" element={<SearchPage />} />
//         <Route path="TourPage" element={<TourPage />} />
//         <Route path="BookTourPage" element={<BookTourPage />} />
//         <Route path="Register" element={<Register />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );




import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./components/HomePage";
import ShowcasePage from "./components/ShowcasePage";
import SearchPage from "./components/SearchPage";
import TourPage from "./components/TourPage";
import BookTourPage from "./components/BookTourPage";
import Register from "./components/Register";
import Category from "./components/Category";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="ShowcasePage" element={<ShowcasePage />} />
        <Route path="SearchPage" element={<SearchPage />} />
        <Route path="TourPage" element={<TourPage />} />
        <Route path="BookTourPage" element={<BookTourPage />} />
        <Route path="login" element={<Register />} />
        <Route path="Category" element={<Category />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
);
