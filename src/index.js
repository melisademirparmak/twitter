import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Explore from './routes/Explore';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/home" exact element={<App />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
