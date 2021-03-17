import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

// components
import Status from "components/core/Status";
import CustomerCard from "components/customers/CustomerCard";

// helpers
import INVOICE_DATA from "helpers/invoiceData.json";
import CUSTOMER_DATA from "helpers/customerData.json";
import logoSvg from "assets/rocket.svg";

const InvoiceDetail = (props) => {
  const { match } = props;

  const invoice = INVOICE_DATA.filter(
    (data) => data.invoice_number === match.params.id
  )[0];

  const customer = CUSTOMER_DATA.filter(
    (data) => data.customer_id === invoice.customer_id
  )[0];

  return (
    <Container>
      <Box paddingTop={3}>
        <Grid container justify="space-around">
          <Grid item sm={12} lg={8} style={{ paddingBottom: "24px" }}>
            <Card>
              <CardContent>
                {invoice ? (
                  <>
                    <Grid container style={{ paddingTop: "24px" }}>
                      <Grid item container style={{ paddingBottom: "48px" }}>
                        <Grid item style={{ paddingRight: "12px" }}>
                          <img
                            alt="Logo"
                            src={logoSvg}
                            style={{ height: "75px", width: "75px" }}
                          />
                        </Grid>
                        <Grid item>
                          <Typography variant="h1">Company Name</Typography>
                          <Typography variant="h6" color="textSecondary">
                            Invoice
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={5}
                      style={{ paddingBottom: "48px" }}
                    >
                      <Grid item xs={4} md={3}>
                        <Typography noWrap variant="caption">
                          Invoice Number
                        </Typography>
                        <Typography noWrap>{invoice.invoice_number}</Typography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <Typography noWrap variant="caption">
                          Date of Issue
                        </Typography>
                        <Typography>{invoice.date_processed}</Typography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <Typography display="block" variant="caption">
                          Status
                        </Typography>
                        <Status value={invoice.status}>{invoice.status}</Status>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <Typography display="block" variant="caption">
                          Amount Due
                        </Typography>
                        <Typography>
                          {"$" +
                            parseInt(invoice.amount)
                              .toFixed(2)
                              .toLocaleString()}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      style={{ padding: "20px 0" }}
                    >
                      <Typography variant="caption">Project Fees</Typography>
                      <Typography variant="caption">
                        {"$" +
                          parseInt(invoice.amount).toFixed(2).toLocaleString()}
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      style={{ paddingTop: "20px" }}
                    >
                      <Typography display="block" variant="caption">
                        Subtotal
                      </Typography>
                      <Typography display="block" variant="caption">
                        {"$" +
                          parseInt(invoice.amount).toFixed(2).toLocaleString()}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      style={{ paddingBottom: "20px" }}
                    >
                      <Typography display="block" variant="caption">
                        Tax
                      </Typography>
                      <Typography display="block" variant="caption">
                        $0.00
                      </Typography>
                    </Grid>
                    <Divider />
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      style={{ padding: "20px 0" }}
                    >
                      <Typography>Total Due</Typography>
                      <Typography>
                        {"$" +
                          parseInt(invoice.amount).toFixed(2).toLocaleString()}
                      </Typography>
                    </Grid>
                  </>
                ) : (
                  <Typography>Not found</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={12} lg={3}>
            <CustomerCard customer={customer} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InvoiceDetail;
