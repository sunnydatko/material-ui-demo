import { useState } from "react";

// material ui
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu as MuiMenu,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Notifications as NotificationsIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "350px",
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

const Notifications = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleShow = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notifications = [
    {
      name: "Remy Sharp",
      avatar:
        "https://robohash.org/pariatursapienteporro.png?size=300x300&set=set1",
      action: "deleted an invoice",
      time: "2 min ago",
    },
    {
      name: "Marc Degenhardt",
      avatar: "https://robohash.org/utomnisut.png?size=300x300&set=set1",
      action: "created an invoice",
      time: "7 min ago",
    },
    {
      name: "Kacy Lewing",
      avatar: "https://robohash.org/omnishiclibero.png?size=300x300&set=set1",
      action: "paid an invoice",
      time: "12 min ago",
    },
  ];

  return (
    <>
      <IconButton
        aria-controls="notifications-menu"
        aria-haspopup="true"
        aria-label="notifications"
        onClick={handleShow}
      >
        <Badge badgeContent={3} color="primary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        getContentAnchorEl={null}
        id="notifications-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
        onClose={handleClose}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <List className={classes.root}>
          <Typography align="center" gutterBottom>
            3 New Notifications
          </Typography>
          <Box style={{ cursor: "pointer" }}>
            {notifications.map((notification) => {
              return (
                <>
                  <Divider />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={notification.name}
                        src={notification.avatar}
                        style={{
                          backgroundColor: theme.palette.primary.dark,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.name}
                      secondary={
                        <>
                          <Typography variant="body2">
                          {notification.action}
                          </Typography>
                          <Typography variant="body2">{notification.time}</Typography>
                        </>
                      }
                    />
                  </ListItem>
                </>
              );
            })}
          </Box>
        </List>
        <Box textAlign="center">
          <Button>See all notifications</Button>
        </Box>
      </MuiMenu>
    </>
  );
};

export default Notifications;
