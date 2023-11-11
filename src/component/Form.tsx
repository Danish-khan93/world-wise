import { TextField, Box } from "@mui/material";

const Form = () => {
  return (
    <Box className="w-[400px] h-[400px] bg-[#0d1321] rounded-lg">
      <form className="w-[300px] flex flex-col items-center gap-3 pt-6">
        <TextField label={"City Name"} className="bg-white border-black" />

        <TextField label={"message"} className="bg-white" />
      </form>
    </Box>
  );
};

export default Form;
