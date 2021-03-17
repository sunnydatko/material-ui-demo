// material ui
import { Avatar, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const CustomerIcon = ({ value }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid alignItems="center" container spacing={1}>
      {matchesMd && (
        <Grid item>
          <Avatar
            alt="Customer avatar"
            src={value.avatar}
            style={{
              backgroundColor: theme.palette.primary.dark,
              width: "50px",
              height: "50px",
            }}
          />
        </Grid>
      )}
      <Grid item>
        <Typography>
          {value.first_name} {value.last_name}
        </Typography>
        <Typography color="textSecondary" style={{ fontSize: "90%" }}>
          {value.email}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CustomerIcon;
