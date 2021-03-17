// material ui
import { Box, Grid, Typography } from "@material-ui/core";

const Titlebar = ({ title, actions }) => {
  return (
    <Box paddingY={2}>
      <Grid alignItems="center" container justify="space-between">
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item>{actions}</Grid>
      </Grid>
    </Box>
  );
};

export default Titlebar;
