import { useFormState } from "react-hook-form";

const FormInput = ({ name, type = "text", label, register, control }) => {
  const { errors } = useFormState({ control, name });

  const rules = {
    required: `${name} is required`,
    minLength: { value: 4, message: "Mine 4 caracteres" },
    ...(name === "email" && {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email",
      },
    }),
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xl font-medium">
        {label}
      </label>

      <input
        type={type}
        id={name}
        placeholder={label}
        {...register(name, rules)}
        className="bg-neutral-300 rounded-lg text-xl outline-none px-2 py-1 text-neutral-500"
      />
      {errors[name] && <p className="text-red-900">{errors[name].message}</p>}
    </div>
  );
};

export default FormInput;
