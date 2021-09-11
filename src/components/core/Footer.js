import styled from "styled-components";

// material ui
import { Typography, Link as MuiLink } from "@material-ui/core";

const StyledFooter = styled.div`
  .MuiTypography-body2 {
    font-size: 12px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      font-size: inherit;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Typography align="center" display="block" variant="body2">
        Made by &nbsp;
        <MuiLink
          href="http://www.sunnydatko.com"
          target="_blank"
          variant="inherit"
        >
          Sunny Datko
        </MuiLink>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
