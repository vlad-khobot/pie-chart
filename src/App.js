import { Box } from '@material-ui/core';
import './App.css';
import DashBoard from './components/dash-board/DashBoard';
import TopBar from './components/header/top-bar/TopBar';
import Toolbar from './components/header/toolbar/Toolbar';
import DataTabs from './components/header/data-tabs/DataTabs';
import dashboardTitles from './data/dashBoardTitle.json';
import ProfileCard from './components/z-center/profile/profile-card/ProfileCard';
import OrganizationCard from './components/z-center/organization/OrganizationCard';
import AlertsCard from './components/z-center/alerts/AlertsCard';
import ServiceCard from "./components/z-center/services-cards/ServiceCard";
import ProfileInfoPage from './components/z-center/profile/profile-info-page/ProfileInfoPage';
import Zcenter from './components/z-center/Zcenter';

function App() {
  const dashboards = Object.keys(dashboardTitles.master);

  return (
    <>
      <TopBar />
      <div className="navigation-container">
        <DataTabs dashboards={dashboards} />
        <DashBoard dashboard={dashboards[0]} user={'master'} />
        <Toolbar />
      </div>
      <ProfileInfoPage/>
      <Zcenter/>

      {/* {dashboards.map(dashboard => (
        <Box m={1} key={dashboard}>
          <h3>{dashboard}</h3>
          <p>Master org</p>
          <DashBoard dashboard={dashboard} user={'master'} />
          <p>All users</p>
          <DashBoard dashboard={dashboard} user={'user'} />
        </Box>
      ))} */}
    </>
  );
}

export default App;
