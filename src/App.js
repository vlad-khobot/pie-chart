import './App.css';
import DashBoard from './components/dash-board/dashBoard';

function App() {
  return (
    <>
      <DashBoard dashboardNumber={1} />
      <DashBoard dashboardNumber={2} />
    </>
  );
}

export default App;
