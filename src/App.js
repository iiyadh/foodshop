import './App.css';
import Header from'./components/Header';
import Display from'./components/Display';
import Card from './components/Card';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path='card' element={<Card/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
