import './App.css';
import { Route, Routes } from 'react-router-dom';
import Destination1 from './destinations/Destination1';
import Destination2 from './destinations/Destination2';
import NotFound from './NotFound';
import Start from './Start';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/dest1' element={<Destination1 />} />
      <Route path='/dest2' element={<Destination2 />} />
      <Route path='/not-found' element={<NotFound />} />
    </Routes>
  );
}

export default App;
