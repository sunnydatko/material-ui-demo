// material ui
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Typography,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const CustomerDetail = ({ customer }) => {
  const history = useHistory();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader subheader="Customer" />
      <CardContent>
        <Avatar
          alt="Customer photo"
          src={customer.avatar}
          style={{
            backgroundColor: theme.palette.primary.dark,
            width: "175px",
            height: "175px",
            margin: "0px auto",
            marginBottom: "24px",
          }}
        />
        <Box paddingBottom={2}>
          <Typography align="center" style={{ fontWeight: 600 }}>
            {customer.first_name} {customer.last_name}
          </Typography>
          <Typography align="center">
            <Link>{customer.email}</Link>
          </Typography>
          <Typography align="center">{customer.phone}</Typography>
        </Box>
        <Divider />
        <Box paddingTop={2}>
          <Typography style={{ fontWeight: 600, paddingBottom: 6 }}>
            Billing Address
          </Typography>
          <Typography noWrap> {customer.address}</Typography>
          <Typography noWrap>
            {customer.city}, {customer.state} {customer.postal_code}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => history.push(`/customer/${customer.customer_id}`)}
        >
          {" "}
          View Customer
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomerDetail;
