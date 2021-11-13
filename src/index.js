import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Explore from './routes/Explore';
import Notifications from './routes/Notifications';
import Messages from './routes/Messages';
import BookMarks from './routes/BookMarks';
import Lists from './routes/Lists';
import More from './routes/More';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/home" exact element={<App />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/Notifications" element={<Notifications />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/BookMarks" element={<BookMarks />} />
      <Route path="/Lists" element={<Lists />} />
      <Route path="/More" element={<More />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
