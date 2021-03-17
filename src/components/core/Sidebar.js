import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// material ui
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  AttachMoney,
  ArrowBack,
  ArrowForward,
  Face,
  Home,
  Receipt,
  Settings,
} from '@material-ui/icons';

import logo from 'assets/sunny-designs.svg';
import reactIcon from 'assets/react-icon.svg';
import * as spacing from 'helpers/spacing';

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.primary.dark} !important;
  color: ${(props) => props.theme.palette.primary.contrastText} !important;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  transition: width 0.5s ease-in;
  width: ${(props) =>
    props.isExpanded ? spacing.SIDEBAR_EXPANDED : spacing.SIDEBAR_CONDENSED};

  .MuiListItem-root {
    padding: ${(props) =>
      props.isExpanded ? '12px 0 12px 24px' : '16px 0 16px 24px'};
    width: ${(props) =>
      props.isExpanded ? spacing.SIDEBAR_EXPANDED : spacing.SIDEBAR_CONDENSED};
    transition: width 0.5s ease-in;
  }

  .MuiListItem-root.Mui-selected {
    background-color: ${(props) => props.theme.palette.primary.main} !important;

    .MuiTypography-body1 {
      font-weight: 700 !important;
    }
  }

  .MuiListItem-root.Mui-focusVisible,
  .MuiListItem-button:hover {
    background-color: ${(props) => props.theme.palette.primary.light};
  }
`;

const LayoutContent = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  min-height: calc(100vh);
`;

const menuItems = [
  {
    title: 'Home',
    icon: <Home style={{ fill: 'white' }} />,
    target: '/home',
  },
  {
    title: 'Customers',
    icon: <Face style={{ fill: 'white' }} />,
    target: '/customers',
  },
  {
    title: 'Invoices',
    icon: <Receipt style={{ fill: 'white' }} />,
    target: '/invoices',
  },
  {
    title: 'Payments',
    icon: <AttachMoney style={{ fill: 'white' }} />,
    target: '/payments',
  },
  {
    title: 'Settings',
    icon: <Settings style={{ fill: 'white' }} />,
    target: '/settings',
  },
];

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  return (
    <Root isExpanded={isExpanded}>
      <LayoutContent isExpanded={isExpanded}>
        <Box>
          <Grid container justify='center'>
            <img
              alt='logo'
              src={isExpanded ? logo : reactIcon}
              style={{
                height: '46px',
                width: isExpanded ? '200px' : '46px',
                margin: '10px 0',
              }}
            />
          </Grid>

          <Divider variant='middle' />
          <Box paddingTop='12px'>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  activeClassName='Mui-selected'
                  button
                  component={NavLink}
                  key={index}
                  to={item.target}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {isExpanded && <ListItemText primary={item.title} />}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box>
          <Grid container>
            {isExpanded ? (
              <Button
                color='secondary'
                onClick={() => setIsExpanded(!isExpanded)}
                startIcon={<ArrowBack />}
                style={{ width: '100%' }}
              >
                Collapse
              </Button>
            ) : (
              <Box margin='0px auto'>
                <IconButton
                  color='secondary'
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
            )}
          </Grid>
        </Box>
      </LayoutContent>
    </Root>
  );
};

export default Sidebar;
