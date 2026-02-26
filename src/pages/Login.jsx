import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser, API_URL }) => {
  const [error, setError] = useState();
  const { register, handleSubmit, control, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, data);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
    reset();
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <p className="text-red-500">{error}</p>}
      <FormInput
        control={control}
        register={register}
        name="email"
        label="Email"
        type="email"
      />
      <FormInput
        control={control}
        register={register}
        name="password"
        label="Password"
        type="password"
      />
      <FormButton />
    </form>
  );
};

export default Login;
