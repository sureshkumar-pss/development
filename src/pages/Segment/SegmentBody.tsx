// Import MUI components
import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
import { LIME_GREEN, THEME_COLOR } from "shared/constants/colors";

// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

import { useSegment } from "./SegmentContext";
import { SegmentSchema } from "./SegmentSchema";

export const SegmentBody = () => {
  const {
    options,
    handleAddSegmentSchema,
    setSegmentValue,
    segmentValue,
    inputValue,
    setInputValue,
    segmentList,
    setSegmentName,
  }: any = useSegment();
  return (
    <Box sx={{ p: 1.5 }}>
      <Typography
        sx={{
          ...customStyles.segmentNameText,
          fontWeight: 500,
          fontSize: "0.77rem",
        }}
      >
        Enter the Name of the segment
      </Typography>
      <TextField
        size="small"
        fullWidth
        sx={{
          mt: 1,
          fontSize: "0.7rem",
          "& .MuiInputBase-input": {
            fontSize: "0.75rem",
          },
        }}
        placeholder="Name of the segment"
        onChange={(e: any) => setSegmentName(e.target.value)}
        InputProps={{
          sx: customStyles.inputPlaceholder,
        }}
      />
      <Typography sx={{ ...customStyles.segmentNameText, mt: 1 }}>
        To save your segment, you need to add the schemas <br />
        to build the query
      </Typography>
      {/* { Traits section} */}
      <Stack
        spacing={2}
        direction="row"
        sx={{
          justifyContent: "flex-end",
          mt: 4,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Box
            style={{
              backgroundColor: LIME_GREEN,
              ...customStyles.indicator,
            }}
          />
          <Typography sx={customStyles.Traits}>- User Traits</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Box
            style={{
              backgroundColor: "red",
              ...customStyles.indicator,
            }}
          />
          <Typography sx={customStyles.Traits}>- Group Traits</Typography>
        </Stack>
      </Stack>
      {/* {add scheme Section} */}
      <Box sx={{ mt: 2 }}>
        <SegmentSchema />
      </Box>
      <Box sx={{ px: 2 }}>
        <Grid
          container
          sx={{ alignItems: "center", mt: segmentList.length > 0 ? 0 : 2 }}
          spacing={1}
        >
          <Grid item xs={1}>
            <Box
              style={{
                backgroundColor: "#888E89",
                ...customStyles.indicator,
              }}
            ></Box>
          </Grid>
          <Grid item xs={11}>
            {/* Autocomplete field for selecting schema */}
            <Autocomplete
              value={segmentValue}
              onChange={(_event, newValue) => setSegmentValue(newValue)}
              inputValue={inputValue}
              onInputChange={(_event, newInputValue) =>
                setInputValue(newInputValue)
              }
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              options={options || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Add schema to segment"
                  InputProps={{
                    ...params.InputProps,
                    sx: customStyles.inputPlaceholder,
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "0.8rem",
                    },
                  }}
                />
              )}
              ListboxProps={{
                sx: {
                  fontSize: "0.75rem", // Adjust the font size for the options
                },
              }}
            />
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "0.85rem",
            color: THEME_COLOR,
            cursor: "pointer",
            textDecoration: "underline",
            p: 4,
          }}
          onClick={handleAddSegmentSchema}
        >
          + Add new schema
        </Typography>
      </Box>
    </Box>
  );
};
// Customized system styles can be inserted into a Material-UI component using the sx property
const customStyles = {
  segmentNameText: { pt: 2, fontSize: "0.9rem" },
  Traits: {
    fontWeight: "500",
    textTransform: "none",
    fontSize: "13px",
    color: "#090909",
  },
  indicator: {
    height: 13,
    width: 13,
    borderRadius: "50%",
  },
  inputPlaceholder: {
    "& .MuiInputBase-input::placeholder": {
      fontSize: "0.75rem",
    },
  },
};
