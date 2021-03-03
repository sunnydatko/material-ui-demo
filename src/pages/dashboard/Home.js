// material ui
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { AccessTime, ArrowUpward } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";

// components
import InvoiceList from "../invoices/InvoiceList";
import Status from "../../components/shared/Status";

// charts
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "../../helpers/charts";
import ChartistGraph from "react-chartist";

const cards = [
  {
    title: "Sales Today",
    value: "15.4K",
    change: "1K",
    percentageChange: "16%",
  },
  {
    title: "Pending Orders",
    value: "145",
    change: "200",
    percentageChange: "14%",
  },
  {
    title: "Total Revenue",
    value: "$44,400",
    change: "$3K",
    percentageChange: "3.2%",
  },
  {
    title: "New Customers",
    value: "1.3K",
    change: "500",
    percentageChange: "2.2%",
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Box paddingTop="40px">
        <Grid container direction="column">
          <Grid
            container
            direction="row"
            justify="space-between"
            spacing={2}
            style={{ paddingBottom: "20px" }}
          >
            {cards.map((card) => (
              <Grid item lg={3} sm={6} xs={12}>
                <Card
                  style={{
                    height: "200px",
                  }}
                >
                  <CardHeader subheader={card.title} />
                  <CardContent>
                    <Box paddingBottom="30px">
                      <Typography variant="h1">{card.value}</Typography>
                    </Box>
                    <Typography variant="subtitle">
                      <Grid container alignItems="center">
                        <Grid item>
                          <Box paddingRight="2px"></Box>
                        </Grid>
                        <Grid item>
                          <Typography>
                            <span
                              style={{
                                color: "rgb(76, 175, 80)",
                                background: "rgba(76, 175, 80, 0.1)",
                                marginRight: "8px",
                                padding: '2px'
                              }}
                            >
                              + {card.percentageChange}
                            </span>
                            Since last week
                          </Typography>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            direction="row"
            spacing={2}
            style={{ paddingBottom: "20px" }}
          >
            <Grid item xs={12} lg={6}>
              <Card>
                <CardHeader subheader="Daily Sales" />
                <CardContent>
                  <ChartistGraph
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                </CardContent>
                <CardActions>
                  <AccessTime style={{ fill: theme.palette.grey[600] }} />
                  <Typography variant="subtitle">
                    updated 4 minutes ago
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card>
                <CardHeader subheader="Monthly Sales" />
                <CardContent>
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardContent>
                <CardActions>
                  <AccessTime style={{ fill: theme.palette.grey[600] }} />
                  <Typography variant="subtitle">
                    updated 4 minutes ago
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container direction="row" style={{ paddingBottom: "40px" }}>
            <Grid item xs={12}>
              <Card style={{ minHeight: "400px" }}>
                <CardHeader subheader="Latest Invoices" />
                <CardContent>
                  <InvoiceList isLatest={true} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
