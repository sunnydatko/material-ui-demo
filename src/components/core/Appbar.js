import { useState } from 'react';
import styled from 'styled-components';

// material ui
import {
  Avatar,
  Button,
  Grid,
  InputBase,
  ListItemIcon,
  Menu as MuiMenu,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {
  ExitToApp as ExitToAppIcon,
  KeyboardArrowDownRounded as ChevDownIcon,
  Person as PersonIcon,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

// components
import Messages from 'components/core/Messages';
import Notifications from 'components/core/Notifications';

// helpers
import * as spacing from 'helpers/spacing';

const Root = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.palette.secondary.light};
  box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.12);
  display: flex;
  height: ${spacing.APPBAR_HEIGHT};
  left: ${(props) =>
    props.isExpanded ? spacing.SIDEBAR_EXPANDED : spacing.SIDEBAR_CONDENSED};
  position: fixed;
  right: 0;
  top: 0;
  transition: left 0.5s ease-in;
  z-index: 999;
`;

const AppbarContent = styled.div`
  position: absolute;
  left: 0px;
  height: ${spacing.APPBAR_HEIGHT};
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const AppBar = ({ isExpanded }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleShow = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root isExpanded={isExpanded}>
      <AppbarContent>
        {matchesMd && (
          <InputBase
            inputProps={{ 'aria-label': 'search' }}
            placeholder='Search…'
          />
        )}
        <Grid container justify='flex-end' spacing={3}>
          <Grid item>
            <Messages />
          </Grid>
          <Grid item>
            <Notifications />
          </Grid>
          <Grid item>
            <Button
              aria-controls='user-menu'
              aria-haspopup='true'
              endIcon={<ChevDownIcon />}
              onClick={handleShow}
              startIcon={
                <Avatar
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    height: '32px',
                    width: '32px',
                  }}
                >
                  SD
                </Avatar>
              }
            >
              {matchesMd && (
                <Typography variant='subtitle1'>Sunny Datko</Typography>
              )}
            </Button>
            <MuiMenu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              getContentAnchorEl={null}
              id='user-menu'
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
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
          </Grid>
        </Grid>
      </AppbarContent>
    </Root>
  );
};

export default AppBar;
