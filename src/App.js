import { Route, Routes, Navigate, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";

// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
