import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Badge } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleBackClick = () => {
    navigate("/"); // Navigate to categories path on click
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "7rem",
        width: "100%",
        backgroundColor: "rgb(229, 231, 235)",
        padding: "1.75rem",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr", 
        alignItems: "center",
      }}
    >
    
      <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="outlined"
          sx={{
            color: "#0e7490",
            fontSize: { xs: "0.875rem", sm: "1rem" }, 
            textTransform: "none",
          }}
          onClick={handleBackClick}
        >
          <ArrowBackIosIcon sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }} />
          Back
        </Button>
      </Grid>

      <Grid sx={{ textAlign: "center" }}>
        <span
          style={{
            color: "#0e7490",
            fontWeight: "bold",
          }}
          className="text-lg lg:text-xl"
        >
          In Room Dining
        </span>
      </Grid>

      <Grid sx={{ textAlign: "right" }}>
        <Badge
          badgeContent={totalCount > 0 ? totalCount : "0"}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#0e7490",
              color: "white",
              fontWeight: "bold",
            },
            color: "#0e7490",
            fontSize: { xs: "14px", sm: "16px" }, 
            borderRadius: "50%",
          }}
        >
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Grid>
    </Grid>
  );
}
