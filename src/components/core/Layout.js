import { useState } from "react";
import styled from "styled-components";

// components
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

// helpers
import * as spacing from "../../helpers/spacing";

const LayoutContent = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.light};
  margin-left: ${(props) =>
    props.isExpanded ? spacing.sidebarExpanded : spacing.sidebarCondensed};
  transition: margin-left 0.5s ease-in;
`;

const PageWrapper = styled.div`
  margin-top: ${spacing.appbarHeight};
`;

const Layout = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <LayoutContent isExpanded={isExpanded}>
        <Appbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <PageWrapper> {children}</PageWrapper>
      </LayoutContent>
    </>
  );
};

export default Layout;
