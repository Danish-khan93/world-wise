import { Box, Typography } from "@mui/material";
import productPage from "../assets/productPage.jpg";
import PageNav from "../component/PageNav";
const Poduct = () => {
  return (
    <>
      <Box className="bg-[#36454F] min-h-screen">
        <PageNav />
        <Box className="pt-[100px] px-32 flex justify-evenly items-center">
          <Typography
            className="w-[400px] h-[400px]"
            component={"img"}
            src={productPage}
          ></Typography>
          <Box className="text-white w-[300px] h-[300px]">
            <Typography variant="h4">About World wise</Typography>
            <Typography variant="h6" className="w-[300px] h-[300px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eos
              officiis ipsa impedit velit culpa, omnis fuga placeat ad ex! Minus
              veritatis vel commodi, veniam eveniet laboriosam atque quis harum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eos
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Poduct;
