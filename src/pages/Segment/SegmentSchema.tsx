// Import MUI components
import { Autocomplete, Box, Grid, IconButton, TextField } from "@mui/material";
// Import MUI Icons
// Import External Libraries
import { MdOutlineClear } from "react-icons/md";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
import { useSegment } from "./SegmentContext";
import { LIME_GREEN } from "shared/constants/colors";
export const SegmentSchema = () => {
  // To get data from segment context
  const { segmentList, handleEditSegment, handleRemoveSegment, options }: any =
    useSegment();

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={1}>
        {/* Mapping through segment schemas */}
        {segmentList?.map((item: any, index: number) => (
          <Grid item key={index} xs={12}>
            <Grid sx={{ alignItems: "center" }} container spacing={1}>
              <Grid item xs={1}>
                <Box
                  style={{
                    backgroundColor: LIME_GREEN,
                    ...customStyles.indicator,
                  }}
                ></Box>
              </Grid>
              {/* Autocomplete field for selecting schema */}
              <Grid item xs={10}>
                <Autocomplete
                  size="small"
                  value={item}
                  fullWidth
                  onChange={(_event, newValue) =>
                    handleEditSegment(newValue, item, index)
                  }
                  isOptionEqualToValue={(option, value) => {
                    return option?.value === value?.value;
                  }}
                  //   disablePortal
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: "0.8rem",
                        },
                      }}
                    />
                  )}
                //   ListboxProps={{
                //     sx: {
                //       fontSize: "0.75rem",
                //     },
                //   }}
                />
              </Grid>
              <Grid item xs={1}>
                {/* Button to remove schema */}
                <IconButton onClick={() => handleRemoveSegment(item, index)}>
                  <MdOutlineClear />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
// Customized system styles can be inserted into a Material-UI component using the sx property
const customStyles = {
  indicator: {
    height: 13,
    width: 13,
    borderRadius: "50%",
  },
};
