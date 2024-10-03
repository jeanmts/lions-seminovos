import './App.css'
import './App.css';
import { Content } from './Pages/Content/content';
import { Main } from './Pages/Main/main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Content" element={<Content />} />
    </Routes>
  );
}

export default App;

