import { ThemeProvider } from "@mui/material";
import "styles/App.css";
import AllRoutes from "routes";
import theme from "theme";
import { LoaderProvider } from "context/LoaderProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <AllRoutes />
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
