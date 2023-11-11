import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <AppBar position="absolute" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar className="flex justify-between items-center">
        <Box>
          <NavLink to="/">
            <Typography variant="h5">WorldWise</Typography>
          </NavLink>
        </Box>
        <Box className="flex items-center gap-6">
          <NavLink to="/product">
            <Typography>Product</Typography>
          </NavLink>
          <NavLink to="/pricing">
            <Typography>Pricing</Typography>
          </NavLink>

          <NavLink to="/login">
            <Typography className="bg-green-400 w-20 align-middle text-center items-center rounded ">
              Log in
            </Typography>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PageNav;
