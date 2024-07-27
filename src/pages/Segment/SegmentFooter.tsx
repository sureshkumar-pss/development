// Import MUI components
import { Stack } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
import { THEME_COLOR } from "shared/constants/colors";
// Import Custom Styles
// Import Customized Components
import { AppButton } from "components/AppButton";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
import { useSegment } from "./SegmentContext";

export const SegmentFooter = () => {
  const { handleSegmentDrawerClose, handleSegmentSubmit }: any = useSegment();

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ p: 2 }} gap={2}>
        <AppButton
          size="medium"
          label="Save the Segment"
          style={customStyles.segmentButton}
          onClick={handleSegmentSubmit}
        />
        <AppButton
          variant="text"
          size="medium"
          label="Cancel"
          style={customStyles.cancelButton}
          onClick={handleSegmentDrawerClose}
        />
      </Stack>
    </>
  );
};
// Customized system styles can be inserted into a Material-UI component using the sx property
const customStyles = {
  segmentButton: {
    backgroundColor: THEME_COLOR,
    color: "white",
    "&:hover": {
      backgroundColor: THEME_COLOR,
    },
    textTransform: "none",
  },
  cancelButton: {
    backgroundColor: "none",
    color: "red",
    "&:hover": {
      backgroundColor: "none",
    },
    textTransform: "none",
  },
};
