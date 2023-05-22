// Material Dashboard 2 React layouts
// import Dashboard from "layouts/dashboard";
import ProjectStatus from "layouts/ProjectStatus";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
// import Actiontracker from "layouts/Action-Tracker/Actiontracker";
// import ActionTree from "layouts/Action-Tracker/ActionTree";
// import ActionApproval from "layouts/Action-Tracker/ActionApproval";
import SpendDashboard from "layouts/SpendDashboard/SpendDashboard";
import SavingDashboard from "layouts/SavingDashboard/SavingDashboard";
import FileManager from "layouts/FileManager/FileManager";
import DocManager from "layouts/FileManager/DocManager";
import MaturityAssessment from "layouts/FileManager/MaturityAssessment";
import EnterpriseModel from "layouts/FileManager/EnterpriseModel";
// import File from "layouts/FileManager/File";
// import CategoryTree from "layouts/CategoryTree/CategoryTree";
// import Helpdesk from "layouts/Helpdesk/Helpdesk";
// import Validation from "layouts/Validation/Validation";
// import ProjectStatistics from "layouts/ProjectStatistics/ProjectStatistics";
// @mui icons
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Icon from "@mui/material/Icon";
import SavingsIcon from "@mui/icons-material/Savings";
// import AccountTreeSharpIcon from "@mui/icons-material/AccountTreeSharp";
// import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
// import AdminPanel from "layouts/Admin/AdminPanel";
import Logout from "layouts/Logout/Logout";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "Home",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <DocManager />,
  },
  {
    type: "collapse",
    name: "Enterprise Model",
    key: "Enterprise Model",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/enterprise-model",
    component: <EnterpriseModel />,
  },
  {
    type: "collapse",
    name: "File Manager",
    key: "File-Manager",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/file-manager",
    component: <FileManager />,
  },
  {
    type: "collapse",
    name: "Maturity Assessment",
    key: "Maturity Assessment",
    icon: (
      <Icon fontSize="small">
        <ViewTimelineIcon />
      </Icon>
    ),
    route: "/maturity-assessment",
    component: <MaturityAssessment />,
  },
  // {
  //   type: "collapse",
  //   name: "Project Status",
  //   key: "tables",
  //   icon: (
  //     <Icon fontSize="small">
  //       <ViewTimelineIcon />
  //     </Icon>
  //   ),
  //   route: "/ProjectStatus",
  //   component: <ProjectStatus />,
  // },
  {
    type: "collapse",
    name: "Saving Dashboard",
    key: "Saving Dashboard",
    icon: (
      <Icon fontSize="small">
        <SavingsIcon />
      </Icon>
    ),
    route: "/saving-dashboard",
    component: <SavingDashboard />,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    // key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    // key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/",
    component: <SignIn />,
  },
  {
    route: "/logout",
    component: <Logout />,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    // key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  // {
  //   type: "collapse",
  //   name: "pdf",
  //   key: "pdf",
  //   icon: (
  //     <Icon fontSize="small">
  //       <ViewTimelineIcon />
  //     </Icon>
  //   ),
  //   route: "/pdf",
  //   component: ,
  // },
  // {
  //   type: "collapse",
  //   name: "Project Statistics",
  //   key: "Project-Statistics",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/project-statistics",
  //   component: <ProjectStatistics />,
  // },
  // {
  //   type: "collapse",
  //   name: "Validation",
  //   key: "Validation",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/validation",
  //   component: <Validation />,
  // },
  {
    type: "collapse",
    name: "Spend Dashboard",
    key: "Spend Dashboard",
    icon: (
      <Icon fontSize="small">
        <CurrencyExchangeIcon />
      </Icon>
    ),
    route: "/spend-dashboard",
    component: <SpendDashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Action Tracker",
  //   key: "Action-Tracker",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/actiontracker",
  //   component: <Actiontracker />,
  // },
  // {
  //   type: "collapse",
  //   name: "Action Tree",
  //   key: "Action-Tree",
  //   icon: (
  //     <Icon fontSize="small">
  //       <AccountTreeSharpIcon />
  //     </Icon>
  //   ),
  //   route: "/actiontree",
  //   component: <ActionTree />,
  // },
  // {
  //   type: "collapse",
  //   name: "File",
  //   key: "File",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/file",
  //   component: <File />,
  // },
  // {
  //   // type: "collapse",
  //   name: "Action Approval",
  //   key: "Action-Approval",
  //   route: "/actionapproval/:actionId",
  //   component: <ActionApproval />,
  // },
  // {
  //   // type: "collapse",
  //   // name: "Profile",
  //   // key: "profile",
  //   // icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  // // {
  // //   type: "collapse",
  // //   name: "Admin Panel",
  // //   key: "admin panel",
  // //   icon: <Icon fontSize="small">assignment</Icon>,
  // //   route: "/adminpanel",
  // //   component: <AdminPanel />,
  // // },
  // {
  //   type: "collapse",
  //   name: "Help Desk",
  //   key: "help-desk",
  //   icon: (
  //     <Icon fontSize="small">
  //       <HelpCenterIcon />
  //     </Icon>
  //   ),
  //   route: "/help-desk",
  //   component: <Helpdesk />,
  // },
];

export default routes;
