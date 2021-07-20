import { useEffect, useState } from "react";
import styled from "styled-components";

// components
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import Shadow from "./Shadow";

// helpers
import * as spacing from "helpers/spacing";
import { Breakpoints } from "helpers/theme";
import useIsScreenSize from "hooks/useIsScreenSize";

const Root = styled.div`
display: grid;
grid-template-areas: ${({ isSmallScreen }) =>
  isSmallScreen ? "'appbar' 'main';" : "'sidebar' 'main'"}
grid-template-columns: ${({ isExpanded, isSmallScreen }) =>
  isSmallScreen
    ? "auto;"
    : `${
        isExpanded
          ? spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED
          : spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED
      };`}
height: 100vh;
width: 100vw;
& > main {
  margin-top: ${spacing.APPBAR_HEIGHT};
  overflow: auto; 
  & > div {
    min-width: ${Breakpoints.ExtraSmall}px;
  },
},
`;

const getLeftMarginValue = (isSmallScreen, isExpanded) => {
  if (isSmallScreen) {
    return spacing.SIDEBAR_MOBILE_WIDTH_CONDENSED;
  } else {
    if (isExpanded) {
      return spacing.SIDEBAR_DESKTOP_WIDTH_EXPANDED;
    } else {
      return spacing.SIDEBAR_DESKTOP_WIDTH_CONDENSED;
    }
  }
};

const Layout = ({ children }) => {
  const isSmallScreen = useIsScreenSize();
  const [isExpanded, setIsExpanded] = useState(true);

  // adapt sidebar for desktop/mobile display
  useEffect(() => {
    setIsExpanded(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Root isExpanded={isExpanded} isSmallScreen={isSmallScreen}>
      {isSmallScreen && isExpanded && (
        <Shadow onClick={() => setIsExpanded(false)} />
      )}
      <Appbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <Sidebar
        isExpanded={isExpanded}
        isSmallScreen={isSmallScreen}
        setIsExpanded={setIsExpanded}
      />
      <main
        style={{
          gridArea: "main",
          left: getLeftMarginValue(isSmallScreen, isExpanded),
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          transition: "left 0.5s ease-in",
        }}
      >
        <div>{children}</div>
      </main>
    </Root>
  );
};

export default Layout;
