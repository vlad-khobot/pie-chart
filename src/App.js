import { Box } from '@material-ui/core';
import './App.css';
import DashBoard from './components/dash-board/DashBoard';
import dashboardTitles from './data/dashBoardTitle.json';

function App() {
  const dashboards = Object.keys(dashboardTitles.master);

  return (
    <>
      {dashboards.map(dashboard => (
        <Box m={1} key={dashboard}>
          <h3>{dashboard}</h3>
          <DashBoard dashboard={dashboard} user={'master'} />
          <DashBoard dashboard={dashboard} user={'user'} />
        </Box>
      ))}
    </>
  );
}

export default App;
