import styled from "styled-components";

// material ui
import {
  Box,
  Typography,
  Link as MuiLink,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Favorite } from "@material-ui/icons";

const Root = styled.div`
  align-self: center;

  .MuiTypography-body2 {
    font-size: ${(props) => (props.matchesXs ? "12px" : undefined)};
  }
`;

const Footer = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Root matchesXs={matchesXs}>
      <Typography align="center" display="block" variant="caption">
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          Made with <Favorite style={{ fill: "red" }} /> by
          <MuiLink
            href="http://www.sunnydatko.com"
            target="_blank"
            variant="inherit"
          >
            Sunny
          </MuiLink>
        </Box>
      </Typography>
    </Root>
  );
};

export default Footer;
