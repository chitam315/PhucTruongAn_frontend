
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Users/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route index path='' element={<Login/>}/>




   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
