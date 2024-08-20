import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Models } from "./components/Models";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Models" element={<Models />} />
      </Routes>
    </>
  );
}

export default App;
