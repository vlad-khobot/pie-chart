import { Box } from '@material-ui/core';
import './App.css';
import DashBoard from './components/dash-board/DashBoard';
import Header from './components/header/Header';
import TabsBar from './components/tabs-bar/TabsBar';
import dashboardTitles from './data/dashBoardTitle.json';

function App() {
  const dashboards = Object.keys(dashboardTitles.master);

  return (
    <>
      <Header/>
      <TabsBar dashboards={dashboards}/>
      {dashboards.map(dashboard => (
        <Box m={1} key={dashboard}>
          <h3>{dashboard}</h3>
          <p>Master org</p>
          <DashBoard dashboard={dashboard} user={'master'} />
          <p>All users</p>
          <DashBoard dashboard={dashboard} user={'user'} />
        </Box>
      ))}
    </>
  );
}

export default App;
