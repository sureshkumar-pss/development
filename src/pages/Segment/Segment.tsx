import { Fragment } from "react";
// Import MUI components
import { Alert, Snackbar, Stack } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
import { AppButton } from "components/AppButton";
import { AppDrawer } from "components/AppDrawer";
// Global Scope Variable and Constant Declarations
import { THEME_COLOR } from "shared/constants/colors";
// Component Input Props Declaration
import { useSegment } from "./SegmentContext";
import { SegmentDrawer } from "./SegmentDrawer";

export const Segment = () => {
  const {
    handleSegmentDrawerOpen,
    handleSegmentDrawerClose,
    openSegmentDrawer,
    setSegmentError,
    segmentError,
  }: any = useSegment();

  return (
    <Fragment>
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", height: "80vh", justifyContent: "center" }}
      >
        {/* Button to save segment */}
        <AppButton
          size="medium"
          label="Save segment"
          style={customStyles.segmentButton}
          onClick={() => handleSegmentDrawerOpen()}
        />
      </Stack>
      {openSegmentDrawer && (
        <AppDrawer open={openSegmentDrawer} onClose={handleSegmentDrawerClose}>
          <SegmentDrawer />
        </AppDrawer>
      )}
      <Snackbar
        open={segmentError}
        autoHideDuration={3000}
        onClose={() => setSegmentError(false)}
      >
        <Alert
          onClose={() => setSegmentError(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please fill the all fields
        </Alert>
      </Snackbar>
    </Fragment>
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
};
