import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { useMediaQuery, useTheme } from "@material-ui/core";

// components
import Appbar from "./Appbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Shadow from "./Shadow";

// helpers
import * as spacing from "helpers/spacing";

const GlobalLayout = createGlobalStyle`
  #root {
    display: grid;
    grid-template-areas:
      'appbar'
      'main'
      'footer';
    grid-template-columns: auto;
    grid-template-rows: ${spacing.APPBAR_HEIGHT} 1fr auto;
    min-height: 100vh;
    transition: margin-left 0.5s ease-in;

    & > main {
      grid-area: main;
      overflow: auto;
      flex: 1 0 auto;
      & > div {
        min-width: 0px;
      }
    }
    footer {
      padding: 16px;
      grid-area: footer;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      grid-template-areas:
        'appbar appbar'
        'sidebar main'
        'sidebar footer';
      grid-template-columns: ${({ $isExpanded }) =>
        $isExpanded
          ? spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED
          : spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED} 1fr;
    }
  }
`;

const Layout = ({ children }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const [isExpanded, setIsExpanded] = useState(true);

  // adapt sidebar for desktop/mobile display
  useEffect(() => {
    setIsExpanded(!matchesMd);
  }, [matchesMd]);

  return (
    <>
      <GlobalLayout $isExpanded={isExpanded} />
      {matchesMd && isExpanded && (
        <Shadow onClick={() => setIsExpanded(false)} />
      )}
      <Appbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
