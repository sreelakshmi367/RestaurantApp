import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";

const SearchField: React.FC = () => {

  const location = useLocation();
  const placeholder =
    location.pathname.includes('/items') ? "Search for Dishes, Drinks..." : "Search for Categories...";

  return (
    <div className="mx-6 mt-6">
      <TextField
        id="standard-start-adornment"
        placeholder={placeholder}
        fullWidth
        className="mb-4 text-center"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon color="primary" sx={{ color: "#0e7490",stroke: "#0e7490",strokeWidth: 1,}}/>
                </IconButton>
              </InputAdornment>
            ),
            style: { textAlign: "center" },
          },
        }}
        sx={{
          backgroundColor: "#e5e7eb",
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            // borderRadius: "10px",
            "& fieldset": {
              borderColor: "#0e7490", 
              borderWidth: "2px",
            },
          },
          "& .MuiInputBase-root": {
            paddingLeft: "10px", 
            display: "flex",
            justifyContent: "center",
          },
          "& input": {
            textAlign: "center", 
          },
        }}
        variant="outlined"
      />
    </div>
  );
};

export default SearchField;
