import { Typography, Box } from "@mui/material";
import homepagebg from "../assets/homePage-bg.jpg";
import { Link } from "react-router-dom";
import PageNav from "../component/PageNav";
const HomePage = () => {
  return (
    <>
    <PageNav/>
      <Box sx={{ backgroundImage: `URL(${homepagebg})` }}>
        <Box className="min-h-screen flex flex-col justify-center items-center text-center">
          <Typography className="text-white" variant="h4">
            You travel the world.
          </Typography>
          <Typography className="text-white" variant="h4">
            World wise keeps track of your
          </Typography>
          <Typography gutterBottom className="text-white" variant="h4">
            adventures.
          </Typography>
          <Typography className="text-white w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            non possimus temporibus dignissimos voluptates quae, aut officiis
            quo incidunt aperiam! Accusamus quaerat laborum eum nemo numquam,
            sequi qui incidunt. Rerum!
          </Typography>
          <Link to="/app" className="bg-green-500 rounded w-[200px] mt-5">
            <Typography className="text-black text-xl">
              Start tracking Now
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
