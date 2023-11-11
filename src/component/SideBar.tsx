import { Typography, Box } from "@mui/material";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
const SideBar = () => {
  return (
    <Box className="bg-[#36454F] min-h-screen pt-[100px] flex flex-col justify-between items-center w-[50%]">
      <Box>
        <Typography variant="h3" className="text-white">
          World Wise
        </Typography>
        <AppNav />
        {/* <Typography>list of Cities</Typography> */}
        <Outlet />
      </Box>
      <Box>
        <Typography className="text-white">
          &copy; copyright{new Date().getFullYear()} by world wise Inc
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBar;
