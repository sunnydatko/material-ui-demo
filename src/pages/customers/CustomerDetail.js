// material ui
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

// components
import CustomerInvoiceList from "./CustomerInvoiceList";

// data
import CUSTOMER_DATA from "../../helpers/customerData.json";

const CustomerDetail = ({ match }) => {
  const theme = useTheme();

  const customer = CUSTOMER_DATA.filter(
    (data) => data.customer_id === Number(match.params.id)
  )[0];

  return (
    <Container maxWidth="xl">
      <Box paddingTop={3}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Card style={{ minHeight: 250 }}>
              <CardContent>
                <Typography variant="h2">
                  {customer.first_name} {customer.last_name}
                </Typography>
                <Typography gutterBottom>Phone: {customer.phone}</Typography>
                <Typography gutterBottom>
                  Email: <Link>{customer.email}</Link>
                </Typography>
                <Typography>Address: </Typography>
                <Typography noWrap> {customer.address}</Typography>
                <Typography gutterBottom noWrap>
                  {customer.city}, {customer.state} {customer.postal_code}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} style={{ paddingBottom: "12px" }}>
            <Card style={{ minHeight: 250 }}>
              <CardContent>
                <Avatar
                  alt="Customer photo"
                  src={customer.avatar}
                  style={{
                    backgroundColor: theme.palette.primary.dark,
                    width: "175px",
                    height: "175px",
                    margin: "0px auto",
                    marginTop: "20px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <CustomerInvoiceList customer={customer} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomerDetail;
