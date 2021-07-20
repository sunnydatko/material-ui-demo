import { useState } from "react";

// material ui
import {
  Avatar,
  Button,
  ListItemIcon,
  Menu as MuiMenu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import {
  ExitToApp as ExitToAppIcon,
  KeyboardArrowDownRounded as ChevDownIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

const UserLogout = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShow = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        endIcon={<ChevDownIcon />}
        onClick={handleShow}
        startIcon={
          <Avatar
            style={{
              backgroundColor: theme.palette.primary.main,
              height: "32px",
              width: "32px",
            }}
          >
            SD
          </Avatar>
        }
      >
        <Typography variant="subtitle1">Sunny Datko</Typography>
      </Button>
      <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        getContentAnchorEl={null}
        id="user-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MuiMenu>
    </>
  );
};

export default UserLogout;
