import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SeeMorePage from "./pages/SeeMorePage";
import DetailProductPage from "./pages/DetailProductPage";
import Guarantee from "./components/Guarantee/Guarantee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route index path="/see-more" element={<SeeMorePage />} />
        <Route index path="/detail" element={<DetailProductPage />} />
        <Route index path="/baohanh" element={<Guarantee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
