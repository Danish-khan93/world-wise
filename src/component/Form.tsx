import { Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  return (
    <Box className="w-[400px] h-[400px] bg-[#0d1321] rounded-lg">
      <form className="w-[300px] flex flex-col items-center gap-3 pt-6">
        <TextField
          size="small"
          label={"City Name"}
          className="bg-white border-black"
        />

        <TextField size="small" label={"message"} className="bg-white" />
        <Box className="flex justify-around w-[400px] my-5">
          <Button >add</Button>
          <Button
            className="bg-white"
            onClick={(e) => {
              e.preventDefault()
              navigate(-1);
            }}
          >
            back
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
