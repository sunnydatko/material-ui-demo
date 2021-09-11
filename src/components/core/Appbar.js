import styled from "styled-components";

// material ui
import {
  Box,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

// components
import Messages from "components/core/Messages";
import Notifications from "components/core/Notifications";
import UserLogout from "components/core/UserLogout";

// helpers
import * as spacing from "helpers/spacing";

const Header = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.palette.common.white};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.08),
    0px 1px 1px 2px rgba(0, 0, 0, 0.02), 0px 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  grid-area: appbar;
  height: ${spacing.APPBAR_HEIGHT};
  padding-left: 9px;
  position: sticky;
  top: 0;
  z-index: 9;
`;

const AppBar = ({ isExpanded, setIsExpanded, className }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Header className={className}>
      <Grid container justify="space-between">
        <Grid item>
          <Box paddingLeft={1}>
            <IconButton disableRipple>
              <MenuIcon onClick={() => setIsExpanded(!isExpanded)} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" gridGap={theme.spacing(3)}>
            {matchesMd && (
              <>
                <Messages />
                <Notifications />
              </>
            )}
            <UserLogout />
          </Box>
        </Grid>
      </Grid>
    </Header>
  );
};

export default AppBar;
