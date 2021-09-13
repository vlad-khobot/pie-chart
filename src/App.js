import { Box } from '@material-ui/core';
import './App.css';
import DashBoard from './components/dash-board/DashBoard';
import TopBar from './components/header/top-bar/TopBar';
import Toolbar from './components/header/toolbar/Toolbar';
import DataTabs from './components/header/data-tabs/DataTabs';
import dashboardTitles from './data/dashBoardTitle.json';
import ProfileCard from './components/iam-dashboards/profile/ProfileCard';
import OrganizationCard from './components/iam-dashboards/organization/OrganizationCard';
import AlertsCard from './components/iam-dashboards/notifications/AlertsCard';
import EdgeServicesCard from './components/edge-services-cards/EdgeServiceCard';
import ServieCard from './components/edge-services-cards/ServiceCard';

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
      <div className="demo-container">
        <div className="demo-item">
          <OrganizationCard />
          <ProfileCard />
          <AlertsCard />
        </div>
        <div className="demo-item">
          <EdgeServicesCard />
          <ServieCard/>
        </div>
      </div>


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
