// Import MUI components
import { Box, Stack, Typography } from "@mui/material";
// Import MUI Icons
// Import External Libraries
import { IoIosArrowBack } from "react-icons/io";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
import { useSegment } from "./SegmentContext";
import { AQUA_GREEN } from "shared/constants/colors";

export const SegmentHeader = () => {
    // To get data from segment context
  const { handleSegmentDrawerClose }: any = useSegment();
  return (
    <Box sx={{ backgroundColor: AQUA_GREEN, p: 1.5 }}>
      <Stack
        direction="row"
        sx={{ alignItems: "center" }}
        spacing={1}
        onClick={handleSegmentDrawerClose}
      >
        <IoIosArrowBack
          style={{ fontSize: "1.1rem", color: "#FFFF", cursor: "pointer" }}
        />
        <Typography sx={{ fontSize: "1rem", color: "#FFFF" }}>
          Saving Segment
        </Typography>
      </Stack>
    </Box>
  );
};
