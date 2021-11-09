import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import './css/style.css';

function App() {
  return (
    <div className="container-large app">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
