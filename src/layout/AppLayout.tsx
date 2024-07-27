// Import MUI components
import { Box, Toolbar } from "@mui/material";
// Import MUI Icons
// Import External Libraries
import { Outlet } from "react-router-dom";
// Import constants, functions and services

// Import Custom Styles
// Import Customized Components
import Header from "components/Header";
// Global Scope Variable and Constant Declarations

// Component Input Props Declaration

/**
 * App layout component.
 *
 * @returns {ReactElement} The rendered component.
 */
export default function AppLayout() {
  return (
    <Box>
      {/* Header component */}
      <Header />
      {/* Main component */}
      <Box component="main">
        <Toolbar />
        {/* Rendering of child components */}
        <Outlet />
      </Box>
    </Box>
  );
}
