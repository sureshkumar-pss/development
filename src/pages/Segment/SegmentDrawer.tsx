// Import MUI components
import { Box } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
import { SegmentHeader } from "./SegmentHeader";
import { SegmentBody } from "./SegmentBody";
import { SegmentFooter } from "./SegmentFooter";

export const SegmentDrawer = () => {
  return (
    <>
      <Box sx={customStyles.scrollBar}>
        <SegmentHeader />
        <SegmentBody />
      </Box>

      <SegmentFooter />
    </>
  );
};
const customStyles = {
  scrollBar: {
    height: "90vh",
    overflowY: "auto",
    overflowX: "none",
    position: "relative",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "3px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
};
