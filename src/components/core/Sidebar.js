import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

// material ui
import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  AttachMoney,
  ArrowBack,
  ArrowForward,
  Face,
  Home,
  Receipt,
  Settings,
} from "@material-ui/icons";

import logo from "assets/sunny-designs.svg";
import reactIcon from "assets/react-icon.svg";
import * as spacing from "helpers/spacing";

const Branding = styled.div`
  margin: 10px auto;
  padding: 8px 4px;
  max-height: ${(props) => (props.isExpanded ? "31px" : "50px")};
  max-width: ${(props) => (props.isExpanded ? "230px" : "72px")};
  min-height: ${(props) => (props.isSmallScreen ? "31px" : "50px")};
  min-width: ${(props) => (props.isSmallScreen ? "230px" : "72px")};
`;

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.primary.dark} !important;
  color: ${(props) => props.theme.palette.primary.contrastText} !important;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  transition: width 0.5s ease-in;
  width: ${(props) => getSidebarWidth(props)};
  z-index: 999;

  .MuiListItem-root {
    padding: ${(props) =>
      props.isExpanded ? "12px 0 12px 24px" : "16px 0 16px 24px"};
    width: ${(props) => (props.isExpanded ? "240px" : "inherit")};
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

const getSidebarWidth = (props) => {
  if (props.isSmallScreen) {
    if (props.isExpanded) {
      return spacing.SIDEBAR_MOBILE_WIDTH_EXPANDED;
    } else {
      return spacing.SIDEBAR_MOBILE_WIDTH_CONDENSED;
    }
  } else {
    if (props.isExpanded) {
      return spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED;
    } else {
      return spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED;
    }
  }
};

const menuItems = (matches) => {
  return [
    {
      title: "Home",
      icon: <Home style={{ fill: "white" }} />,
      target: "/home",
    },
    {
      title: "Customers",
      icon: <Face style={{ fill: "white" }} />,
      target: "/customers",
    },
    {
      title: "Invoices",
      icon: <Receipt style={{ fill: "white" }} />,
      target: "/invoices",
    },
    {
      title: "Payments",
      icon: <AttachMoney style={{ fill: "white" }} />,
      target: "/payments",
    },
    {
      title: "Settings",
      icon: <Settings style={{ fill: "white" }} />,
      target: "/settings",
    },
  ];
};

const Sidebar = ({ isExpanded, isSmallScreen, setIsExpanded }) => {
  const matches = useRouteMatch(["*"]);

  return (
    <Root
      isExpanded={isExpanded}
      isSmallScreen={isSmallScreen}
      style={{ gridArea: "sidebar" }}
    >
      <Branding isExpanded={isExpanded}>
        <img
          alt="logo"
          src={isSmallScreen ? logo : isExpanded ? logo : reactIcon}
        />
      </Branding>

      <List>
        {menuItems(matches).map((item, index) => (
          <ListItem
            activeClassName="Mui-selected"
            alignItems="center"
            button
            component={NavLink}
            key={index}
            onClick={() =>
              isSmallScreen && isExpanded
                ? setIsExpanded(!isExpanded)
                : undefined
            }
            to={item.target}
            style={{ width: "100%" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isExpanded && <ListItemText primary={item.title} />}
          </ListItem>
        ))}
      </List>
      <Box>
        <Grid container>
          <Hidden only={["xs", "sm"]}>
            {isExpanded ? (
              <Button
                color="secondary"
                onClick={() => setIsExpanded(!isExpanded)}
                startIcon={<ArrowBack />}
                style={{ width: "100%" }}
              >
                Collapse
              </Button>
            ) : (
              <Box margin="0px auto">
                <IconButton
                  color="secondary"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
            )}
          </Hidden>
        </Grid>
      </Box>
    </Root>
  );
};

export default Sidebar;
