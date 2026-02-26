import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = ({ setUser, API_URL }) => {
  const { register, handleSubmit, control, reset } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, data);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setError("Registracion failed");
    }
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        control={control}
        register={register}
        name="name"
        label="Name"
      />

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

export default Register;
