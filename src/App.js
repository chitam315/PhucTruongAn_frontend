import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
