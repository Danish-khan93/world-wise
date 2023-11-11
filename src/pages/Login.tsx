import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

type LOGIN = {
  email: string;
  password: string;
};
const Login = () => {
  const { register, handleSubmit, formState } = useForm<LOGIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;

  const onSubmit = (data: LOGIN) => {
    console.log(data);
  };
  return (
    <Box className="flex justify-center items-center bg-[#36454F] min-h-screen">
      <Box className=" bg-slate-950/25 w-[400px] p-20 rounded">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-5 "
        >
          <TextField
            className="bg-white rounded"
            label="Email"
            {...register("email", {
              required: { value: true, message: "this is requird" },
            })}
            error={!errors}
            helperText={errors?.email?.message}
          />
          <TextField
            className="bg-white rounded"
            label="Password"
            {...register("password", {
              required: { value: true, message: "this is requird" },
            })}
            error={!errors}
            helperText={errors?.password?.message}
          />
          <Button
            sx={{ backgroundColor: "green", color: "black" }}
            type="submit"
          >
            Log in
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
