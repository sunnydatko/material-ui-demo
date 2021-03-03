// contexts
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

// themes
import theme from "./helpers/theme";

// material ui
import { CssBaseline } from "@material-ui/core";

// components
import Router from "./components/Router";
import "./app.css";

function App() {
  return (
    // Theme provider to give styled-components access to the theme
    <ThemeProvider theme={theme}>
      {/* Material theme provider to give Material UI access to the theme */}
      <MuiThemeProvider theme={theme}>
        {/* Application Router */}
        <Router />
        {/* CSS Baseline */}
        <CssBaseline />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
