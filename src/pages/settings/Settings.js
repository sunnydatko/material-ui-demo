import React from "react";

// material ui
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";

import { CloudUpload } from "@material-ui/icons";

// helpers
import profilePhoto from "../../assets/sunny.png";

import Alert from "../../components/shared/Alert";

const Settings = () => {
  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom>
        Account Settings
      </Typography>
      <Grid container direction="row" spacing={4}>
        <Grid item lg={8}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item container spacing={2}>
                  <Grid item md={6} sm={12}>
                    <TextField
                      label="Full Name"
                      id="name"
                      value="Sunny Datko"
                      variant="outlined"
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item style={{ marginBottom: "0.5em" }} md={6} sm={12}>
                    <TextField
                      label="Role"
                      id="role"
                      value="Software Engineer"
                      variant="outlined"
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item style={{ marginBottom: "0.5em" }} md={6} sm={12}>
                    <TextField
                      label="Location"
                      id="location"
                      value="San Diego, CA"
                      variant="outlined"
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item style={{ marginBottom: "0.5em" }} md={6} sm={12}>
                    <TextField
                      label="Company"
                      id="company"
                      value="Eastridge Workforce Technology"
                      variant="outlined"
                      fullWidth
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item style={{ marginBottom: "0.5em" }} sm>
                    <TextField
                      label="Bio"
                      id="bio"
                      value="Software Engineer at Eastridge Workforce Technology"
                      variant="outlined"
                      rows={4}
                      fullWidth
                      multiline
                    ></TextField>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Button
                    color="primary"
                    onClick={handleSave}
                    variant="contained"
                  >
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container lg={4}>
          <Card>
            <CardContent>
              <Avatar
                alt="profile photo"
                src={profilePhoto}
                style={{ height: "200px", width: "200px", margin: "30px" }}
              />
              <Box textAlign="center">
                <Button
                  color="primary"
                  startIcon={<CloudUpload />}
                  variant="contained"
                >
                  Upload
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        open={open}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Account settings updated
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings;
