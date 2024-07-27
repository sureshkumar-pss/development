// Import MUI components
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { THEME_COLOR } from "shared/constants/colors";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations

const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: THEME_COLOR,
        }}
      >
        <Toolbar>

        <Stack
        direction="row"
        sx={{ alignItems: "center" }}
        spacing={1}
      >
        <IoIosArrowBack
          style={{ fontSize: "1.1rem", color: "#FFFF", cursor: "pointer" }}
        />
        <Typography sx={{ fontSize: "1rem", color: "#FFFF" }}>
          View Audience
        </Typography>
      </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
