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
import { Message as MessageIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "400px",
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

const messages = [
  {
    alt: "Remy Sharp",
    src: "https://robohash.org/doloremquenonet.png?size=300x300&set=set1",
    primary: "Brunch this weekend?",
    secondary: "I'll be in your neighborhood doing errands this...",
    to: "Ali Connors",
  },
  {
    alt: "Travis Howard",
    src: "https://robohash.org/quiaquianobis.png?size=300x300&set=set1",
    primary: "Summer BBQ",
    secondary: "Wish I could come, but I'm out of town this...",
    to: "to Scott, Alex, Jennifer",
  },
  {
    alt: "Cindy Baker",
    src: "https://robohash.org/magniquienim.png?size=300x300&set=set1",
    primary: "Oui Oui",
    secondary: "Do you have Paris recommendations? Have you ever...",
    to: "Sandra Adams",
  },
];

const Messages = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleShow = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="notifications-menu"
        aria-haspopup="true"
        aria-label="notifications"
        onClick={handleShow}
      >
        <Badge badgeContent={messages.length} color="primary">
          <MessageIcon />
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
            {messages.length} New Messages
          </Typography>
          <Box style={{ cursor: "pointer" }}>
            {messages.map((message) => {
              return (
                <>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={message.alt}
                        src={message.src}
                        style={{
                          backgroundColor: theme.palette.primary.dark,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={message.primary}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {message.to}
                          </Typography>
                          {" — " + message.secondary}
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
          <Button>See all messages</Button>
        </Box>
      </MuiMenu>
    </>
  );
};

export default Messages;
