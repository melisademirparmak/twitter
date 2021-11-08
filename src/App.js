import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widgest from './components/Widgest';
import './css/style.css';

function App() {
  return (
    <div className="container-large app">
      <SideBar />
      <Feed />
      <Widgest />
    </div>
  );
}

export default App;
