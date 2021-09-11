import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

// material ui
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AttachMoney, Face, Home, Receipt, Settings } from "@material-ui/icons";
import { useMediaQuery, useTheme } from "@material-ui/core";

import logo from "assets/sunny-designs.svg";
import reactIcon from "assets/react-icon.svg";
import * as spacing from "helpers/spacing";

const Branding = styled.div`
  margin: 0px auto;
  max-width: 220px;
  padding-top: 16px;

  img {
    max-height: 56px;
  }
`;

const StyledSidebar = styled.nav`
  background-color: ${(props) => props.theme.palette.primary.dark};
  bottom: 0;
  color: ${(props) => props.theme.palette.grey[200]};
  grid-area: sidebar;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: width 0.5s ease-in;
  width: ${({ $isExpanded }) =>
    $isExpanded
      ? spacing.SIDEBAR_MOBILE_WIDTH_EXPANDED
      : spacing.SIDEBAR_MOBILE_WIDTH_CONDENSED};
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    top: ${spacing.APPBAR_HEIGHT};
    width: ${({ $isExpanded }) =>
      $isExpanded
        ? spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED
        : spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED};
    z-index: ${({ $isExpanded }) => ($isExpanded ? "999" : "10")};
  }

  .MuiListItem-root {
    border-radius: none;
    height: 56px;
    padding: ${({ $isExpanded }) =>
      $isExpanded ? "12px 0 12px 24px" : "16px 0 16px 24px"};
    width: ${({ $isExpanded }) => ($isExpanded ? "240px" : "inherit")};
  }

  .MuiTypography-subtitle1 {
    color: ${(props) => props.theme.palette.grey[100]}};
  }

  .MuiListItem-root.Mui-selected {
    background-color: ${(props) => props.theme.palette.primary.main} !important;
    color: ${(props) => props.theme.palette.common.white};

    .MuiTypography-subtitle1 {
      font-weight: 700;
    }
  }

  .MuiListItem-root.Mui-focusVisible,
  .MuiListItem-button:hover {
    background-color: ${(props) => props.theme.palette.primary.light};
  }

  .MuiListItemIcon-root {
    min-width: 36px;
  }
`;

const menuItems = () => {
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

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const matches = useRouteMatch(["*"]);
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledSidebar $isExpanded={isExpanded}>
      <Branding>
        <img
          alt="logo"
          src={matchesMd ? logo : isExpanded ? logo : reactIcon}
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
              matchesMd && isExpanded ? setIsExpanded(!isExpanded) : undefined
            }
            to={item.target}
            style={{ width: "100%" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isExpanded && <ListItemText primary={item.title} />}
          </ListItem>
        ))}
      </List>
    </StyledSidebar>
  );
};

export default Sidebar;
