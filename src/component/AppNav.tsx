import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const AppNav = () => {
  return (
    <Box className="w-[400px] flex justify-evenly bg-black text-white rounded my-5">
      <NavLink
        to="/app/cities"
        className={({ isActive }) =>
          `w-[50%] rounded ${isActive ? "bg-slate-500" : "bg-slate-950"} p-2 text-center`
        }
      >
        <Typography variant="h6">Cities</Typography>
      </NavLink>
      <NavLink
        to="/app/country"
        className={({ isActive }) =>
          `w-[50%] rounded ${isActive ? "bg-slate-500" : "bg-slate-950"} p-2 text-center`
        }
      >
        <Typography variant="h6" className="">
          Country
        </Typography>
      </NavLink>
    </Box>
  );
};

export default AppNav;
