// ** MUI Imports
import Grid from "@mui/material/Grid";
import AdminPannel from "../../Styles/AdminPannelWrapper";
import Achivement from "../components/Achivement";
import MonthlyOverview from "../components/MonthlyOverView";
import WeeklyOverview from "../components/WeeklyOverview";
import TotalEarning from "../components/TotalEarning";
import CardStatsVertical from "../../Styles/CardStatsVertical";
import SalesByCountries from "../components/SalesByContry";
import DepositWithdraw from "../components/DepositeAndWithdraw";
import CustomersTable from "../components/CustomersTable";
import { ThemeProvider, createTheme } from "@mui/material";
import { customTheme, darkTheme } from "../them/customeThem";
import "./Admin.css";


const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#312d4b',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

// bg-[#28243d]
const Dashboard = () => {
  return (
    <div className="adminContainer px-10">
      <ThemeProvider theme={customTheme}>
        <AdminPannel>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Achivement />
            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <WeeklyOverview />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$25.6k"
                    // icon={<Poll />}
                    color="success"
                    trendNumber="+42%"
                    title="Total Profit"
                    subtitle="Weekly Profit"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$78"
                    title="Refunds"
                    trend="negative"
                    color="secondary"
                    trendNumber="-15%"
                    subtitle="Past Month"
                    // icon={<CurrencyUsd />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="862"
                    trend="negative"
                    trendNumber="-18%"
                    title="New Project"
                    subtitle="Yearly Project"
                    // icon={<BriefcaseVariantOutline />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="15"
                    color="warning"
                    trend="negative"
                    trendNumber="-18%"
                    subtitle="Last Week"
                    title="Sales Queries"
                    // icon={<HelpCircleOutline />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SalesByCountries />
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <DepositWithdraw />
            </Grid>
            <Grid item xs={12}>
              <CustomersTable />
            </Grid>
          </Grid>
        </AdminPannel>
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
