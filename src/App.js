import { Box } from '@material-ui/core';
import './App.css';
import DashBoard from './components/dash-board/DashBoard';
import TopBar from './components/header/top-bar/TopBar';
import Toolbar from './components/header/toolbar/Toolbar';
import DataTabs from './components/header/data-tabs/DataTabs';
import dashboardTitles from './data/dashBoardTitle.json';
import Zcenter from './components/z-center/Zcenter';
import IAMProfileInfo from './components/services-components/iam/IAMProfileInfo';
import IdentityProviders from './components/identity-providers/IdentityProviders';
import InviteUser from './components/services-components/iam/invite-user/InviteUser';

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
      <IAMProfileInfo/>
      <Zcenter/>
      <IdentityProviders/>
      {/* <InviteUser/> */}

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
