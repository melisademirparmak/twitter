import SideBar from './components/SideBar';
import Feed from './components/Feed';
import './css/style.css';

function App() {
  return (
    <div className="container-large app">
      <SideBar />
      <Feed />
    </div>
  );
}

export default App;
