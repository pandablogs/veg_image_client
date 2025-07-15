import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RecipeList from './RecipeList.jsx';
import { Toaster } from 'react-hot-toast';
import App2 from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} ></Route>
        {/* <Route path='/' element={<App2 />} ></Route> */}
        <Route path='/recipe-list' element={<RecipeList />} ></Route>
      </Routes>
    </Router>
    <Toaster />
  </StrictMode>,
)
