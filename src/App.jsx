
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

// Router
import { Routes, Route } from 'react-router-dom';

// Screens
import { UsersScreen, RecordScreen } from './Screens';

function App() {

  return (
    <Routes>
      <Route path="/" element={<UsersScreen />} />
      <Route path="/about/:id" element={<RecordScreen />} />
    </Routes>
  )
}

export default App
