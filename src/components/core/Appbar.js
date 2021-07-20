import styled from "styled-components";

// material ui
import { Box, Grid, Hidden, IconButton, InputBase } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

// components
import Messages from "components/core/Messages";
import Notifications from "components/core/Notifications";
import UserLogout from "components/core/UserLogout";

// helpers
import * as spacing from "helpers/spacing";
import useIsScreenSize from "hooks/useIsScreenSize";

const getLeftValue = (props) => {
  if (props.isSmallScreen) {
    return spacing.SIDEBAR_MOBILE_WIDTH_CONDENSED;
  } else {
    if (props.isExpanded) {
      return spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED;
    } else {
      return spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED;
    }
  }
};

const Root = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.isSmallScreen && props.isExpanded
      ? undefined
      : props.theme.palette.secondary.light};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.08),
    0px 1px 1px 2px rgba(0, 0, 0, 0.02), 0px 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  height: ${spacing.APPBAR_HEIGHT};
  left: ${(props) => getLeftValue(props)};
  position: fixed;
  right: 0;
  top: 0;
  transition: left 0.5s ease-in;
  z-index: 10;
`;

const AppbarContent = styled.div`
  align-items: center;
  display: flex;
  height: ${spacing.APPBAR_HEIGHT};
  left: 0px;
  padding: 0 16px;
  position: absolute;
  top: 0;
  right: 0;
`;

const MenuIconContainer = styled.div`
  height: ${spacing.APPBAR_HEIGHT};
  margin-left: 10px;
  padding-top: 8px;
`;

const MobileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const AppBar = ({ isExpanded, setIsExpanded }) => {
  const isSmallScreen = useIsScreenSize();

  return (
    <Root
      isExpanded={isExpanded}
      isSmallScreen={isSmallScreen}
      style={{ gridArea: "appbar" }}
    >
      {/* desktop view */}
      <Hidden only={["xs", "sm"]}>
        <Box paddingTop={1} textAlign="right">
          <AppbarContent>
            <InputBase
              inputProps={{ "aria-label": "search" }}
              placeholder="Search…"
            />

            <Grid container justify="flex-end" spacing={3}>
              <Grid item>
                <Messages />
              </Grid>
              <Grid item>
                <Notifications />
              </Grid>
              <Grid item>
                <UserLogout />
              </Grid>
            </Grid>
          </AppbarContent>
        </Box>
      </Hidden>

      {/* mobile view */}
      <Hidden only={["md", "lg", "xl"]}>
        <MobileWrapper>
          <MenuIconContainer>
            <IconButton
              aria-label="toggle menu"
              color="primary"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <MenuIcon />
            </IconButton>
          </MenuIconContainer>
        </MobileWrapper>
      </Hidden>
    </Root>
  );
};

export default AppBar;
