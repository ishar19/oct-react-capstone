
import './App.css'
import Login from './pages/login'
import Genre from './pages/genre'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Widgets from './pages/widgets'
function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/genre" element={<Genre />} />
          <Route path='/widgets' element={<Widgets />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
